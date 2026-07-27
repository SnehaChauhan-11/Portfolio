import React, { useState, useEffect } from "react";
import { HERO_TYPING_STATEMENTS } from "../data/portfolioData";
import { Sparkles, FileText, Wand2, Play, CheckCircle } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
  onOpenPromptStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenPromptStudio }) => {
  const [statementIndex, setStatementIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated typing effect
  useEffect(() => {
    const currentStatement = HERO_TYPING_STATEMENTS[statementIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentStatement.substring(0, displayText.length + 1));
        if (displayText.length === currentStatement.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(currentStatement.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setStatementIndex((prev) => (prev + 1) % HERO_TYPING_STATEMENTS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, statementIndex]);

  // Background floating visual tiles
  const backgroundCollageImages = [
    { url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop", label: "Futuristic Megacity" },
    { url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop", label: "Ancient Babylon" },
    { url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop", label: "Hypercar Ad" },
    { url: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=600&auto=format&fit=crop", label: "Cosmic Fantasy" },
    { url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop", label: "3D Animation" },
    { url: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=600&auto=format&fit=crop", label: "Wildlife Scene" },
    { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop", label: "Historical Drama" },
    { url: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=600&auto=format&fit=crop", label: "Eco Vertical City" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Background Animated Collage (Slightly Blurred) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 transform -rotate-2 scale-105 filter blur-xs animate-pulse">
          {backgroundCollageImages.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-video rounded-xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-900/30 transition-transform duration-1000"
            >
              <img
                src={item.url}
                alt={item.label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            </div>
          ))}
        </div>
        {/* Dark Radial Overlay Gradient */}
        <div className="absolute inset-0 bg-radial from-transparent via-slate-950/80 to-slate-950"></div>
      </div>

      {/* Grid Tech Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a15_1px,transparent_1px),linear-gradient(to_bottom,#0f172a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Profile Image with Circular Frame and Subtle Blue Glow */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Pulsing Glowing Background Ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-500 animate-pulse"></div>

              {/* Inner Decorative Tech Rings */}
              <div className="absolute -inset-4 rounded-full border border-cyan-500/30 border-dashed animate-[spin_20s_linear_infinite] pointer-events-none"></div>
              <div className="absolute -inset-8 rounded-full border border-blue-500/20 border-dotted animate-[spin_35s_linear_infinite_reverse] pointer-events-none"></div>

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-400/80 shadow-2xl shadow-cyan-500/30 bg-slate-900">
                <img
                  src="https://i.ibb.co/zKtBLYL/Gemini-Generated-Image-b3s1erb3s1erb3s1.png"
                  alt="Sneha Chauhan - AI Content Creator"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle Blue Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-cyan-500/10 pointer-events-none"></div>
              </div>

              {/* Floating Badge 1: Verified AI Director */}
              <div className="absolute -bottom-2 -right-2 bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 rounded-2xl px-3.5 py-2 flex items-center gap-2 shadow-xl shadow-cyan-950/50">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-white leading-tight">AI Studio Director</span>
                  <span className="text-[9px] text-cyan-300 font-mono">100% GenAI Visuals</span>
                </div>
              </div>

              {/* Floating Badge 2: Prompt Master */}
              <div className="absolute top-4 -left-4 bg-slate-900/90 backdrop-blur-md border border-blue-500/40 rounded-2xl px-3.5 py-2 flex items-center gap-2 shadow-xl shadow-blue-950/50 hidden sm:flex">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-white leading-tight">Character Consistency</span>
                  <span className="text-[9px] text-blue-300 font-mono">Runway / Veo / MJ v6</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Title, Bullets, Typing Effect, Actions */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider w-fit shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>PROMPT ENGINEER & VISUAL DIRECTOR</span>
            </div>

            {/* Large Title */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-sans">
                SNEHA <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  CHAUHAN
                </span>
              </h1>
            </div>

            {/* Smaller Bullet Roles */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base font-semibold text-slate-300 font-sans">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <span className="text-cyan-400">•</span> AI Video Creator
              </span>
              <span className="flex items-center gap-1.5 text-blue-300">
                <span className="text-blue-400">•</span> AI Storyteller
              </span>
              <span className="flex items-center gap-1.5 text-indigo-300">
                <span className="text-indigo-400">•</span> Prompt Engineer
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="text-slate-400">•</span> Visual Designer
              </span>
            </div>

            {/* Animated Typing Statement */}
            <div className="min-h-[60px] flex items-center bg-slate-900/60 border-l-4 border-cyan-400 px-4 py-3 rounded-r-xl backdrop-blur-sm border-slate-800">
              <p className="text-base sm:text-lg font-mono text-cyan-200">
                "{displayText}"
                <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse align-middle"></span>
              </p>
            </div>

            {/* Description Subtext */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Transforming imagination into photorealistic cinematic short films, commercial advertisements, fantasy worlds, and high-engagement AI visual content using state-of-the-art generative video & image models.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                id="hero-download-resume-btn"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-950/50 cursor-pointer font-sans"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              {/* Interactive AI Prompt Studio Launcher */}
              <button
                onClick={onOpenPromptStudio}
                id="hero-prompt-studio-btn"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-cyan-300 bg-cyan-950/70 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-900/60 transition-all duration-200 shadow-lg shadow-cyan-950/40 cursor-pointer font-sans"
              >
                <Wand2 className="w-4 h-4 text-cyan-400" />
                <span>Try Prompt Studio</span>
              </button>
            </div>

            {/* Quick Tech Stack Badges */}
            <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="text-slate-500">PROMPT TECH:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Runway Gen-3</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Google Flow</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Veo</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Kling AI</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Flux 1.1</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
