export type ProjectCategory =
  | "All"
  | "Luxury Brand Commercial"
  | "Comedy / Brand Campaign"
  | "Luxury Fashion Film"
  | "Historical Fantasy"
  | "Historical Epic"
  | "Music Visualizer"
  | "Patriotic Short Film"
  | "Nostalgic Commercial"
  | "Photorealistic Artwork"
  | "Cultural Heritage"
  | "Cinematic Concept"
  | "Landscape Visualization"
  | string;

export interface StoryboardFrame {
  frameNumber: number;
  title: string;
  image: string;
  description: string;
  prompt: string;
}

export interface Project {
  id: string;
  projectNumber?: string;
  title: string;
  concept: string;
  category: ProjectCategory;
  thumbnail: string;
  videoPreviewUrl?: string; // Simulated video loop or stream
  externalUrl?: string; // External video link (e.g. Twitter/X)
  youtubeUrl?: string; // YouTube video link
  buttonText?: string; // Custom button label
  duration: string;
  aiTools: string[];
  genreTag: string;
  shortDescription: string;
  fullDescription: string;
  masterPrompt: string;
  negativePrompt: string;
  seed: string;
  cameraMovement: string;
  lightingStyle: string;
  fps: number;
  storyboard: StoryboardFrame[];
  clientOrBrand?: string;
  views?: string;
  featured?: boolean;
}

export type GalleryCategory =
  | "All"
  | "Characters"
  | "Fantasy"
  | "Historical"
  | "Nature"
  | "Architecture"
  | "Animals"
  | "Concept Art"
  | "Product Ads"
  | "Portraits"
  | "Landscapes"
  | "Cinematic Frames";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  aspectRatio: "1:1" | "16:9" | "4:3" | "3:4" | "9:16";
  prompt: string;
  negativePrompt: string;
  aiModel: string;
  aspectRatioLabel: string;
  seed: string;
  styleKeywords: string[];
}

export type SkillCategory =
  | "All"
  | "AI Models & Tools"
  | "Video & Motion AI"
  | "Image & Design"
  | "Strategy & Editing";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  iconName: string; // Lucide icon or brand identifier
  proficiency: number; // 0-100
  levelLabel: "Master" | "Expert" | "Advanced";
  description: string;
  useCases: string[];
  samplePromptSnippet?: string;
  featuredTool?: boolean;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  details: string[];
  toolsUsed: string[];
  durationEstimate: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  recommendedTools: string[];
  popularFor: string;
  startingPrice: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  iconName: string;
  description: string;
  keyBenefit: string;
  popularServices: string[];
}
