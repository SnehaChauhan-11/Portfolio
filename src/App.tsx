/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { GallerySection } from "./components/GallerySection";
import { CreativeProcess } from "./components/CreativeProcess";
import { Footer } from "./components/Footer";
import { AIPromptStudioModal } from "./components/AIPromptStudioModal";
import { ResumeModal } from "./components/ResumeModal";
import { ContactModal } from "./components/ContactModal";

export default function App() {
  const [promptStudioOpen, setPromptStudioOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const handleOpenContactWithService = (serviceName?: string) => {
    setPrefilledService(serviceName);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenPromptStudio={() => setPromptStudioOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => handleOpenContactWithService()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenPromptStudio={() => setPromptStudioOpen(true)}
        />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* Dedicated AI Gallery Section */}
        <GallerySection />

        {/* Creative Process Section */}
        <CreativeProcess />
      </main>

      {/* Site Footer */}
      <Footer
        onOpenPromptStudio={() => setPromptStudioOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => handleOpenContactWithService()}
      />

      {/* Interactive AI Prompt Studio Modal */}
      <AIPromptStudioModal
        isOpen={promptStudioOpen}
        onClose={() => setPromptStudioOpen(false)}
      />

      {/* Creator Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Contact & Quote Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        prefilledService={prefilledService}
      />
    </div>
  );
}
