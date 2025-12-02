import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config({ path: '.env.local' });

const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
const ai = new GoogleGenAI({ apiKey });

async function listModels() {
    try {
        const response = await ai.models.list();
        console.log("Response:", JSON.stringify(response, null, 2));
        if (response.models) {
            console.log("Available Models:");
            for (const model of response.models) {
                console.log(`- ${model.name} (${model.displayName})`);
                if (model.supportedGenerationMethods) {
                    console.log(`  Methods: ${model.supportedGenerationMethods.join(', ')}`);
                }
            }
        }
    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
