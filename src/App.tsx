import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PenetrationTestingPage from './pages/PenetrationTestingPage';
import CloudPenTestingPage from './pages/CloudPenTestingPage';
import RedTeamPage from './pages/RedTeamPage';
import RansomwareReadinessPage from './pages/RansomwareReadinessPage';
import ManagedEasPage from './pages/ManagedEasPage';
import SsdlcPage from './pages/SsdlcPage';
import RiskAssessmentPage from './pages/RiskAssessmentPage';
import CodeReviewPage from './pages/CodeReviewPage';
import CompanyPage from './pages/CompanyPage';
import CisoServicePage from './pages/CisoServicePage';
import IncidentResponsePage from './pages/IncidentResponsePage';
import CareersPage from './pages/CareersPage';
import ClientsPage from './pages/ClientsPage';
import PresentationPage from './pages/PresentationPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import TermsPage from './pages/TermsPage';
import AiPenTestingPage from './pages/AiPenTestingPage';
import AgenticPentestPage from './pages/AgenticPentestPage';
import ZeusPage from './pages/ZeusPage';
import Navbar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';
import LiveChat from './components/LiveChat';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isZeusOnePager = location.pathname === '/products/agentic-pentest';

  return (
      <Routes>
        <Route
          path="/landing"
          element={<LandingPage />}
        />
        <Route
          path="/thank-you"
          element={<ThankYouPage />}
        />
        <Route
          path="/terms"
          element={<TermsPage />}
        />
        <Route
          path="*"
          element={
            <>
              {!isZeusOnePager && <Navbar />}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services/penetration-testing" element={<PenetrationTestingPage />} />
                <Route path="/services/cloud-penetration-testing" element={<CloudPenTestingPage />} />
                <Route path="/services/red-team" element={<RedTeamPage />} />
                <Route path="/services/ransomware-readiness" element={<RansomwareReadinessPage />} />
                <Route path="/services/managed-eas" element={<ManagedEasPage />} />
                <Route path="/services/ssdlc-consulting" element={<SsdlcPage />} />
                <Route path="/services/risk-assessment" element={<RiskAssessmentPage />} />
                <Route path="/services/code-review" element={<CodeReviewPage />} />
                <Route path="/services/ciso-service" element={<CisoServicePage />} />
                <Route path="/services/incident-response" element={<IncidentResponsePage />} />
                <Route path="/services/ai-penetration-testing" element={<AiPenTestingPage />} />
                <Route path="/products/agentic-pentest" element={<AgenticPentestPage />} />
                <Route path="/zeus" element={<ZeusPage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/clients" element={<ClientsPage />} />
                <Route path="/presentation" element={<PresentationPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
              </Routes>
              {!isZeusOnePager && <Footer />}
              {!isZeusOnePager && <LiveChat />}
            </>
          }
        />
      </Routes>
  );
}

export default App;
