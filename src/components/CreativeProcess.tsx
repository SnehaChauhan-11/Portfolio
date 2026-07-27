import React, { useState } from "react";
import { CREATIVE_PROCESS_STEPS } from "../data/portfolioData";
import { ProcessStep } from "../types";
import {
  Lightbulb,
  FileText,
  Code2,
  Sparkles,
  Film,
  Scissors,
  CheckCircle2,
  ArrowRight,
  Clock,
  Wand2,
  Workflow
} from "lucide-react";

const stepIconMap: Record<string, React.ElementType> = {
  Lightbulb,
  FileText,
  Code2,
  Sparkles,
  Film,
  Scissors,
  CheckCircle2
};

export const CreativeProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = CREATIVE_PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI PRODUCTION PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            THE CREATIVE <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">AI WORKFLOW</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From initial idea and prompt architecture to generative video motion and final audio mastering.
          </p>
        </div>

        {/* Horizontal Timeline Pipeline Nav */}
        <div className="relative mb-12">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0"></div>
          <div
            className="hidden md:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 -translate-y-1/2 z-0 transition-all duration-500"
            style={{
              width: `${(activeStepIndex / (CREATIVE_PROCESS_STEPS.length - 1)) * 100}%`
            }}
          ></div>

          {/* Timeline Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 relative z-10">
            {CREATIVE_PROCESS_STEPS.map((step, idx) => {
              const IconComp = stepIconMap[step.iconName] || Sparkles;
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={step.stepNumber}
                  id={`process-step-${step.stepNumber}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 border-2 border-cyan-400 shadow-xl shadow-cyan-950/60 scale-105"
                      : "bg-slate-900/60 border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 font-mono font-bold text-xs transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-400/40"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>

                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                      isActive ? "text-cyan-300" : "text-slate-400"
                    }`}
                  >
                    STEP 0{step.stepNumber}
                  </span>
                  <span
                    className={`text-xs font-bold truncate max-w-[100px] text-center ${
                      isActive ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {step.title.split("&")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detail Inspector Card */}
        <div className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Left Summary */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-mono text-xs font-bold">
                  STEP 0{activeStep.stepNumber} OF 07
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Est. Time: {activeStep.durationEstimate}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {activeStep.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                {activeStep.subtitle}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                {activeStep.description}
              </p>

              {/* Execution Details Checkmarks */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase block">KEY EXECUTION DELIVERABLES:</span>
                {activeStep.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Right Tools Box */}
            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold border-b border-slate-800 pb-2">
                PRIMARY TOOLS & ENGINES
              </h4>

              <div className="flex flex-wrap gap-2">
                {activeStep.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300 flex items-center gap-1.5"
                  >
                    <Wand2 className="w-3 h-3 text-cyan-400" />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Next Step Preview:</span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % CREATIVE_PROCESS_STEPS.length)}
                  className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Advance Pipeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
