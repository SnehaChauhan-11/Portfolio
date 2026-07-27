import {
  Project,
  GalleryItem,
  Skill,
  ProcessStep,
  ServiceItem,
  TargetAudience,
} from "../types";

export const PORTFOLIO_STATS: { title: string; description: string }[] = [];

export const HERO_TYPING_STATEMENTS = [
  "Creating cinematic stories with AI.",
  "Turning imagination into visuals.",
  "From prompts to breathtaking worlds.",
  "Engineered with character consistency & motion.",
];

export const SKILLS_DATA: Skill[] = [
  {
    id: "s1",
    name: "ChatGPT",
    category: "AI Models & Tools",
    iconName: "MessageSquareCode",
    proficiency: 98,
    levelLabel: "Master",
    description: "Scriptwriting, narrative beats, character arcs, and multi-turn prompt refinement.",
    useCases: ["Episodic Scripting", "Dialogue Generation", "Logline & Hook Creation"],
    samplePromptSnippet: "Act as a cinematic screenwriter. Draft a 60-second video script with visual cues for...",
    featuredTool: true,
  },
  {
    id: "s2",
    name: "Google Gemini",
    category: "AI Models & Tools",
    iconName: "Sparkles",
    proficiency: 96,
    levelLabel: "Master",
    description: "Multimodal analysis, visual storyboarding, deep research, and prompt optimization.",
    useCases: ["Visual Research", "Storyboard Matrix", "Voiceover Tone Matching"],
    samplePromptSnippet: "Analyze this scene layout and output camera direction parameters formatted for Veo...",
    featuredTool: true,
  },
  {
    id: "s3",
    name: "Claude AI",
    category: "AI Models & Tools",
    iconName: "Cpu",
    proficiency: 95,
    levelLabel: "Master",
    description: "Deep narrative nuance, complex character bibles, and precise prompt logic structure.",
    useCases: ["Worldbuilding Bibles", "Complex Prompts", "Scene Pacing Architecture"],
    samplePromptSnippet: "Construct a 5-act emotional narrative matrix with explicit camera angles for...",
  },
  {
    id: "s4",
    name: "Google Flow",
    category: "Image & Design",
    iconName: "Image",
    proficiency: 98,
    levelLabel: "Master",
    description: "Cinematic scene generation, consistent character storytelling, natural camera movements, shot planning, and high-fidelity visual direction.",
    useCases: ["Cinematic Video Generation", "Story-Driven Scenes", "Character Consistency", "Camera Motion Design"],
    samplePromptSnippet: "Cinematic wide frame, 35mm lens, atmospheric god rays --ar 16:9 --v 6.0 --style raw",
    featuredTool: true,
  },
  {
    id: "s5",
    name: "Runway ML",
    category: "Video & Motion AI",
    iconName: "Video",
    proficiency: 97,
    levelLabel: "Master",
    description: "Gen-3 Alpha video generation, motion brush direction, camera control, and frame interpolation.",
    useCases: ["Text-to-Video", "Image-to-Video", "Camera Pan/Tilt Direction"],
    samplePromptSnippet: "Slow orbital push-in, volumetric smoke drifting through neon fog, 24fps motion brush...",
    featuredTool: true,
  },
  {
    id: "s6",
    name: "Kling AI",
    category: "Video & Motion AI",
    iconName: "Film",
    proficiency: 96,
    levelLabel: "Master",
    description: "High-fidelity physics simulation, extended 10-second clips, ultra-smooth human motion and lip sync.",
    useCases: ["Complex Human Action", "Fluid Dynamics", "Cinematic Sequences"],
    samplePromptSnippet: "Hyper-realistic martial artist performing fluid sword movement in heavy rainfall...",
    featuredTool: true,
  },
  {
    id: "s7",
    name: "Veo",
    category: "Video & Motion AI",
    iconName: "Clapperboard",
    proficiency: 94,
    levelLabel: "Expert",
    description: "Google's state-of-the-art 1080p generative video model for cinematic physics and realistic lighting.",
    useCases: ["Photorealistic B-Roll", "Drone Aerial Views", "Nature & Wildlife Dynamics"],
    samplePromptSnippet: "Aerial FPV drone shot flying through deep redwood forest canyon mist at golden hour...",
    featuredTool: true,
  },
  {
    id: "s8",
    name: "Leonardo AI",
    category: "Image & Design",
    iconName: "Palette",
    proficiency: 95,
    levelLabel: "Master",
    description: "Phoenix model fine-tuning, Alchemy upscale, real-time canvas, and custom motion loops.",
    useCases: ["Asset Generation", "Textured Materials", "Game & Concept Art"],
    samplePromptSnippet: "Dark fantasy warrior, ornate obsidian armor, hyper detailed 8k render...",
  },

  {
    id: "s14",
    name: "CapCut",
    category: "Strategy & Editing",
    iconName: "Smartphone",
    proficiency: 99,
    levelLabel: "Master",
    description: "Viral social media pacing, auto captions, keyframe animations, and trending audio syncing.",
    useCases: ["TikTok & Reels Cuts", "Dynamic Text Captions", "Fast-Paced Commercials"],
  },
  {
    id: "s15",
    name: "Canva",
    category: "Strategy & Editing",
    iconName: "Layout",
    proficiency: 95,
    levelLabel: "Master",
    description: "Rapid thumbnail design, pitch deck creation, social media branding kits, and ad templates.",
    useCases: ["YouTube Thumbnails", "Client Deck Presentations", "Social Banners"],
  },
  {
    id: "s16",
    name: "Prompt Engineering",
    category: "Strategy & Editing",
    iconName: "Terminal",
    proficiency: 100,
    levelLabel: "Master",
    description: "Negative prompting, parameter tuning (--sref, --cref, seed tracking), weighted tokens, and AI syntax.",
    useCases: ["Model Fine-Tuning", "Multi-Tool Workflows", "Repeatable Asset Pipelines"],
    featuredTool: true,
  },
  {
    id: "s17",
    name: "AI Storyboarding",
    category: "Strategy & Editing",
    iconName: "Grid",
    proficiency: 98,
    levelLabel: "Master",
    description: "Translating script beats into camera angle matrices, focal length guides, and visual pacing boards.",
    useCases: ["Commercial Pitching", "Pre-Visualization", "Scene Beat Planning"],
  },
  {
    id: "s18",
    name: "Character Consistency",
    category: "Strategy & Editing",
    iconName: "UserCheck",
    proficiency: 99,
    levelLabel: "Master",
    description: "Maintaining facial structure, costume details, and color palettes across multiple AI video scenes.",
    useCases: ["Short Film Characters", "Brand Mascot Continuity", "Episodic AI Series"],
    featuredTool: true,
  },
  {
    id: "s19",
    name: "Video Editing",
    category: "Strategy & Editing",
    iconName: "Sliders",
    proficiency: 97,
    levelLabel: "Master",
    description: "Seamless transitions between generated AI clips, frame rate matching, and color harmonization.",
    useCases: ["Cinematic Pace", "Audio-Visual Sync", "Seamless AI Stitching"],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "p1",
    projectNumber: "PROJECT 01",
    title: "THE MIDNIGHT FEAST",
    concept: "When history falls silent, curiosity awakens.",
    category: "Luxury Brand Commercial",
    genreTag: "Luxury Brand Commercial",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThg17Q1n1RbHUUAhRw2VY0Xxgqoc9cdtzZkdjkiv-5bw&s=10",
    videoPreviewUrl: "https://assets.mixkit.co/videos/preview/mixkit-top-view-of-chocolate-bars-and-ingredients-42352-large.mp4",
    externalUrl: "https://x.com/Sneha_Chauhan11/status/2080635149419684173?s=20",
    youtubeUrl: "https://youtube.com/shorts/eBeP-3oCmDs?si=DEc2G2h6s2nbOd40",
    buttonText: "View Creative Process →",
    duration: "38 sec",
    aiTools: ["Google Flow", "Runway Gen-3", "Midjourney", "Kling AI"],
    shortDescription: "An imaginative AI commercial where paintings, sculptures, and forgotten legends secretly gather around a glowing Feastables chocolate bar after museum hours.",
    fullDescription: "Feastables Museum Advertisement: An imaginative AI commercial where paintings, sculptures, and forgotten legends secretly gather around a glowing Feastables chocolate bar after museum hours. Blending high-end luxury museum aesthetics with playful narrative intrigue.",
    masterPrompt: "Cinematic luxury museum gallery at night, spotlight on velvet pedestal holding a glowing Feastables chocolate bar, ancient statues subtly coming to life, photorealistic 8k --ar 16:9",
    negativePrompt: "text, logo, 3d render, cartoon, extra hands, blur, distorted face",
    seed: "98234102",
    cameraMovement: "Dynamic tracking dolly shot moving through museum columns",
    lightingStyle: "Deep chiaroscuro moonlight with gold spotlight accents",
    fps: 60,
    views: "3.2M Views",
    clientOrBrand: "Feastables Commercial",
    featured: true,
    storyboard: [
      {
        frameNumber: 1,
        title: "The Museum Gallery",
        image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
        description: "Moonlit museum hall with velvet pedestal holding the chocolate bar.",
        prompt: "Museum gallery at night, spotlight on velvet pedestal --ar 16:9"
      },
      {
        frameNumber: 2,
        title: "Sculpture Awakening",
        image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop",
        description: "Marble statue subtly leaning toward the glowing pedestal.",
        prompt: "Marble statue coming alive, reaching for pedestal, cinematic lighting --ar 16:9"
      }
    ]
  },
  {
    id: "p2",
    projectNumber: "PROJECT 02",
    title: "EXTINCTION CAN WAIT",
    concept: "A heartwarming AI-generated short film capturing the nostalgic joy of a rainy school morning, where a child is excited to discover school is canceled and spends the day happily watching cartoons.",
    category: "Nostalgic Storytelling",
    genreTag: "Nostalgic Storytelling",
    thumbnail: "https://img.youtube.com/vi/wndRQ-HLsMU/hqdefault.jpg",
    videoPreviewUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-taking-a-slice-of-pizza-42807-large.mp4",
    youtubeUrl: "https://youtu.be/wndRQ-HLsMU",
    buttonText: "Watch Breakdown →",
    duration: "45 sec",
    aiTools: ["Google Veo 3", "ChatGPT", "Canva"],
    shortDescription: "A heartwarming AI-generated short film capturing the nostalgic joy of a rainy school morning, where a child is excited to discover school is canceled and spends the day happily watching cartoons. The project focuses on realistic storytelling, emotional expressions, and cozy cinematic visuals that evoke childhood memories.",
    fullDescription: "A heartwarming AI-generated short film capturing the nostalgic joy of a rainy school morning, where a child is excited to discover school is canceled and spends the day happily watching cartoons. The project focuses on realistic storytelling, emotional expressions, and cozy cinematic visuals that evoke childhood memories.",
    masterPrompt: "Cozy rainy school morning, happy child wrapped in warm blanket watching cartoons on vintage TV, rain droplets on window pane, nostalgic golden cinematic lighting, 8k --ar 16:9",
    negativePrompt: "low res, blurry, distorted face, dark dreary",
    seed: "77239102",
    cameraMovement: "Slow push-in toward child's happy smile with rain outside window",
    lightingStyle: "Cozy warm indoor glow contrasted with cool rainy daylight",
    fps: 30,
    views: "1.9M Views",
    clientOrBrand: "Nostalgic AI Shorts",
    featured: true,
    storyboard: [
      {
        frameNumber: 1,
        title: "Rainy Morning Announcement",
        image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=800&auto=format&fit=crop",
        description: "Raindrops pattering on glass as school cancelation is announced.",
        prompt: "Cozy rainy morning window view with warm indoor reflections --ar 16:9"
      }
    ]
  },

  {
    id: "p4",
    projectNumber: "PROJECT 03",
    title: "AYURVERSE",
    concept: "A time-travel adventure following a tomboy girl meeting Sushruta to discover ancient Ayurveda and surgery.",
    category: "Educational AI Series",
    genreTag: "Educational AI Series",
    thumbnail: "https://img.youtube.com/vi/vrubD9rIcxg/hqdefault.jpg",
    videoPreviewUrl: "https://assets.mixkit.co/videos/preview/mixkit-candle-flame-flickering-in-a-dark-room-41559-large.mp4",
    youtubeUrl: "https://youtu.be/vrubD9rIcxg",
    externalUrl: "https://x.com/Sneha_Chauhan11/status/2078542256613777787?s=20",
    buttonText: "View Storyboard →",
    duration: "2 min 08 sec",
    aiTools: ["Google Flow", "Character Consistency", "Educational Storytelling"],
    shortDescription: "A time-travel adventure following a tomboy girl meeting Sushruta to discover ancient Ayurveda and surgery.",
    fullDescription: "AyurVerse: Time Travel to Sushruta - A time-travel adventure following a tomboy girl meeting Sushruta to discover ancient Ayurveda and surgery.",
    masterPrompt: "Cinematic historical fantasy, modern traveler stepping through glowing portal into ancient Indian Ayurvedic academy of Sushruta, oil lamps, palm leaf manuscripts, 8k --ar 16:9",
    negativePrompt: "modern cars, power lines, low res",
    seed: "10293847",
    cameraMovement: "Slow tracking camera push following character into ancient courtyard",
    lightingStyle: "Warm candlelit glow with ethereal blue portal lighting",
    fps: 24,
    views: "2.1M Views",
    clientOrBrand: "AyurVerse Series",
    featured: true,
    storyboard: [
      {
        frameNumber: 1,
        title: "Portal Discovery",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800&auto=format&fit=crop",
        description: "Stepping through time into ancient Takshashila / Kashi courtyard.",
        prompt: "Time travel portal opening in ancient Indian courtyard --ar 16:9"
      }
    ]
  },
  {
    id: "p5",
    projectNumber: "PROJECT 04",
    title: "THE LAST STAND OF PRITHVIRAJ",
    concept: "Legends never disappear—they echo through history.",
    category: "Historical Epic",
    genreTag: "Historical Epic",
    thumbnail: "https://img.youtube.com/vi/KhnHfqEtmao/hqdefault.jpg",
    videoPreviewUrl: "https://assets.mixkit.co/videos/preview/mixkit-fireworks-illuminating-the-sky-41558-large.mp4",
    externalUrl: "https://x.com/Sneha_Chauhan11/status/2074896279474405821?s=20",
    youtubeUrl: "https://youtu.be/KhnHfqEtmao",
    buttonText: "Explore Timeline →",
    duration: "1 min 42 sec",
    aiTools: ["Google Flow", "Veo", "Midjourney", "Kling AI"],
    shortDescription: "An AI-generated historical recreation combining authentic architecture, battlefield cinematography, and emotionally driven storytelling.",
    fullDescription: "Prithviraj Chauhan Historical Film: An AI-generated historical recreation combining authentic architecture, battlefield cinematography, and emotionally driven storytelling.",
    masterPrompt: "Epic historical battle shot, king Prithviraj Chauhan in ornate Rajput armor standing atop fort wall at dusk, dust clouds, dramatic sunset sky, IMAX quality --ar 16:9",
    negativePrompt: "modern elements, 3d render, low detail",
    seed: "55667788",
    cameraMovement: "High-angle crane downward tilt over ancient fortress walls",
    lightingStyle: "Fiery sunset orange with dramatic storm shadow fill",
    fps: 24,
    views: "4.1M Views",
    clientOrBrand: "Historical Epics AI",
    featured: true,
    storyboard: [
      {
        frameNumber: 1,
        title: "Fortress Sunset",
        image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=800&auto=format&fit=crop",
        description: "King Prithviraj watching over the battlements at dusk.",
        prompt: "Historical Rajput king on fort wall at fiery sunset --ar 16:9"
      }
    ]
  },
  {
    id: "p6",
    projectNumber: "PROJECT 05",
    title: "WHEN SILENCE SINGS",
    concept: "Some emotions don't need dialogue.",
    category: "Music Visualizer",
    genreTag: "Music Visualizer",
    thumbnail: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=1600&auto=format&fit=crop",
    videoPreviewUrl: "https://assets.mixkit.co/videos/preview/mixkit-lights-in-a-night-city-41221-large.mp4",
    buttonText: "View Visual Journey →",
    duration: "56 sec",
    aiTools: ["Google Flow", "Runway Gen-3", "Midjourney", "ElevenLabs"],
    shortDescription: "A romantic AI music film inspired by Tu Jaane Na, featuring poetic visuals, soft cinematic lighting, and emotionally connected storytelling.",
    fullDescription: "Tu Jaane Na — AI Music Video: A romantic AI music film inspired by Tu Jaane Na, featuring poetic visuals, soft cinematic lighting, and emotionally connected storytelling.",
    masterPrompt: "Cinematic romantic frame, couple standing on rain-slicked bridge in misty city, soft bokeh lights reflecting in puddle water, emotional atmosphere --ar 16:9",
    negativePrompt: "harsh lighting, cartoon, low quality",
    seed: "33441122",
    cameraMovement: "Gentle handheld drift across rain bokeh reflections",
    lightingStyle: "Soft warm streetlamp key with moody blue rain fill",
    fps: 24,
    views: "1.5M Views",
    clientOrBrand: "AI Music Visuals",
    featured: true,
    storyboard: [
      {
        frameNumber: 1,
        title: "Rain Bridge",
        image: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=800&auto=format&fit=crop",
        description: "Bokeh reflections on rainy street at dusk.",
        prompt: "Rainy street reflection bokeh lights, romantic mood --ar 16:9"
      }
    ]
  },
  {
    id: "p7",
    projectNumber: "PROJECT 06",
    title: "COLORS OF SACRIFICE",
    concept: "Freedom is remembered through every generation.",
    category: "Patriotic Short Film",
    genreTag: "Patriotic Short Film",
    thumbnail: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1600&auto=format&fit=crop",
    videoPreviewUrl: "https://assets.mixkit.co/videos/preview/mixkit-fireworks-illuminating-the-sky-41558-large.mp4",
    buttonText: "Watch Story →",
    duration: "58 sec",
    aiTools: ["Google Flow", "Veo", "Kling AI", "Runway Gen-3"],
    shortDescription: "An emotional Independence Day film celebrating courage, sacrifice, and national pride with cinematic AI visuals and nostalgic storytelling.",
    fullDescription: "Independence Day Emotional Film: An emotional Independence Day film celebrating courage, sacrifice, and national pride with cinematic AI visuals and nostalgic storytelling.",
    masterPrompt: "Cinematic patriotic short, Indian flag waving proudly atop historic fort during sunrise, golden rays cutting through morning mist, 8k --ar 16:9",
    negativePrompt: "distorted flag, low resolution, noise",
    seed: "99112233",
    cameraMovement: "Upward slow tracking shot following tricolor flag in wind",
    lightingStyle: "Golden dawn sunshine with soft atmospheric haze",
    fps: 30,
    views: "3.8M Views",
    clientOrBrand: "Patriotic Cinema",
    featured: true,
    storyboard: [
      {
        frameNumber: 1,
        title: "Golden Dawn Flag",
        image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop",
        description: "Tricolor flag waving gracefully against dawn sky.",
        prompt: "Indian flag waving at sunrise on historic fort --ar 16:9"
      }
    ]
  },

  {
    id: "p10",
    projectNumber: "PROJECT 07",
    title: "ECHOES OF PRAMBANAN",
    concept: "Ancient stone. Endless stories.",
    category: "Cultural Heritage",
    genreTag: "Cultural Heritage",
    thumbnail: "https://img.youtube.com/vi/07DTyww-CnU/hqdefault.jpg",
    videoPreviewUrl: "https://assets.mixkit.co/videos/preview/mixkit-fireworks-illuminating-the-sky-41558-large.mp4",
    youtubeUrl: "https://youtu.be/07DTyww-CnU",
    buttonText: "Discover Heritage →",
    duration: "47 sec",
    aiTools: ["Google Flow", "Midjourney", "Veo", "Runway"],
    shortDescription: "This project explores the history, architecture, and cultural significance of Indonesia's largest Hindu temple, Prambanan. Using AI-powered visuals and cinematic storytelling, it highlights the temple's origins, UNESCO heritage status, and intricate Ramayana carvings. The goal was to present historical information in an engaging and visually immersive format for a modern audience.",
    fullDescription: "Prambanan Temple Visualization: This project explores the history, architecture, and cultural significance of Indonesia's largest Hindu temple, Prambanan. Using AI-powered visuals and cinematic storytelling, it highlights the temple's origins, UNESCO heritage status, and intricate Ramayana carvings. The goal was to present historical information in an engaging and visually immersive format for a modern audience.",
    masterPrompt: "Cinematic wide shot of Prambanan Hindu temple spires in Yogyakarta, Indonesia, sunset sky with purple and orange clouds, intricate stone carvings illuminated by torchlight --ar 16:9",
    negativePrompt: "modern tourists, low resolution, distorted stone",
    seed: "44332211",
    cameraMovement: "Smooth low-angle tracking shot along temple stone courtyard",
    lightingStyle: "Twilight dusk sky with warm stone torch illumination",
    fps: 30,
    views: "920K Views",
    clientOrBrand: "Cultural Heritage AI",
    featured: true,
    storyboard: [
      {
        frameNumber: 1,
        title: "Prambanan at Sunset",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop",
        description: "Towering stone spires of Prambanan temple.",
        prompt: "Prambanan temple spires in Indonesia at dusk --ar 16:9"
      }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Cybernetic Valkyrie",
    category: "Characters",
    image: "https://i.ibb.co/DfHNzMQn/sci-img.png",
    aspectRatio: "3:4",
    aspectRatioLabel: "3:4 Portrait",
    prompt: "Cyberpunk female warrior with intricate glowing sapphire neural implants, metallic shoulder armor, hyperrealistic skin textures, volumetric dark background, shot on 85mm portrait lens --ar 3:4 --v 6.0",
    negativePrompt: "cartoon, flat shading, extra eyes, bad anatomy",
    aiModel: "Google Flow",
    seed: "9982341",
    styleKeywords: ["Cyberpunk", "Portrait", "Sapphire Glow", "85mm Lens"]
  },
  {
    id: "g2",
    title: "Floating Astral Palace",
    category: "Fantasy",
    image: "https://i.ibb.co/j941Kqb3/banana-berry.png",
    aspectRatio: "16:9",
    aspectRatioLabel: "16:9 Cinematic",
    prompt: "Ethereal crystal palace floating amidst pink and indigo sunset cloudscape, golden waterfalls spilling into void, high fantasy concept art, octane render --ar 16:9",
    negativePrompt: "text, watermark, low resolution, dark blur",
    aiModel: "Flux 1.1 Pro",
    seed: "7741298",
    styleKeywords: ["High Fantasy", "Cloudscape", "Crystal Architecture"]
  },
  {
    id: "g3",
    title: "Emperor's Throne Room, 220 BCE",
    category: "Historical",
    image: "https://i.ibb.co/5xzdGxBf/feastable-pic.png",
    aspectRatio: "4:3",
    aspectRatioLabel: "4:3 Standard",
    prompt: "Qin Dynasty imperial palace throne room, burning bronze incense burners with intricate dragons, dark polished obsidian floor reflecting red lanterns, historic photorealism --ar 4:3",
    negativePrompt: "modern elements, electric light, cheap plastic",
    aiModel: "Google Flow",
    seed: "4512903",
    styleKeywords: ["Ancient History", "Imperial Red", "Obsidian Reflection"]
  },
  {
    id: "g4",
    title: "Bioluminescent Rainforest Canopy",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1511497584788-876761c11969?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "3:4",
    aspectRatioLabel: "3:4 Vertical",
    prompt: "Macro photograph of night rainforest with glowing cyan mushrooms, shimmering moisture droplets on tropical leaves, bokeh ambient lighting, National Geographic style --ar 3:4",
    negativePrompt: "blurry, low contrast, artificial plastic",
    aiModel: "Leonardo Phoenix",
    seed: "8823104",
    styleKeywords: ["Macro Nature", "Bioluminescence", "Bokeh"]
  },
  {
    id: "g6",
    title: "Neon Leopard in Night Jungle",
    category: "Animals",
    image: "https://i.ibb.co/KjkNYH0d/orange-city.png",
    aspectRatio: "1:1",
    aspectRatioLabel: "1:1 Square",
    prompt: "Wild leopard resting on a tree branch at night with UV fluorescent bioluminescent fur patterns glowing in ultraviolet light, sharp eyes, photorealistic 8k --ar 1:1",
    negativePrompt: "cage, collar, human, cartoon, low detail",
    aiModel: "Google Flow",
    seed: "3391029",
    styleKeywords: ["UV Glow", "Wildlife", "Fluorescent"]
  },
  {
    id: "g7",
    title: "Chrono-Engine Core Concept",
    category: "Concept Art",
    image: "https://i.ibb.co/wr8jS9gT/dream-travel.jpg",
    aspectRatio: "16:9",
    aspectRatioLabel: "16:9 Panoramic",
    prompt: "Industrial hard surface concept art of a quantum fusion core, glowing orange plasma ring surrounded by mechanical brass gears and hydraulic steam valves, volumetric fog --ar 16:9",
    negativePrompt: "flat colors, low detail, simple render",
    aiModel: "Google Flow",
    seed: "9910293",
    styleKeywords: ["Hard Surface", "Quantum Core", "Steampunk Sci-Fi"]
  },
  {
    id: "g9",
    title: "The Alchemist's Study",
    category: "Portraits",
    image: "https://i.ibb.co/TMspyrFt/Ai-img.png",
    aspectRatio: "3:4",
    aspectRatioLabel: "3:4 Portrait",
    prompt: "Close up portrait of an elderly bearded alchemist examining a glowing amber potion bottle in a candlelit library, detailed wrinkles, Rembrandt lighting --ar 3:4",
    negativePrompt: "plastic skin, smooth face, modern clothes",
    aiModel: "Google Flow",
    seed: "5510293",
    styleKeywords: ["Rembrandt Lighting", "Alchemist", "Detailed Texture"]
  },
  {
    id: "g11",
    title: "Interstellar Orbital Dock",
    category: "Cinematic Frames",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "16:9",
    aspectRatioLabel: "16:9 Cinematic",
    prompt: "Cinematic film frame from sci-fi film, massive ring space station docked above Earth curve at orbital sunrise, lens flare, IMAX aspect ratio, photorealistic 8k --ar 16:9",
    negativePrompt: "cartoon, low resolution, 2d, watermark",
    aiModel: "Google Flow",
    seed: "7723901",
    styleKeywords: ["IMAX Cinematic", "Orbital Station", "Earth Horizon"]
  }
];

export const CREATIVE_PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Idea & Core Concept",
    subtitle: "Defining Narrative Vision",
    iconName: "Lightbulb",
    description: "Brainstorming unique hooks, emotional beats, genre tropes, and thematic targets for maximum viewer resonance.",
    details: [
      "Target Audience & Platform Analysis",
      "Core Emotional Arc & Logline Formulation",
      "Visual Style & Color Palette Direction"
    ],
    toolsUsed: ["ChatGPT", "Claude AI", "Miro"],
    durationEstimate: "2 - 4 Hours"
  },
  {
    stepNumber: 2,
    title: "Research & Script Writing",
    subtitle: "Crafting the Story Blueprint",
    iconName: "FileText",
    description: "Structuring pacing, writing voiceovers, detailing scene descriptions, and establishing pacing benchmarks.",
    details: [
      "Historical/Conceptual Fact Checking",
      "Scene-by-Scene Beat Sheet & Dialogue",
      "Audio Pacing & Hook Optimization"
    ],
    toolsUsed: ["ChatGPT", "Gemini AI", "Notion"],
    durationEstimate: "4 - 8 Hours"
  },
  {
    stepNumber: 3,
    title: "Prompt Engineering",
    subtitle: "AI Model Syntax Architecture",
    iconName: "Code2",
    description: "Constructing precise weighted prompts, negative constraints, camera specifications, and seed consistency chains.",
    details: [
      "Camera Angle & Focal Length Matrix",
      "Lighting & Atmospheric Token Tuning",
      "Character Consistency (--cref / --sref) Seeds"
    ],
    toolsUsed: ["Google Flow", "Flux 1.1 Pro", "Ideogram"],
    durationEstimate: "3 - 6 Hours"
  },
  {
    stepNumber: 4,
    title: "AI Image Generation",
    subtitle: "Keyframe Master Generation",
    iconName: "Sparkles",
    description: "Generating high-resolution base keyframes, refining character features, and executing upscale enhancements.",
    details: [
      "Variational Sampling & Selection",
      "Photoshop Generative Fill Cleanup",
      "High-Fidelity 8K Upscaling"
    ],
    toolsUsed: ["Google Flow", "Leonardo AI", "Photoshop"],
    durationEstimate: "4 - 10 Hours"
  },
  {
    stepNumber: 5,
    title: "AI Video Generation",
    subtitle: "Motion Dynamics & Physics",
    iconName: "Film",
    description: "Transforming keyframes into fluid video clips, directing camera motions, and tuning physics dynamics.",
    details: [
      "Motion Brush & Camera Direction Setup",
      "Runway Gen-3 / Kling / Veo Motion Loops",
      "Physics & Lip-Sync Verification"
    ],
    toolsUsed: ["Runway Gen-3", "Kling AI", "Google Veo"],
    durationEstimate: "8 - 16 Hours"
  },
  {
    stepNumber: 6,
    title: "Editing & Sound Design",
    subtitle: "Harmonizing Visuals & Audio",
    iconName: "Scissors",
    description: "Stitching generated AI clips on timeline, color matching, layering SFX, and applying voiceovers.",
    details: [
      "Precise Speed Ramping & Pacing Cuts",
      "ElevenLabs Voiceover & Audio Mastering",
      "Foley Sound FX & Music Score Layers"
    ],
    toolsUsed: ["After Effects", "CapCut"],
    durationEstimate: "6 - 12 Hours"
  },
  {
    stepNumber: 7,
    title: "Final Delivery & Polish",
    subtitle: "Mastering for Broadcast & Social",
    iconName: "CheckCircle2",
    description: "Exporting in multi-platform formats (4K 16:9, 9:16 Reels), thumbnail optimization, and delivery packages.",
    details: [
      "Color Space Conversion (Rec.709 / HDR)",
      "High-CTR Thumbnail Design Matrix",
      "Client Master Asset Delivery"
    ],
    toolsUsed: ["Topaz Video AI", "Canva", "Dropbox"],
    durationEstimate: "1 - 3 Hours"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "srv1",
    title: "AI Video Production",
    badge: "Flagship Service",
    description: "Full end-to-end production of cinematic AI videos, from scriptwriting and storyboard to video generation and audio mix.",
    deliverables: ["Full 4K Video Master", "Custom Voiceover & SFX", "3 Social Cutdowns (9:16)", "Custom Prompt Archive"],
    recommendedTools: ["Runway Gen-3", "Kling AI", "Google Flow"],
    popularFor: "Short Films, Commercials & Trailers",
    startingPrice: "$1,499"
  },
  {
    id: "srv2",
    title: "AI Image & Concept Art",
    badge: "High Demand",
    description: "Hyper-realistic keyframe art, fantasy worldbuilding, character sheets, and marketing visual suites.",
    deliverables: ["10-25 8K Keyframe Images", "Character Consistency Sheets", "Layered PSD Files", "Full Prompt Parameters"],
    recommendedTools: ["Google Flow", "Flux 1.1 Pro", "Photoshop"],
    popularFor: "Game Studios, Book Covers & Branding",
    startingPrice: "$799"
  },
  {
    id: "srv3",
    title: "Cinematic Storytelling",
    badge: "Creative Core",
    description: "Crafting emotionally compelling narrative arcs, episodic AI series, and historical storytelling scripts.",
    deliverables: ["Multi-Act Script & Logline", "Full Visual Storyboard Deck", "Audio Sync Plan"],
    recommendedTools: ["Claude AI", "ChatGPT", "Gemini AI"],
    popularFor: "Documentaries & Episodic Series",
    startingPrice: "$999"
  },
  {
    id: "srv4",
    title: "Prompt Engineering Studio",
    badge: "Technical",
    description: "Custom prompt syntax design, model fine-tuning guidance, and seed consistency architecture for teams.",
    deliverables: ["Custom Prompt Syntax Matrix", "1-on-1 Strategy Session", "Negative Prompt Bibles"],
    recommendedTools: ["Google Flow", "Runway Gen-3", "Claude AI"],
    popularFor: "Agencies & Enterprise Marketing",
    startingPrice: "$650"
  },
  {
    id: "srv5",
    title: "AI Commercial Advertisements",
    badge: "ROI Focused",
    description: "High-converting 15s to 60s video ads engineered for digital campaigns, luxury products, and SaaS.",
    deliverables: ["Broadcast Quality Video Ad", "A/B Hook Variations", "High-CTR Thumbnail"],
    recommendedTools: ["Veo", "Ideogram", "After Effects"],
    popularFor: "E-Commerce, Automotive & Tech Brands",
    startingPrice: "$1,299"
  },
  {
    id: "srv6",
    title: "Social Media Reels & Shorts",
    badge: "Viral Growth",
    description: "High-retention 9:16 vertical video shorts engineered for Instagram Reels, TikTok, and YouTube Shorts.",
    deliverables: ["5-10 Vertical Reels", "Dynamic Captions & SFX", "Viral Hook Scripts"],
    recommendedTools: ["CapCut", "Google Flow", "Kling AI"],
    popularFor: "Creators, Influencers & Startups",
    startingPrice: "$899"
  },
  {
    id: "srv7",
    title: "YouTube Content Production",
    badge: "High Retention",
    description: "Full documentary and explainer video production tailored for high retention YouTube channels.",
    deliverables: ["10-15 Min Video Master", "High-CTR Custom Thumbnail", "SEO Chapter Markers"],
    recommendedTools: ["ChatGPT", "Veo", "After Effects"],
    popularFor: "Faceless Channels & Science Outlets",
    startingPrice: "$1,899"
  },
  {
    id: "srv8",
    title: "AI Educational Videos",
    badge: "Explainer",
    description: "Transforming complex scientific, financial, or historical concepts into engaging visual explainers.",
    deliverables: ["Comprehensive Explainer Script", "Custom 3D Metaphor Graphics", "Voiceover Integration"],
    recommendedTools: ["Leonardo AI", "Runway Gen-3", "Gemini AI"],
    popularFor: "EdTech, Financial & Science Media",
    startingPrice: "$1,100"
  },
  {
    id: "srv9",
    title: "AI Character Design",
    badge: "Consistency",
    description: "Designing distinct, multi-angle characters with guaranteed consistency across video and image assets.",
    deliverables: ["Full 360-Degree Turnaround Sheet", "Facial Expression Matrix", "Consistent Video Seed Code"],
    recommendedTools: ["Google Flow", "Photoshop"],
    popularFor: "Mascots, VTubers & Game Design",
    startingPrice: "$750"
  },
  {
    id: "srv10",
    title: "AI Thumbnail Design",
    badge: "High CTR",
    description: "Eye-catching, high-contrast YouTube thumbnails designed to maximize click-through rates.",
    deliverables: ["3 High-CTR Thumbnail Variations", "Photoshop Source Files", "Click-Ratio Consultation"],
    recommendedTools: ["Ideogram", "Photoshop", "Canva"],
    popularFor: "YouTube Creators & Streamers",
    startingPrice: "$350"
  },
  {
    id: "srv11",
    title: "Brand Visual Content Package",
    badge: "Full Suite",
    description: "Comprehensive AI brand visual system including product render stills, social templates, and hero banners.",
    deliverables: ["20 Brand Image Assets", "Hero Website Banners", "Social Media Template Pack"],
    recommendedTools: ["Flux 1.1 Pro", "Canva", "Photoshop"],
    popularFor: "Startups & Rebranding Campaigns",
    startingPrice: "$1,600"
  },
  {
    id: "srv12",
    title: "Creative AI Consultation",
    badge: "Advisory",
    description: "1-on-1 strategic workshop advising creative agencies and studios on integrating AI production pipelines.",
    deliverables: ["60-Min Live Zoom Session", "Custom AI Tech Stack Blueprint", "Workflow Recording & Notes"],
    recommendedTools: ["Custom AI Stack Consultation"],
    popularFor: "Filmmakers & Production Agencies",
    startingPrice: "$300 / hr"
  }
];

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: "ta1",
    title: "Brands seeking AI Ads",
    iconName: "Megaphone",
    description: "Produce luxury commercial videos and high-converting ad visuals at a fraction of traditional shoot budgets.",
    keyBenefit: "Zero location fees + 10x faster campaign iteration speed.",
    popularServices: ["AI Commercial Advertisements", "Brand Visual Content Package"]
  },
  {
    id: "ta2",
    title: "YouTube & Content Creators",
    iconName: "Youtube",
    description: "Scale high-retention video output with cinematic B-roll, documentary recreations, and high-CTR thumbnails.",
    keyBenefit: "Boost viewer retention by up to 45% with custom AI visual hooks.",
    popularServices: ["YouTube Content Production", "AI Thumbnail Design"]
  },
  {
    id: "ta3",
    title: "Marketing & Creative Agencies",
    iconName: "Building2",
    description: "Outsource high-complexity AI visual assets, client pitch decks, and commercial video storyboards.",
    keyBenefit: "Win pitch decks with broadcast-ready pre-visualization.",
    popularServices: ["AI Video Production", "Prompt Engineering Studio"]
  },
  {
    id: "ta4",
    title: "Filmmakers & Game Studios",
    iconName: "Clapperboard",
    description: "Accelerate pre-production worldbuilding, concept art keyframes, and character consistency development.",
    keyBenefit: "Visualize whole movie worlds before spending single dollar on set.",
    popularServices: ["AI Character Design", "AI Image & Concept Art"]
  },
  {
    id: "ta5",
    title: "Recruiters & Enterprise Hiring",
    iconName: "Briefcase",
    description: "Hire a proven prompt engineer and AI visual director capable of driving cutting-edge generative workflows.",
    keyBenefit: "Direct experience across all major AI video & image models.",
    popularServices: ["Creative AI Consultation", "Full Time & Retainer Roles"]
  }
];
