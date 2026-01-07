import Link from "next/link";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#opportunity", label: "Opportunity" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#markets", label: "Markets" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl tracking-wider">
            RIVVIA
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-white/30">
            © {currentYear} Rivvia
          </p>
        </div>
      </div>
    </footer>
  );
}

