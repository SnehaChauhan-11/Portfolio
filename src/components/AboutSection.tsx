import React from "react";
import { PORTFOLIO_STATS } from "../data/portfolioData";
import { Sparkles, Video, Image as ImageIcon, Terminal, BookOpen, UserCheck, Compass, Film, Smartphone, Award, Layers } from "lucide-react";

export const AboutSection: React.FC = () => {
  const expertiseList = [
    { name: "AI Video Generation", icon: Video, desc: "Runway Gen-3, Kling AI, Google Veo, Pika, Luma Dream Machine." },
    { name: "AI Image Creation", icon: ImageIcon, desc: "Google Flow, Flux 1.1 Pro, Leonardo Phoenix, Ideogram v2." },
    { name: "Prompt Engineering", icon: Terminal, desc: "Negative constraints, camera matrices, seed tracking, weighted tokens." },
    { name: "Storytelling", icon: BookOpen, desc: "Cinematic beat sheets, character arcs, visual pacing, emotional hooks." },
    { name: "Character Consistency", icon: UserCheck, desc: "Multishot continuity, facial reference seeds, uniform costume logic." },
    { name: "Video Editing", icon: Film, desc: "Timeline cutdowns, speed ramps, audio foley, color space grading." },
    { name: "Social Media Content", icon: Smartphone, desc: "Viral 9:16 vertical shorts, high-CTR thumbnails, fast-paced retention cuts." },
  ];

  const genres = [
    { title: "Cinematic Short Films", color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300" },
    { title: "Historical Recreations", color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300" },
    { title: "AI Advertisements & Commercials", color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300" },
    { title: "Educational Videos & Science", color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-300" },
    { title: "Fantasy Worlds & Sci-Fi", color: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-300" },
    { title: "Emotional Storytelling", color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300" },
    { title: "Animated Characters & Comedy", color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-300" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Glow Ambient Blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ABOUT THE CREATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            BRIDGING <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">HUMAN IMAGINATION</span> & AI PRECISION
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            💡 Ideas → AI → Impact
            <br />
            I transform ideas into cinematic AI visuals, bringing stories and brands to life through creative storytelling and cutting-edge AI tools.
          </p>
        </div>

        {/* Bio & Key Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Bio Card */}
          <div className={`${PORTFOLIO_STATS.length > 0 ? "lg:col-span-7" : "lg:col-span-12"} bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between shadow-xl`}>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Passionate AI Visual Director</h3>
                  <p className="text-xs text-cyan-400 font-mono">Specializing in Generative Video & Motion Graphics</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As a dedicated <strong className="text-white">AI Content Creator</strong>, I harness generative neural networks to create cinema-grade visual storytelling. My mission is to elevate standard prompts into emotional, photorealistic, and structurally coherent video narratives.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether creating <span className="text-cyan-300 font-medium">historical recreations</span>, <span className="text-blue-300 font-medium">brand commercials</span>, or <span className="text-indigo-300 font-medium">episodic AI short films</span>, my core focus remains on absolute character consistency, fluid camera physics, and broadcast-ready audio-visual polish.
              </p>
            </div>

            {/* Genre Pills */}
            <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Specialized Genres & Formats:</span>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border bg-gradient-to-r ${genre.color}`}
                  >
                    {genre.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Value Proposition Cards Column */}
          {PORTFOLIO_STATS.length > 0 && (
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-950/30"
                >
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {stat.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/60 mt-4 flex items-center gap-1.5 text-[11px] text-cyan-400 font-mono">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Creative Expertise</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Expertise Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>Core Expertise Matrix</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertiseList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 rounded-xl p-5 transition-all duration-300 group hover:bg-slate-900/80"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
