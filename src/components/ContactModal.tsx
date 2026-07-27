import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, Sparkles, X, Mail, User, DollarSign, MessageSquare } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, prefilledService }) => {
  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(prefilledService || "AI Video Production");
  const [budget, setBudget] = useState("$1,000 - $3,000");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto reset after 3s
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-2xl overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                BOOK CONSULTATION & QUOTE
              </h2>
              <p className="text-[11px] text-cyan-400 font-mono">
                Direct AI Studio Production Inquiry
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

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto shadow-2xl shadow-cyan-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you for reaching out. I will review your AI project requirements and respond within 12 hours with a custom prompt & storyboard proposal.
              </p>
              <span className="text-xs font-mono text-cyan-400 block pt-2">
                Sent to: Singh11lavi@gmail.com
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    YOUR NAME / COMPANY:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe (Brand / Agency)"
                      className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    EMAIL ADDRESS:
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    SERVICE NEEDED:
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-xs text-white rounded-xl p-2.5 focus:outline-none"
                  >
                    <option value="AI Video Production">AI Video Production</option>
                    <option value="AI Commercial Advertisements">AI Commercial Advertisements</option>
                    <option value="AI Image & Concept Art">AI Image & Concept Art</option>
                    <option value="Cinematic Storytelling">Cinematic Storytelling</option>
                    <option value="Prompt Engineering Studio">Prompt Engineering Studio</option>
                    <option value="Social Media Reels & Shorts">Social Media Reels & Shorts</option>
                    <option value="YouTube Content Production">YouTube Content Production</option>
                    <option value="Full Time / Retainer Role">Full Time / Retainer Role</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    PROJECT BUDGET RANGE:
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-xs text-white rounded-xl p-2.5 focus:outline-none"
                  >
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                    <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                    <option value="$7,000+ Enterprise">$7,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">
                  PROJECT VISION / CONCEPT DETAILS:
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your story idea, video length, platform goals, or timeline..."
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-xl p-3 text-xs text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Submit Production Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
