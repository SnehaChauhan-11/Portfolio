import React from "react";
import { SERVICES_LIST } from "../data/portfolioData";
import { ServiceItem } from "../types";
import { Sparkles, CheckCircle2, ArrowRight, Wand2, Briefcase } from "lucide-react";

interface ServicesSectionProps {
  onOpenContact: (prefilledService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI CREATIVE SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            COMMISSION <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">AI CREATIVE SOLUTIONS</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-converting AI video campaigns, character bibles, social media reels, and enterprise prompt engineering consultations.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Badge */}
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                    {srv.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    Starting {srv.startingPrice}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {srv.description}
                </p>

                {/* Key Deliverables Checkmarks */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">INCLUDED DELIVERABLES:</span>
                  {srv.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended Tools */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">RECOMMENDED STACK:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {srv.recommendedTools.map((tool, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-cyan-300 font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <button
                  onClick={() => onOpenContact(srv.title)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-slate-950 text-xs font-bold text-slate-200 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <span>Book {srv.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
