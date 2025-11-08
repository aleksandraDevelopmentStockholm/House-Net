interface SkipLink {
  label: string;
  href: string;
}

interface SkipNavigationProps {
  links: SkipLink[];
}

export function SkipNavigation({ links }: SkipNavigationProps) {
  return (
    <nav className="skip-navigation" aria-label="Skip navigation">
      {links.map((link) => (
        <a key={link.href} className="skip-link" href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
