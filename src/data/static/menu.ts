export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Audience Profile", href: "#audience-profile" },
  { label: "Past Editions", href: "/past-editions" },
  { label: "Contact Us", href: "/contact" },
];
