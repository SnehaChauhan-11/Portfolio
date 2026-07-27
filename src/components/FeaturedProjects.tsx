import React, { useState } from "react";
import { FEATURED_PROJECTS } from "../data/portfolioData";
import { Project, ProjectCategory } from "../types";
import { ProjectModal } from "./ProjectModal";
import { Sparkles, Play, ArrowRight, Film, Eye, Tag, Clapperboard, Youtube } from "lucide-react";

export const FeaturedProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    "All",
    "Luxury Brand Commercial",
    "Comedy / Brand Campaign",
    "Historical Fantasy",
    "Historical Epic",
    "Nostalgic Commercial",
    "Photorealistic Artwork",
    "Cultural Heritage",
    "Music Visualizer"
  ];

  const filteredProjects = FEATURED_PROJECTS.filter(
    (proj) => selectedCategory === "All" || proj.category === selectedCategory
  );

  return (
    <section id="projects" className="py-24 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Clapperboard className="w-3.5 h-3.5 text-cyan-400" />
            <span>CINEMATIC SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            FEATURED <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">AI PROJECTS</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-concept AI short films, historical recreations, luxury advertisements, educational explainers, and fantasy worldbuilding.
          </p>
        </div>

        {/* Category Filter Scrollbar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? FEATURED_PROJECTS.length
                : FEATURED_PROJECTS.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                id={`project-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                    selectedCategory === cat
                      ? "bg-slate-950/20 text-slate-950 font-bold"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-cyan-500/60 transition-all duration-500 group hover:shadow-2xl hover:shadow-cyan-950/50 flex flex-col justify-between"
            >
              <div>
                {/* Large AI Generated Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 group-hover:brightness-110 transition-all duration-700 ease-out"
                  />

                  {/* Hover Overlay with Soft Blue Glow & Play Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-14 h-14 rounded-full bg-cyan-400/90 hover:bg-cyan-300 text-slate-950 flex items-center justify-center shadow-xl shadow-cyan-400/40 transition-transform duration-300 hover:scale-110 cursor-pointer font-bold"
                      aria-label={`View ${project.title}`}
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </button>
                  </div>

                  {/* Top Genre Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono font-bold text-cyan-300">
                      {project.genreTag}
                    </span>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-mono text-slate-300">
                    {project.duration}
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 space-y-3.5">
                  {/* Project Number & Genre */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-bold uppercase tracking-wider">
                      {project.projectNumber || "PROJECT"}
                    </span>
                    <span className="text-slate-400">
                      {project.genreTag}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors leading-snug tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs text-cyan-200/90 font-mono line-clamp-2 italic">
                    "{project.concept}"
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* AI Workflow */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                      AI WORKFLOW
                    </span>
                    <p className="text-xs font-mono text-cyan-300 font-semibold">
                      {project.aiTools.join(" • ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="px-6 pb-6 pt-2 flex flex-col gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-800/80 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:text-slate-950 border border-slate-700 group-hover:border-transparent text-xs font-bold text-slate-200 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <span>{project.buttonText || "Behind the Scenes →"}</span>
                </button>

                {project.youtubeUrl && (
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-500/40 text-[11px] font-mono text-red-300 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Youtube className="w-3.5 h-3.5 text-red-400" />
                    <span>Watch on YouTube</span>
                  </a>
                )}

                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 rounded-lg bg-cyan-950/40 hover:bg-cyan-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Watch Video on X</span>
                    <ArrowRight className="w-3 h-3 -rotate-45" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
