import React, { useState, useEffect } from "react";
import { Sparkles, FileText, Send, Menu, X, Wand2 } from "lucide-react";

interface NavbarProps {
  onOpenPromptStudio: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPromptStudio,
  onOpenResume,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Process", href: "#process" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-2xl shadow-cyan-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center gap-3 group text-white font-bold tracking-tight"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-wider bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              SNEHA CHAUHAN
            </span>
            <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
              STUDIO PORTFOLIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-300 transition-colors duration-200 relative py-1 text-slate-300 font-sans tracking-wide hover:after:w-full after:w-0 after:h-0.5 after:bg-cyan-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-prompt-studio-btn"
            onClick={onOpenPromptStudio}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/50 transition-all duration-200 shadow-sm shadow-cyan-900/30 cursor-pointer"
          >
            <Wand2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>AI Prompt Studio</span>
          </button>

          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/60 hover:border-slate-500 hover:bg-slate-800 transition-all duration-200 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-300" />
            <span>Resume</span>
          </button>

          <button
            id="nav-hire-btn"
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-md shadow-cyan-500/25 cursor-pointer font-sans"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-cyan-900/40 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-cyan-400 text-base font-medium py-1.5 px-2 rounded-md hover:bg-slate-900/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPromptStudio();
              }}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-500/40"
            >
              <Wand2 className="w-4 h-4 text-cyan-400" />
              <span>AI Prompt Studio</span>
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Hire Me</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
