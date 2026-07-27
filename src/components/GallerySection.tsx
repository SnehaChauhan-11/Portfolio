import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data/portfolioData";
import { GalleryItem, GalleryCategory } from "../types";
import { LightboxModal } from "./LightboxModal";
import { Sparkles, Image as ImageIcon, ZoomIn, Terminal, Eye } from "lucide-react";

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories: GalleryCategory[] = [
    "All",
    "Characters",
    "Fantasy",
    "Historical",
    "Nature",
    "Architecture",
    "Animals",
    "Concept Art",
    "Product Ads",
    "Portraits",
    "Landscapes",
    "Cinematic Frames"
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <section id="gallery" className="py-24 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI IMAGE GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            GENERATIVE <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">VISUAL EXHIBITION</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-resolution AI-generated artwork across character design, high fantasy landscapes, architectural concepts, and photorealistic portraits.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === cat).length;

            return (
              <button
                key={cat}
                id={`gallery-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
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

        {/* Masonry / Grid Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="break-inside-avoid bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/60 transition-all duration-300 group shadow-lg cursor-pointer relative"
            >
              {/* Image element */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform group-hover:scale-105 group-hover:brightness-110 transition-transform duration-500"
                />

                {/* Hover Soft Glow & Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                      {item.aiModel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white block">
                      {item.title}
                    </span>
                    <p className="text-[10px] text-cyan-200 font-mono line-clamp-2 italic">
                      "{item.prompt}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Title Bar */}
              <div className="p-3 bg-slate-950/90 flex items-center justify-between border-t border-slate-800/80">
                <span className="text-xs font-bold text-slate-200 truncate pr-2">
                  {item.title}
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </section>
  );
};
