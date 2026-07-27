import React, { useState } from "react";
import { SKILLS_DATA } from "../data/portfolioData";
import { SkillCategory } from "../types";
import {
  Sparkles,
  MessageSquareCode,
  Cpu,
  Image as ImageIcon,
  Video,
  Film,
  Clapperboard,
  Palette,
  Type,
  Layers,
  Wand2,
  Scissors,
  PlaySquare,
  Smartphone,
  Layout,
  Terminal,
  Grid,
  UserCheck,
  Sliders,
  Eye
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  MessageSquareCode,
  Sparkles,
  Cpu,
  Image: ImageIcon,
  Video,
  Film,
  Clapperboard,
  Palette,
  Type,
  Layers,
  Wand2,
  Scissors,
  PlaySquare,
  Smartphone,
  Layout,
  Terminal,
  Grid,
  UserCheck,
  Sliders,
  Eye
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("All");

  const categories: SkillCategory[] = [
    "All",
    "AI Models & Tools",
    "Video & Motion AI",
    "Image & Design",
    "Strategy & Editing"
  ];

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => selectedCategory === "All" || skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Wand2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI TOOLSTACK & SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            MASTERED <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">AI ENGINES</span> & SUITE
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of generative AI software, video motion engines, prompt syntax architectures, and post-production software.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              id={`skill-filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 font-bold"
                  : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Sparkles;

            return (
              <div
                key={skill.id}
                className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/40 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      {skill.featuredTool && (
                        <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-[10px] text-cyan-300 font-mono">
                          Core
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-300 font-mono">
                        {skill.levelLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] text-cyan-400 font-mono block mb-2">
                    {skill.category}
                  </span>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {skill.description}
                  </p>

                  {/* Use cases tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {skill.useCases.map((useCase, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] text-slate-300 font-sans"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Proficiency Bar */}
                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="text-slate-400">Mastery Level</span>
                    <span className="text-cyan-400 font-bold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
