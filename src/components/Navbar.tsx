"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "/incentives", label: "Incentives" },
  { href: "https://apps.apple.com/app/knockvia", label: "Knockvia", external: true },
  { href: "https://store.rivvia.com", label: "Store", external: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect which section is behind the navbar by reading data-theme attribute
      const sections = document.querySelectorAll('section[data-theme]');
      const navbarHeight = 80; // Height of navbar
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if section is behind the navbar
        if (rect.top <= navbarHeight && rect.bottom >= 0) {
          const theme = section.getAttribute('data-theme');
          setIsDarkSection(theme === 'dark');
        }
      });
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic color classes based on section
  const textColorClass = isDarkSection 
    ? "text-white/70 hover:text-white" 
    : "text-black/70 hover:text-black";
  
  const buttonClass = isDarkSection
    ? "bg-white text-black hover:bg-white/90"
    : "bg-black text-white hover:bg-black/90";
    
  const hamburgerColor = isDarkSection ? "bg-white" : "bg-black";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/20 backdrop-blur-[40px] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="RIVVIA Logo" 
              className={`h-[60px] w-auto transition-all duration-300 ${isDarkSection ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium transition-colors uppercase tracking-wider ${textColorClass}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors uppercase tracking-wider ${textColorClass}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#join"
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${buttonClass}`}
            >
              Join the Team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${hamburgerColor} ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${hamburgerColor} ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${hamburgerColor} ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className={`flex flex-col gap-4 pt-4 border-t ${isDarkSection ? 'border-white/10' : 'border-black/10'}`}>
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium transition-colors uppercase tracking-wider py-2 ${textColorClass}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors uppercase tracking-wider py-2 ${textColorClass}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="#join"
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider text-center mt-2 transition-colors ${buttonClass}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join the Team
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

