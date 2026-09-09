export interface NavItem {
  label: string;
  href?: string;
  dropdownItems?: {
    label: string;
    href: string;
  }[];
}

export interface DropdownProps {
  items: NavItem['dropdownItems'];
  isOpen: boolean;
}