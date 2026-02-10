"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import JoinTeamModal from "./JoinTeamModal";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "/incentives", label: "Incentives" },
  { href: "/golden-door", label: "Golden Door" },
  { href: "/knockvia", label: "Knockvia" },
  { href: "https://rivvia.shop", label: "Store", external: true },
];

const socialLinks = [
  { 
    href: "https://www.instagram.com/rivviasales/", 
    label: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  { 
    href: "https://www.linkedin.com/company/rivvia/", 
    label: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  { 
    href: "https://www.facebook.com/rivviasales", 
    label: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

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
    <>
      {/* Mobile Menu Backdrop - Blur Background */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-md z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
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

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${textColorClass}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsJoinModalOpen(true)}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${buttonClass}`}
            >
              Join the Team
            </button>
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
            isMobileMenuOpen ? "max-h-[500px] pb-6" : "max-h-0"
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
            
            {/* Social Links */}
            <div className="flex items-center gap-4 py-2">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${textColorClass}`}
                  aria-label={social.label}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsJoinModalOpen(true);
              }}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider text-center mt-2 transition-colors ${buttonClass}`}
            >
              Join the Team
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Join Team Modal */}
    <JoinTeamModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </>
  );
}

