import React from "react";
import { Sparkles, ArrowUp, Mail, Send, Wand2, Youtube, Linkedin } from "lucide-react";

interface FooterProps {
  onOpenPromptStudio: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPromptStudio, onOpenResume, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const marqueeItems = [
    "RUNWAY GEN-3",
    "MIDJOURNEY V6",
    "GOOGLE VEO",
    "KLING AI",
    "FLUX 1.1 PRO",
    "CHARACTER CONSISTENCY",
    "PROMPT ENGINEERING",
    "CINEMATIC STORYTELLING",
    "AI ADVERTISEMENTS"
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 relative overflow-hidden">
      
      {/* Visual Marquee Banner */}
      <div className="border-b border-slate-900 bg-slate-950/80 py-3 overflow-hidden font-mono text-xs text-cyan-400/80 uppercase tracking-widest whitespace-nowrap">
        <div className="inline-flex gap-8 animate-marquee">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-tight uppercase">
                SNEHA CHAUHAN STUDIO
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Dedicated to pushing the boundaries of AI visual storytelling, prompt engineering, and cinematic motion generation across global media channels.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a
                href="mailto:singh11lavi@gmail.com"
                className="hover:text-cyan-400 transition-colors"
                title="Email: singh11lavi@gmail.com"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@SnehaVerse-r7c"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Sneha_Chauhan11"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors p-0.5"
                title="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sneha-chauhan-4a4895418/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-300">
              <li><a href="#about" className="hover:text-cyan-300">About Creator</a></li>
              <li><a href="#skills" className="hover:text-cyan-300">AI Toolstack</a></li>
              <li><a href="#projects" className="hover:text-cyan-300">Featured Projects</a></li>
              <li><a href="#gallery" className="hover:text-cyan-300">AI Image Gallery</a></li>
              <li><a href="#process" className="hover:text-cyan-300">Creative Pipeline</a></li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">
              CREATOR ACTIONS
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenPromptStudio}
                className="w-full py-2 px-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 hover:border-cyan-400 text-xs text-cyan-300 font-mono flex items-center justify-between cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Wand2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Launch AI Prompt Studio</span>
                </span>
                <span>→</span>
              </button>

              <button
                onClick={onOpenResume}
                className="w-full py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 font-sans flex items-center justify-between cursor-pointer"
              >
                <span>Download Creator Resume</span>
                <span>📄</span>
              </button>

              <button
                onClick={onOpenContact}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Commission AI Project</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 AI Content Creator Portfolio. Built for Generative Visual Excellence.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
