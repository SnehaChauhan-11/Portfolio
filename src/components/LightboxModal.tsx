import React, { useState } from "react";
import { GalleryItem } from "../types";
import { X, Copy, Check, Sparkles, Terminal, Ratio, Layers, Code, Hash } from "lucide-react";

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(item.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-2xl overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold">
              {item.category}
            </span>
            <h2 className="text-lg font-bold text-white tracking-tight truncate max-w-md">
              {item.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Side: High-Res Image Display */}
          <div className="lg:col-span-7 flex items-center justify-center bg-black rounded-xl p-2 border border-slate-800 relative shadow-2xl">
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Side: Prompt & Generation Inspector */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                AI GENERATION MODEL
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">{item.aiModel}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[11px] font-mono text-cyan-300 border border-slate-700">
                  {item.aspectRatioLabel}
                </span>
              </div>
            </div>

            {/* Prompt Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>MASTER PROMPT</span>
                </label>
                <button
                  onClick={handleCopyPrompt}
                  className="px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold flex items-center gap-1 hover:bg-cyan-400 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-cyan-900/50 font-mono text-xs text-cyan-200 leading-relaxed max-h-44 overflow-y-auto">
                <code>{item.prompt}</code>
              </div>
            </div>

            {/* Negative Prompt */}
            {item.negativePrompt && (
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-500 uppercase">NEGATIVE PROMPT</span>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] font-mono text-rose-300/80">
                  <code>{item.negativePrompt}</code>
                </div>
              </div>
            )}

            {/* Specs & Keywords */}
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2 font-mono text-xs">
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">Seed Code:</span>
                <span className="text-cyan-300">{item.seed}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-500">Aspect Ratio:</span>
                <span className="text-slate-200">{item.aspectRatio}</span>
              </div>
            </div>

            {/* Style Keywords */}
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1.5">STYLE KEYWORDS:</span>
              <div className="flex flex-wrap gap-1.5">
                {item.styleKeywords.map((kw, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-300">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-slate-950/80 text-xs text-slate-400 font-mono">
          <span>High-Resolution AI Art Portfolio</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold cursor-pointer"
          >
            Close Lightbox
          </button>
        </div>

      </div>
    </div>
  );
};
