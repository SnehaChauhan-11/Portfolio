import React, { useState } from "react";
import { Wand2, Sparkles, Terminal, Copy, Check, X, RefreshCw, Layers, Film } from "lucide-react";

interface AIPromptStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StoryboardFrameResult {
  frameNumber: number;
  scene: string;
  description: string;
  prompt: string;
}

interface PromptStudioResult {
  masterPrompt: string;
  cameraMovement: string;
  negativePrompt: string;
  genre: string;
  toolTarget: string;
  storyboard: StoryboardFrameResult[];
}

export const AIPromptStudioModal: React.FC<AIPromptStudioModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [idea, setIdea] = useState("Cyberpunk samurai discovering an ancient bioluminescent shrine in Neo-Tokyo");
  const [genre, setGenre] = useState("Cyberpunk Sci-Fi");
  const [toolTarget, setToolTarget] = useState("Runway Gen-3 / Google Flow");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PromptStudioResult | null>(null);
  const [copied, setCopied] = useState(false);

  const sampleIdeas = [
    "Cyberpunk samurai discovering an ancient bioluminescent shrine in Neo-Tokyo",
    "Ancient Mesopotamian king unveiling the Hanging Gardens of Babylon at golden hour",
    "Sleek matte-black electric hypercar drifting through alpine mountain serpentine at dusk",
    "Bioluminescent cosmic whale swimming through deep indigo galaxy nebula",
    "Cute Pixar-style pixie making friends with a mossy ancient stone golem"
  ];

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userIdea: idea, genre, toolTarget })
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Prompt generation failed:", err);
      // Local fallback
      setResult({
        masterPrompt: `Cinematic wide shot, ${idea}, volumetric lighting, highly detailed 8k render, shot on 35mm lens --ar 16:9 --v 6.0`,
        cameraMovement: "Slow steady push-in with gentle drone elevation",
        negativePrompt: "text, watermark, low quality, noise, blur, extra limbs",
        genre,
        toolTarget,
        storyboard: [
          {
            frameNumber: 1,
            scene: "Establishing Shot",
            description: `Wide panoramic view establishing ${idea}.`,
            prompt: `Establishing wide shot, ${idea}, atmospheric fog, 8k --ar 16:9`
          },
          {
            frameNumber: 2,
            scene: "Mid Reaction",
            description: "Camera zooms in on central subject highlighting light reflections.",
            prompt: `Medium close up of subject, glowing lighting reflections, cinematic depth of field --ar 16:9`
          }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopyMasterPrompt = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.masterPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-2xl overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Wand2 className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                AI PROMPT & STORYBOARD STUDIO
              </h2>
              <p className="text-[11px] text-cyan-400 font-mono">
                Interactive Generative Visual Prompt Generator
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Studio Workspace */}
        <div className="p-6 space-y-6 max-h-[78vh] overflow-y-auto">
          
          {/* Input Controls */}
          <div className="space-y-4 bg-slate-950 p-5 rounded-xl border border-slate-800">
            <div>
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1.5 font-bold">
                ENTER YOUR CREATIVE IDEA OR CONCEPT:
              </label>
              <textarea
                rows={2}
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Describe your scene or story concept..."
                className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors"
              />
            </div>

            {/* Quick Preset Ideas */}
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1.5">
                CLICK PRESET CONCEPT:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {sampleIdeas.map((sIdea, idx) => (
                  <button
                    key={idx}
                    onClick={() => setIdea(sIdea)}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-[11px] text-slate-300 hover:text-cyan-300 font-sans cursor-pointer transition-colors truncate max-w-xs"
                  >
                    "{sIdea.substring(0, 35)}..."
                  </button>
                ))}
              </div>
            </div>

            {/* Genre & Tool Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">
                  GENRE / ATMOSPHERE:
                </label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-xs text-white rounded-lg p-2 focus:outline-none"
                >
                  <option value="Cyberpunk Sci-Fi">Cyberpunk Sci-Fi</option>
                  <option value="Epic Historical">Epic Historical</option>
                  <option value="Luxury Commercial">Luxury Commercial</option>
                  <option value="Surreal Fantasy">Surreal Fantasy</option>
                  <option value="3D Pixar Animation">3D Pixar Animation</option>
                  <option value="Nature Wildlife">Nature Wildlife</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">
                  TARGET AI MODEL:
                </label>
                <select
                  value={toolTarget}
                  onChange={(e) => setToolTarget(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-xs text-white rounded-lg p-2 focus:outline-none"
                >
                  <option value="Runway Gen-3 / Google Flow">Runway Gen-3 / Google Flow</option>
                  <option value="Kling AI High-Physics">Kling AI High-Physics</option>
                  <option value="Google Veo 1080p">Google Veo 1080p</option>
                  <option value="Flux 1.1 Pro Photorealistic">Flux 1.1 Pro Photorealistic</option>
                </select>
              </div>
            </div>

            {/* Generate Action Button */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Engineering Prompt & Storyboard...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Generate Production Prompt & Storyboard</span>
                </>
              )}
            </button>
          </div>

          {/* Results Display */}
          {result && (
            <div className="space-y-5 bg-slate-950 p-5 rounded-xl border border-cyan-500/40 animate-fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-cyan-300">
                    GENERATED MASTER PROMPT SPECIFICATIONS
                  </span>
                </div>
                <button
                  onClick={handleCopyMasterPrompt}
                  className="px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold flex items-center gap-1 hover:bg-cyan-400 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Master Prompt"}</span>
                </button>
              </div>

              {/* Master Prompt Code */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300 leading-relaxed">
                <code>{result.masterPrompt}</code>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">CAMERA MOVEMENT:</span>
                  <span className="text-slate-200">{result.cameraMovement}</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">NEGATIVE CONSTRAINTS:</span>
                  <span className="text-rose-300/80">{result.negativePrompt}</span>
                </div>
              </div>

              {/* Storyboard Frames */}
              {result.storyboard && result.storyboard.length > 0 && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                    3-FRAME SCENE STORYBOARD BREAKDOWN:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {result.storyboard.map((frame, idx) => (
                      <div key={idx} className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex justify-between items-center text-[11px] font-mono text-cyan-400 font-bold">
                          <span>FRAME #{frame.frameNumber}</span>
                          <span className="text-slate-400 font-normal">{frame.scene}</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-snug">{frame.description}</p>
                        <div className="bg-slate-950 p-2 rounded text-[10px] font-mono text-cyan-300/90 truncate">
                          <code>{frame.prompt}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
