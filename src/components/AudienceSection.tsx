import React from "react";
import { TARGET_AUDIENCES } from "../data/portfolioData";
import {
  Megaphone,
  Youtube,
  Building2,
  Clapperboard,
  Briefcase,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

interface AudienceSectionProps {
  onOpenContact: (prefilledService?: string) => void;
}

const audienceIconMap: Record<string, React.ElementType> = {
  Megaphone,
  Youtube,
  Building2,
  Clapperboard,
  Briefcase
};

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="audience" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>WHO I WORK WITH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            TAILORED SOLUTIONS FOR <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">CREATIVE LEADERS</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you represent a global brand, a high-growth YouTube channel, or a film production agency, my AI creative pipeline delivers unprecedented visual value.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_AUDIENCES.map((audience) => {
            const IconComp = audienceIconMap[audience.iconName] || Building2;

            return (
              <div
                key={audience.id}
                className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {audience.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {audience.description}
                  </p>

                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">CORE ADVANTAGE</span>
                    <p className="text-xs text-slate-200">{audience.keyBenefit}</p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">POPULAR SOLUTIONS:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {audience.popularServices.map((svc, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-cyan-300 font-mono">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6">
                  <button
                    onClick={() => onOpenContact(audience.title)}
                    className="w-full py-2 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-xs font-bold text-slate-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Discuss Partnership</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
