import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_PROMPT } from '@/config/data/portfolio';

let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<void> => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("API Key is missing");
    return;
  }
  const ai = new GoogleGenAI({ apiKey });
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_PROMPT,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "Error: Connection to Neural Core failed (Missing API Key).";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "No response data received.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: Neural Core overload. Please retry.";
  }
};