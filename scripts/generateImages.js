import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

if (!apiKey) {
  console.error("Error: GEMINI_API_KEY or API_KEY not found in environment variables or .env.local");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const images = [
  {
    name: "hero-bg",
    prompt: "Abstract futuristic 3D landscape, liquid dark metal flowing, glowing bioluminescent cyan veins, obsidian glass textures, cinematic lighting, volumetric fog, octane render, 8k resolution, ultra-detailed, premium tech wallpaper, depth of field",
    aspectRatio: "16:9"
  },
  {
    name: "problem-speed",
    prompt: "Abstract warp speed tunnel, long exposure light trails, digital acceleration, dark fiber optic cables, futuristic speed concept, cinematic lighting, cyan and deep blue accents, 8k resolution, photorealistic",
    aspectRatio: "16:9"
  },
  {
    name: "problem-workspace",
    prompt: "Modern high-end developer workspace, sleek dark desk, multiple monitors displaying code and dashboards, mechanical keyboard, ambient cyan and blue bias lighting, professional office setup, cinematic 8k, photorealistic",
    aspectRatio: "16:9"
  },
  {
    name: "service-code",
    prompt: "Close up of futuristic code hologram, glowing syntax highlighting, dark background, matrix style, depth of field, high tech software development concept",
    aspectRatio: "16:9"
  },
  {
    name: "service-cloud",
    prompt: "Abstract 3D cloud computing visualization, interconnected glowing nodes, data flow, server infrastructure, cyan and blue lights, isometric view",
    aspectRatio: "16:9"
  },
  {
    name: "service-smartphone",
    prompt: "Sleek futuristic smartphone device floating, glowing screen interface, mobile technology, dark premium glass texture, app development",
    aspectRatio: "16:9"
  },
  {
    name: "service-bot",
    prompt: "Artificial intelligence concept, glowing neural network brain, digital synapse, futuristic robot, cyan data particles, machine learning",
    aspectRatio: "16:9"
  },
  {
    name: "service-trending",
    prompt: "Digital strategy concept, glowing 3D graphs and charts, augmented reality business analytics, futuristic hud, financial growth",
    aspectRatio: "16:9"
  },
  {
    name: "service-pen",
    prompt: "Abstract creative digital art, flowing colors and shapes, design tool concept, 3d pen tip glowing, artistic composition, vivid colors",
    aspectRatio: "16:9"
  },
  {
    name: "why-us-sculpture",
    prompt: "Abstract 3D crystal sculpture, translucent geometric shapes, internal glow, cyan and purple lighting, studio lighting, hyper realistic, 8k resolution, masterpiece, dark background",
    aspectRatio: "3:4"
  },
  {
    name: "portfolio-clockwork",
    prompt: "High-end MacBook Pro mockup on dark sleek desk, displaying 'Clockwork Venue' dashboard software, dark UI with neon gold and purple accents, complex data tables and charts, nightlife atmosphere, blurred club lights in background, professional product photography, 8k, photorealistic",
    aspectRatio: "16:9"
  },
  {
    name: "portfolio-dogmora",
    prompt: "Premium iPhone 15 mockup floating in air, displaying 'Dogmora' pet health app, clean white and teal user interface, photo of a happy Golden Retriever on screen, soft bright studio lighting, depth of field, high fidelity 3d render, advertising style",
    aspectRatio: "16:9"
  },
  {
    name: "process-bg",
    prompt: "Digital blueprints, wireframes floating in 3D space, dark blue schematic look, technical drawing style, 8k, architecture",
    aspectRatio: "16:9"
  },
  {
    name: "about-team",
    prompt: "Team of futuristic developers collaborating, holographic interfaces, silhouettes, digital sparks, cinematic composition, blue and orange lighting, cyberpunk subtle aesthetic, 4k",
    aspectRatio: "1:1"
  },
  {
    name: "contact-bg",
    prompt: "Abstract network connections, constellations, global digital network, dots and lines, dark background, cyan and deep blue, 8k, connecting the world",
    aspectRatio: "16:9"
  }
];

async function generateAndSaveImage(item) {
  const outputPath = path.join(__dirname, '../public/images', `${item.name}.png`);

  if (fs.existsSync(outputPath)) {
    console.log(`Skipping ${item.name}, already exists.`);
    return;
  }

  console.log(`Generating ${item.name}...`);

  try {
    const response = await ai.models.generateContent({
      model: 'nano-banana-pro-preview',
      contents: {
        parts: [{ text: item.prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: item.aspectRatio,
        }
      },
    });

    const candidate = response.candidates?.[0];
    if (candidate?.content?.parts?.[0]?.inlineData) {
      const base64Data = candidate.content.parts[0].inlineData.data;
      const buffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync(outputPath, buffer);
      console.log(`Saved ${item.name}.png`);
    } else {
      console.error(`Failed to generate ${item.name}: No image data in response.`);
      console.error(JSON.stringify(response, null, 2));
    }
  } catch (error) {
    console.error(`Error generating ${item.name}:`, error.message);
    if (error.response) {
      console.error(JSON.stringify(error.response, null, 2));
    }
  }
}

async function main() {
  console.log("Starting image generation with imagen-3.0-generate-001...");
  for (const item of images) {
    await generateAndSaveImage(item);
    // Add a delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  console.log("All done!");
}

main();
