import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, X } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const phoneCountries = [
  { code: "IL", dialCode: "+972", label: "Israel" },
  { code: "US", dialCode: "+1", label: "United States" },
  { code: "CA", dialCode: "+1", label: "Canada" },
  { code: "GB", dialCode: "+44", label: "United Kingdom" },
  { code: "AU", dialCode: "+61", label: "Australia" },
  { code: "DE", dialCode: "+49", label: "Germany" },
  { code: "FR", dialCode: "+33", label: "France" },
  { code: "AE", dialCode: "+971", label: "United Arab Emirates" },
  { code: "IN", dialCode: "+91", label: "India" },
  { code: "BR", dialCode: "+55", label: "Brazil" },
  { code: "JP", dialCode: "+81", label: "Japan" },
  { code: "SG", dialCode: "+65", label: "Singapore" },
];

const HUBSPOT_PORTAL_ID = "27110913";
const HUBSPOT_FORM_GUID = "4a4b8082-6eb3-4d8a-ab0a-534130af7a67";

// This portal is hosted in HubSpot's EU data center, so the hostname must
// include eu1. The US endpoint returns 404 and leads would silently vanish.
const HUBSPOT_REGION = "eu1"; // "" for US-hosted portals
const HUBSPOT_API_HOST = HUBSPOT_REGION ? `api-${HUBSPOT_REGION}.hsforms.com` : "api.hsforms.com";
const HUBSPOT_ENDPOINT = `https://${HUBSPOT_API_HOST}/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwY7Uqo6NWIptuPpn3kHeOrJ1Hhav21Mj08A70pZtJr4Zqms6x9LXx1OCX_PPXcsGTFkw/exec";

const readCookie = (name: string): string => {
  const match = document.cookie.match(new RegExp("(^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[2]) : "";
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    phoneCountry: "IL",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [botField, setBotField] = useState("");
  const [phoneDialCode, setPhoneDialCode] = useState("+972");

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const handlePhoneChange = (value: string) => {
    const dialDigits = phoneDialCode.replace(/\D/g, "");
    const enteredDigits = value.replace(/\D/g, "");
    const phoneDigits = enteredDigits.startsWith(dialDigits) && enteredDigits.length > dialDigits.length + 7
      ? enteredDigits.slice(dialDigits.length)
      : enteredDigits;

    updateField("phone", phoneDigits);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (botField) {
      setSubmitStatus("success");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const fullPhone = `${phoneDialCode}${formData.phone.replace(/\D/g, "")}`;

    void fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: fullPhone,
        company: formData.company,
        jobTitle: formData.jobTitle,
      }),
    }).catch(() => {});

    const hutk = readCookie("hubspotutk");

    try {
      const response = await fetch(HUBSPOT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submittedAt: Date.now(),
          fields: [
            { objectTypeId: "0-1", name: "firstname", value: formData.firstName },
            { objectTypeId: "0-1", name: "lastname", value: formData.lastName },
            { objectTypeId: "0-1", name: "email", value: formData.email },
            { objectTypeId: "0-1", name: "phone", value: fullPhone },
            { objectTypeId: "0-1", name: "company", value: formData.company },
            { objectTypeId: "0-1", name: "jobtitle", value: formData.jobTitle },
          ],
          context: {
            ...(hutk ? { hutk } : {}),
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      });

      if (!response.ok) {
        const detail = await response.json().catch(() => null);
        throw new Error(detail?.message ?? `HubSpot returned ${response.status}`);
      }

      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          jobTitle: "",
          email: "",
          phone: "",
          phoneCountry: "IL",
        });
        setPhoneDialCode("+972");
        setSubmitStatus("idle");
      }, 2500);
    } catch (error) {
      console.error("Zeus demo submission failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [isOpen]);

  if (!isOpen) return null;

  const inputClassName = "w-full rounded-lg border border-[#e7d8f2] bg-white px-3 py-2.5 text-base sm:text-sm text-[#160d1f] placeholder:text-[#9a849f] transition-colors focus:border-[#a126e9] focus:outline-none";
  const labelClassName = "mb-2 block text-sm font-medium text-[#382b3e]";

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/30 p-3 pt-20 backdrop-blur-sm sm:items-center sm:p-6 sm:pt-6">
      <div className="relative my-auto grid w-full max-w-5xl gap-6 rounded-2xl border border-[#d7b4ee] bg-white p-5 shadow-[0_20px_60px_rgba(161,38,233,0.15)] sm:gap-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          aria-label="Close demo form"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#9a849f] shadow-sm transition-colors hover:text-[#160d1f] sm:right-5 sm:top-5 sm:h-auto sm:w-auto sm:bg-transparent sm:shadow-none"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col justify-center pt-2 lg:pt-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a126e9] sm:mb-4">Zeus Platform</p>
          <h2 className="max-w-sm text-4xl font-light leading-[0.95] tracking-tight text-[#160d1f] sm:text-6xl">
            See Zeus Hack
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#786a80] sm:mt-6 sm:text-base sm:leading-7">
            Point Zeus at your attack surface and see autonomous security testing uncover and prove real vulnerabilities.
          </p>
        </div>

        <div className="rounded-xl border border-[#e7d8f2] bg-[#fffaff] p-4 sm:p-7">
          <h3 className="mb-5 text-xl font-medium text-[#160d1f] sm:mb-7 sm:text-2xl">Get a Demo</h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <input
              type="text"
              name="company_website"
              value={botField}
              onChange={(event) => setBotField(event.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <div>
              <label htmlFor="firstName" className={labelClassName}>First Name *</label>
              <input id="firstName" type="text" required className={inputClassName} value={formData.firstName} onChange={(event) => updateField("firstName", event.target.value)} />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClassName}>Last Name *</label>
              <input id="lastName" type="text" required className={inputClassName} value={formData.lastName} onChange={(event) => updateField("lastName", event.target.value)} />
            </div>
            <div>
              <label htmlFor="company" className={labelClassName}>Company Name *</label>
              <input id="company" type="text" required className={inputClassName} value={formData.company} onChange={(event) => updateField("company", event.target.value)} />
            </div>
            <div>
              <label htmlFor="jobTitle" className={labelClassName}>Job Title *</label>
              <input id="jobTitle" type="text" required className={inputClassName} value={formData.jobTitle} onChange={(event) => updateField("jobTitle", event.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className={labelClassName}>Business Email *</label>
              <input id="email" type="email" required className={inputClassName} value={formData.email} onChange={(event) => updateField("email", event.target.value)} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClassName}>Phone Number</label>
              <div className="flex items-stretch overflow-hidden rounded-lg border border-[#e7d8f2] bg-white transition-colors focus-within:border-[#a126e9]">
                <div className="relative flex items-center gap-1.5 border-r border-[#e7d8f2] px-2.5 py-2.5">
                  <ReactCountryFlag countryCode={formData.phoneCountry} svg style={{ width: 22, height: 16, borderRadius: 2, flexShrink: 0 }} />
                  <select
                    aria-label="Phone country"
                    value={formData.phoneCountry}
                    onChange={(event) => {
                      const country = phoneCountries.find(({ code }) => code === event.target.value);
                      updateField("phoneCountry", event.target.value);
                      setPhoneDialCode(country?.dialCode ?? "+972");
                    }}
                    className="absolute inset-0 cursor-pointer appearance-none bg-transparent text-transparent focus:outline-none"
                  >
                    {phoneCountries.map((country) => (
                      <option key={country.code} value={country.code}>{country.label} ({country.dialCode})</option>
                    ))}
                  </select>
                </div>
                <span className="flex items-center bg-transparent px-2 py-2.5 text-base sm:text-sm font-medium text-[#786a80]">{phoneDialCode}</span>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  placeholder="50 123 4567"
                  className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-base sm:text-sm text-[#160d1f] placeholder:text-[#b4a7b8] focus:outline-none"
                  value={formData.phone}
                  onChange={(event) => handlePhoneChange(event.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-lg bg-[#d390ff] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
                {!isSubmitting && <ArrowRight className="h-4 w-4" />}
              </button>
            </div>

            {submitStatus === "success" && <p className="sm:col-span-2 text-sm text-[#328c4a]">Form submitted successfully!</p>}
            {submitStatus === "error" && <p className="sm:col-span-2 text-sm text-[#d71920]">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
