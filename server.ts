import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", mode: process.env.NODE_ENV || "development" });
  });

  // Gemini AI Prompt & Storyboard Generation Route
  app.post("/api/generate-prompt", async (req, res) => {
    const { userIdea, genre, toolTarget } = req.body || {};

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      // Intelligent fallback structured response
      return res.json({
        success: true,
        isFallback: true,
        genre: genre || "Cinematic Sci-Fi",
        toolTarget: toolTarget || "Runway Gen-3 / Midjourney v6",
        masterPrompt: `Cinematic wide shot, ${userIdea || "an ethereal floating city during twilight"}, photorealistic 8k, shot on 35mm lens, volumetric god rays, hyper-detailed textures, moody lighting, award-winning cinematography --ar 16:9 --v 6.0 --style raw`,
        cameraMovement: "Slow forward push-in with gentle drone parallax",
        negativePrompt: "text, watermark, blur, low resolution, extra limbs, distorted face, noise",
        storyboard: [
          {
            frameNumber: 1,
            scene: "Establishing Shot",
            description: `Wide panoramic view of ${userIdea || "the majestic landscape"} at dusk.`,
            prompt: `Establishing wide shot, ${userIdea || "futuristic landscape"}, cinematic lighting, 8k --ar 16:9`
          },
          {
            frameNumber: 2,
            scene: "Mid Subject Reaction",
            description: "Camera zooms in on key character or focal point reacting to surrounding light effects.",
            prompt: `Medium close-up shot of protagonist, intricate details, reflective eyes, cinematic depth of field --ar 16:9`
          },
          {
            frameNumber: 3,
            scene: "Dynamic Climax",
            description: "Sweeping orbit camera shot capturing action and emotional resonance.",
            prompt: `Low-angle dynamic action frame, volumetric fog, high contrast cinematic lighting --ar 16:9`
          }
        ]
      });
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are a master AI Prompt Engineer and Cinematic Visual Director. 
Generate a professional, production-ready AI video & image prompt breakdown for the user's idea.
Return a valid JSON object with keys:
- masterPrompt: string (detailed prompt with technical camera, lighting, and style terms)
- cameraMovement: string
- negativePrompt: string
- genre: string
- toolTarget: string
- storyboard: array of 3 objects with { frameNumber, scene, description, prompt }`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Create an AI visual prompt breakdown for idea: "${userIdea || "Sci-Fi cinematic moment"}", in genre: "${genre || "Cinematic"}", targeting AI tool: "${toolTarget || "Runway Gen-3"}".`,
        config: {
          systemInstruction,
          responseMimeType: "application/json"
        }
      });

      const jsonText = response.text || "{}";
      const parsed = JSON.parse(jsonText);
      return res.json({ success: true, isFallback: false, ...parsed });
    } catch (error: any) {
      console.error("Gemini API Error:", error?.message);
      return res.json({
        success: true,
        isFallback: true,
        error: error?.message,
        masterPrompt: `Cinematic wide shot, ${userIdea || "epic scene"}, volumetric lighting, photorealistic 8k --ar 16:9`,
        cameraMovement: "Cinematic steady push-in",
        negativePrompt: "blur, low quality, noise",
        storyboard: [
          { frameNumber: 1, scene: "Establishing Shot", description: `Wide shot of ${userIdea || "the scene"}.`, prompt: `Wide shot, ${userIdea || "epic scene"} --ar 16:9` }
        ]
      });
    }
  });

  // Vite middleware in dev mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
