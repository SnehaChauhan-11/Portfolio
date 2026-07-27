import React, { useState } from "react";
import { Project } from "../types";
import { Play, Pause, Volume2, VolumeX, Copy, Check, Sparkles, Film, Terminal, Camera, Clapperboard, Eye, ArrowRight, Layers, Tag, X, Youtube } from "lucide-react";

function getYouTubeEmbedUrl(url?: string) {
  if (!url) return null;
  const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch && shortsMatch[1]) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}?autoplay=1&rel=0`;
  }
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0` : null;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [activeTab, setActiveTab] = useState<"video" | "storyboard" | "prompt">("video");
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(project.masterPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-xl overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase">
              {project.genreTag}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate max-w-md">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-6 gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab("video")}
            className={`py-3 flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === "video"
                ? "border-cyan-400 text-cyan-400 font-bold"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Cinematic Video Showcase</span>
          </button>
          <button
            onClick={() => setActiveTab("storyboard")}
            className={`py-3 flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === "storyboard"
                ? "border-cyan-400 text-cyan-400 font-bold"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>AI Storyboard Matrix ({project.storyboard.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("prompt")}
            className={`py-3 flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === "prompt"
                ? "border-cyan-400 text-cyan-400 font-bold"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Master Prompt & Parameters</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: VIDEO SHOWCASE */}
          {activeTab === "video" && (
            <div className="space-y-6">
              {/* Main Media Stage */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 group shadow-2xl">
                {project.youtubeUrl ? (
                  <iframe
                    src={getYouTubeEmbedUrl(project.youtubeUrl) || ""}
                    title={project.title}
                    className="w-full h-full border-0 relative z-10"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : project.videoPreviewUrl ? (
                  <video
                    src={project.videoPreviewUrl}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Simulated Video Overlay Controls (only if not youtube iframe) */}
                {!project.youtubeUrl && (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30 flex flex-col justify-between p-4 opacity-100 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-cyan-300 border border-cyan-500/30">
                        AI MODEL: {project.aiTools[0]} • 4K 60FPS
                      </span>
                      <span className="text-xs font-mono text-slate-300 bg-black/60 px-2 py-1 rounded">
                        Duration: {project.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer font-bold"
                        >
                          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                        </button>
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 cursor-pointer"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>

                      {project.views && (
                        <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-slate-900/80 px-3 py-1.5 rounded-full border border-cyan-500/30">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{project.views}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Concept & Details Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Story Concept & Vision</span>
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.fullDescription}
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono text-slate-400 block mb-2">AI TOOLS INTEGRATED:</span>
                      <div className="flex flex-wrap gap-2">
                        {project.aiTools.map((tool, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-cyan-300 font-mono">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {project.youtubeUrl && (
                        <a
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-500/20 transition-all"
                        >
                          <Youtube className="w-4 h-4 fill-current" />
                          <span>Watch on YouTube</span>
                        </a>
                      )}

                      {project.externalUrl && (
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
                        >
                          <span>Watch Video on X</span>
                          <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Specs Column */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
                  <h4 className="text-cyan-400 font-bold uppercase tracking-wider text-[11px] border-b border-slate-800 pb-2">
                    GENAI PRODUCTION PARAMETERS
                  </h4>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Camera Movement:</span>
                    <span className="text-slate-200 text-right truncate max-w-[140px]">{project.cameraMovement}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Lighting Style:</span>
                    <span className="text-slate-200 text-right truncate max-w-[140px]">{project.lightingStyle}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Seed ID:</span>
                    <span className="text-cyan-300">{project.seed}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Frame Rate:</span>
                    <span className="text-slate-200">{project.fps} FPS</span>
                  </div>
                  {project.clientOrBrand && (
                    <div className="flex justify-between text-slate-300">
                      <span className="text-slate-500">Client / Brand:</span>
                      <span className="text-slate-200 font-bold">{project.clientOrBrand}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STORYBOARD MATRIX */}
          {activeTab === "storyboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Frame Preview Stage */}
                <div className="md:col-span-7 space-y-3">
                  <div className="aspect-video rounded-xl overflow-hidden border border-cyan-500/40 bg-black relative shadow-xl">
                    <img
                      src={project.storyboard[activeFrameIndex]?.image || project.thumbnail}
                      alt="Storyboard frame"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-xs font-mono text-cyan-300 border border-cyan-500/30">
                      FRAME #{project.storyboard[activeFrameIndex]?.frameNumber}
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {project.storyboard[activeFrameIndex]?.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.storyboard[activeFrameIndex]?.description}
                  </p>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-[11px] text-cyan-300">
                    <span className="text-slate-500 block mb-1">FRAME PROMPT:</span>
                    <code>{project.storyboard[activeFrameIndex]?.prompt}</code>
                  </div>
                </div>

                {/* Frames Selector Grid */}
                <div className="md:col-span-5 space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    CLICK FRAME TO INSPECT ({project.storyboard.length} FRAMES)
                  </h4>
                  <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                    {project.storyboard.map((frame, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveFrameIndex(idx)}
                        className={`w-full text-left p-2.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                          activeFrameIndex === idx
                            ? "bg-cyan-950/80 border-cyan-400 text-white shadow-lg"
                            : "bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300"
                        }`}
                      >
                        <img
                          src={frame.image}
                          alt={frame.title}
                          referrerPolicy="no-referrer"
                          className="w-16 h-10 object-cover rounded-lg border border-slate-800"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-bold block truncate">{frame.title}</span>
                          <span className="text-[10px] text-slate-400 truncate block font-mono">Frame #{frame.frameNumber}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: MASTER PROMPT INSPECTOR */}
          {activeTab === "prompt" && (
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                    MASTER AI GENERATION PROMPT
                  </label>
                  <button
                    onClick={handleCopyPrompt}
                    className="px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold flex items-center gap-1.5 hover:bg-cyan-400 transition-colors cursor-pointer"
                  >
                    {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPrompt ? "Copied to Clipboard!" : "Copy Master Prompt"}</span>
                  </button>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-cyan-900/60 font-mono text-xs text-cyan-200 leading-relaxed relative">
                  <code>{project.masterPrompt}</code>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  NEGATIVE CONSTRAINTS PROMPT
                </label>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-rose-300/80">
                  <code>{project.negativePrompt}</code>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/90 text-xs text-slate-400 font-mono">
          <span>AI Creative Studio Master Project</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
