"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["about", "skills", "projects", "timeline", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#about",    label: t.nav.about },
    { href: "#skills",   label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#timeline", label: t.nav.timeline },
    { href: "#contact",  label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(10, 10, 10, 0.95)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderBottom: "2px solid #DC143C",
              boxShadow: "0 2px 20px rgba(220, 20, 60, 0.3)",
            }
          : {
              background: "linear-gradient(135deg, #1a0000, #0a0a0a)",
              borderBottom: "2px solid #DC143C",
              boxShadow: "0 2px 20px rgba(220, 20, 60, 0.2)",
            }
      }
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex-shrink-0 font-bold text-xl tracking-wider transition-opacity hover:opacity-80"
            style={{
              background: "linear-gradient(135deg, #DC143C, #FF6B6B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            aria-label="Lucas Jacob — haut de page"
          >
            LJ
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium transition-colors duration-200 relative group"
                  style={{ color: isActive ? "#DC143C" : "#BBBBBB" }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-primary-red transition-all duration-300"
                    style={{ width: isActive ? "100%" : "0%" }}
                  />
                </a>
              );
            })}
          </div>

          {/* Right: lang toggle + hamburger */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              aria-label={t.aria.toggleLanguage}
              className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all duration-200"
              style={{
                borderColor: "rgba(220, 20, 60, 0.5)",
                color: "#DC143C",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(220, 20, 60, 0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
              }}
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden text-text-light hover:text-primary-red transition-colors"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? t.aria.closeMenu : t.aria.openMenu}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(10, 10, 10, 0.98)" }}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-3 px-2 text-sm font-medium border-b transition-colors duration-200"
                style={{
                  color: isActive ? "#DC143C" : "#BBBBBB",
                  borderColor: "rgba(220, 20, 60, 0.15)",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
