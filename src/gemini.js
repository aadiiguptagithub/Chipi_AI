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

// Fallback responses for when API limit is exceeded
const fallbackResponses = {
  greetings: [
    "Hello! I'm Chipi, your virtual assistant. How can I help you today?",
    "Hi there! I'm here to assist you. What would you like to know?",
    "Greetings! I'm Chipi, ready to help you with your questions."
  ],
  general: [
    "I'm currently experiencing high traffic. Please try again in a few moments.",
    "My servers are busy right now. Could you please repeat your question in a little while?",
    "I'm temporarily unavailable due to high demand. Please try again shortly."
  ],
  questions: [
    "That's an interesting question! Due to high usage, I can't provide a detailed answer right now.",
    "I'd love to help with that, but I'm currently at capacity. Please try again soon.",
    "Great question! My systems are busy, but please ask again in a few minutes."
  ]
};

// Simple keyword-based fallback response generator
function generateFallbackResponse(prompt) {
  const lowerPrompt = prompt.toLowerCase();
  
  // Greetings
  if (lowerPrompt.includes('hello') || lowerPrompt.includes('hi') || lowerPrompt.includes('hey')) {
    return fallbackResponses.greetings[Math.floor(Math.random() * fallbackResponses.greetings.length)];
  }
  
  // Questions
  if (lowerPrompt.includes('what') || lowerPrompt.includes('how') || lowerPrompt.includes('why') || lowerPrompt.includes('?')) {
    return fallbackResponses.questions[Math.floor(Math.random() * fallbackResponses.questions.length)];
  }
  
  // General fallback
  return fallbackResponses.general[Math.floor(Math.random() * fallbackResponses.general.length)];
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
    console.error('Gemini API Error:', error);
    
    // Handle specific error cases
    if (error.message.includes('429') || error.message.includes('quota') || error.message.includes('RESOURCE_EXHAUSTED')) {
      return "I'm currently experiencing high demand. My API quota is temporarily exhausted. Please try again in a few hours, or ask me simple questions that I can handle locally!";
    }
    
    if (error.message.includes('API key')) {
      return "There's an issue with my configuration. Please check back later.";
    }
    
    // General fallback
    return generateFallbackResponse(prompt);
  }
}

