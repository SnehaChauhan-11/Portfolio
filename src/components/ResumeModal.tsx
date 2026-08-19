import React, { useState } from "react";
import { Download, FileText, Check, X, Sparkles, Terminal, Briefcase, GraduationCap, FolderGit2, Wrench, Linkedin, Mail, MapPin, ExternalLink, Award } from "lucide-react";
import { IndiaFutureAILogo } from "./IndiaFutureAILogo";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);

      const element = document.createElement("a");
      const file = new Blob([
        `==================================================
SNEHA CHAUHAN
AI Filmmaker • Visual Storyteller • Prompt Engineer
==================================================
Location: Bhind, Madhya Pradesh
Email: singh11lavi@gmail.com
LinkedIn: https://linkedin.com/in/sneha-chauhan-4a4895418
Twitter/X: https://x.com/Sneha_Chauhan11

ABOUT MY WORK:
I create cinematic AI-generated videos, photorealistic imagery, brand advertisements, historical recreations, educational visuals, and story-driven short films. My workflow combines creative direction with advanced AI tools to produce consistent, immersive, production-ready content — every project begins with a story, using AI to build emotionally engaging experiences through consistent characters, cinematic composition, thoughtful pacing, and purposeful design.

SKILLS:
• Cinematic AI Video Production & Direction
• AI Commercial / Advertisement Creation
• Historical & Mythological Storytelling
• Character Consistency & Visual Continuity
• Photorealistic Image Generation
• Educational & Documentary Content Design
• 3D Concept Visualization
• Creative & Technical Prompt Engineering
• Presentation Design (Content + Cover)
• AI Voice & Audio Production (ElevenLabs)
• AI Video Editing & Post-Production
• End-to-End AI Production Pipeline Mgmt.

SELECTED PROJECTS:
• Feastables: Midnight Heist
  Luxury-style AI commercial set in a museum where history comes alive.
• Inside the Human Brain
  Educational visualization simplifying neuroscience using cinematic 3D concepts.
• Prambanan: The Temple That Survived Time
  AI-powered heritage documentary recreating iconic architecture.
• Ayurveda Chronicles
  Story-based educational series inspired by ancient Indian medical knowledge.
• Prithviraj Chauhan
  Historical cinematic recreation of the life and battles of Prithviraj Chauhan.
• Rani Durgawati
  AI-based historical storytelling project centered on Rani Durgawati, featuring consistent characters and realistic visuals.
• Nagpur Project (Orange City)
  A professional presentation on Nagpur, with polished cover design and educational content.

CREATIVE TOOLKIT:
Google Flow • Runway • Veo • Kling AI • Midjourney • Leonardo AI • Claude • ChatGPT • ElevenLabs • DaVinci Resolve

EDUCATION & FELLOWSHIP:
• IndiaFutureAI — Trained AI Creator Fellow (https://www.indiafutureai.com/)
• LL.B. — MJS College, Jiwaji University
• B.Com — Kusum Bai College, Jiwaji University
`
      ], { type: "text/plain" });

      element.href = URL.createObjectURL(file);
      element.download = "Sneha_Chauhan_Resume.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      setTimeout(() => setDownloaded(false), 3000);
    }, 1200);
  };

  const skillsList = [
    "Cinematic AI Video Production & Direction",
    "3D Concept Visualization",
    "AI Commercial / Advertisement Creation",
    "Creative & Technical Prompt Engineering",
    "Historical & Mythological Storytelling",
    "Presentation Design (Content + Cover)",
    "Character Consistency & Visual Continuity",
    "AI Voice & Audio Production (ElevenLabs)",
    "Photorealistic Image Generation",
    "AI Video Editing & Post-Production",
    "Educational & Documentary Content Design",
    "End-to-End AI Production Pipeline Mgmt."
  ];

  const selectedProjects = [
    {
      title: "Feastables: Midnight Heist",
      desc: "Luxury-style AI commercial set in a museum where history comes alive."
    },
    {
      title: "Inside the Human Brain",
      desc: "Educational visualization simplifying neuroscience using cinematic 3D concepts."
    },
    {
      title: "Prambanan: The Temple That Survived Time",
      desc: "AI-powered heritage documentary recreating iconic architecture."
    },
    {
      title: "Ayurveda Chronicles",
      desc: "Story-based educational series inspired by ancient Indian medical knowledge."
    },
    {
      title: "Prithviraj Chauhan",
      desc: "Historical cinematic recreation of the life and battles of Prithviraj Chauhan."
    },
    {
      title: "Rani Durgawati",
      desc: "AI-based historical storytelling project centered on Rani Durgawati, featuring consistent characters and realistic visuals."
    },
    {
      title: "Nagpur Project (Orange City)",
      desc: "A professional presentation on Nagpur, with polished cover design and educational content."
    }
  ];

  const tools = [
    "Google Flow", "Runway", "Veo", "Kling AI", "Midjourney", "Leonardo AI", "Claude", "ChatGPT", "ElevenLabs", "DaVinci Resolve"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-2xl overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                OFFICIAL RESUME
              </h2>
              <p className="text-[11px] text-cyan-400 font-mono">
                Sneha Chauhan • AI Filmmaker & Visual Storyteller
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Resume Saved!</span>
                </>
              ) : downloading ? (
                <span>Generating Document...</span>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[78vh] overflow-y-auto bg-slate-950/90 text-slate-200">
          
          {/* Top Resume Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
                SNEHA CHAUHAN
              </h1>
              <p className="text-sm font-semibold text-cyan-400 mt-1">
                AI Filmmaker • Visual Storyteller • Prompt Engineer
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400 text-left sm:text-right space-y-1">
              <p className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 inline" /> Bhind, Madhya Pradesh
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400 inline" /> singh11lavi@gmail.com
              </p>
              <div className="flex flex-wrap items-center sm:justify-end gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/in/sneha-chauhan-4a4895418/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <span>•</span>
                <a
                  href="https://x.com/Sneha_Chauhan11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>
                <span>•</span>
                <a
                  href="https://www.youtube.com/@SnehaVerse-r7c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* About My Work */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5 tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>ABOUT MY WORK</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              I create cinematic AI-generated videos, photorealistic imagery, brand advertisements, historical recreations, educational visuals, and story-driven short films. My workflow combines creative direction with advanced AI tools to produce consistent, immersive, production-ready content — every project begins with a story, using AI to build emotionally engaging experiences through consistent characters, cinematic composition, thoughtful pacing, and purposeful design.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5 tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>SKILLS</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillsList.map((skill, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span className="text-slate-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5 tracking-wider">
              <FolderGit2 className="w-4 h-4" />
              <span>SELECTED PROJECTS</span>
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {selectedProjects.map((proj, idx) => (
                <div key={idx} className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 space-y-1">
                  <h4 className="text-sm font-bold text-white tracking-tight">{proj.title}</h4>
                  <p className="text-xs text-slate-300 font-sans">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Toolkit */}
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5 tracking-wider">
              <Wrench className="w-4 h-4" />
              <span>CREATIVE TOOLKIT</span>
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {tools.map((tool, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Fellowships */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h3 className="text-xs font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5 tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION & FELLOWSHIPS</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <a
                href="https://www.indiafutureai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/90 p-3 rounded-xl border border-orange-500/40 hover:border-orange-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1.5">
                      <IndiaFutureAILogo className="w-4 h-4" />
                      <span className="font-bold text-slate-100 group-hover:text-white">AI Creator Fellow</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-orange-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <span className="text-orange-400/90 font-mono text-[11px] block mt-1">IndiaFutureAI</span>
                </div>
              </a>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">LL.B.</span>
                <span className="text-slate-400 font-mono text-[11px]">MJS College, Jiwaji University</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">B.Com</span>
                <span className="text-slate-400 font-mono text-[11px]">Kusum Bai College, Jiwaji University</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

