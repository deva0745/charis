import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function getGiftRecommendations(prompt: string) {
    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
        },
    });

    const text = response.text;

    if (!text) {
        throw new Error("Gemini returned an empty response.");
    }

    return JSON.parse(text);
}