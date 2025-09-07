import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const generationConfig = {
    temperature: 0.7,
    topP: 0.8,
    topK: 20,
    maxOutputTokens: 150,
    responseMimeType: "text/plain",
};

// Language detection helper
function detectLanguage(text) {
  const hindiPattern = /[\u0900-\u097F]/;
  return hindiPattern.test(text) ? 'hindi' : 'english';
}

// Create system prompt for natural conversation
function createSystemPrompt(userInput, detectedLang) {
  const basePrompt = detectedLang === 'hindi' 
    ? `आप एक मित्रवत AI असिस्टेंट हैं। बातचीत को प्राकृतिक और मानवीय बनाएं। केवल एक उपयुक्त, संक्षिप्त उत्तर दें। हिंदी और अंग्रेजी दोनों का उपयोग कर सकते हैं।`
    : `You are a friendly AI assistant. Keep responses natural and human-like. Give only one appropriate, concise answer. You can use both Hindi and English as needed.`;
  
  return `${basePrompt}\n\nUser: ${userInput}\nAssistant:`;
}

export async function generateResponse(prompt) {
  
  try {
    if (!apiKey) {
      throw new Error('API key not found');
    }
    
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: generationConfig
    });
    
    // Detect language and create appropriate system prompt
    const detectedLang = detectLanguage(prompt);
    const systemPrompt = createSystemPrompt(prompt, detectedLang);
    
    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    let text = response.text();
    
    text = text.split('\n')[0].trim();
    text = text.replace(/^(Assistant:|AI:|Bot:)/i, '').trim();
    return text;
  } catch (error) {
    throw error;
  }
}

