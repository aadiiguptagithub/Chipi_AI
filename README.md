# 🤖 Chipi AI - Advanced Virtual Assistant

<div align="center">
  <img src="src/assets/ai.png" alt="Chipi AI" width="200" height="200" style="border-radius: 50%;">
  
  [![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan.svg)](https://tailwindcss.com/)
  [![Gemini AI](https://img.shields.io/badge/Gemini-AI-green.svg)](https://ai.google.dev/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
</div>

## 🌟 **Overview**

Chipi is a cutting-edge AI-powered virtual assistant that combines modern web technologies with advanced artificial intelligence. With its futuristic interface and intelligent voice interactions, Chipi provides a seamless user experience for various tasks and queries.

## ✨ **Features**

### 🎤 **Voice Interaction**
- **Real-time Speech Recognition** - Natural voice input processing
- **High-Quality Text-to-Speech** - Crystal clear AI voice responses
- **Conversation Memory** - Maintains context across interactions
- **Multi-language Support** - Supports multiple languages

### 🧠 **AI Intelligence**
- **Google Gemini AI Integration** - Advanced language understanding
- **Smart Command Processing** - Intelligent task execution
- **Context-Aware Responses** - Relevant and personalized answers
- **Dynamic Learning** - Adapts to user preferences

### 🌐 **Smart Commands**
- **Date & Time Queries** - Current date, time, and timezone info
- **Weather Information** - Real-time weather updates
- **Web Navigation** - Quick access to popular websites
- **System Commands** - Various utility functions

### 🎨 **Modern Interface**
- **Futuristic Design** - Cyberpunk-inspired UI with neon effects
- **Responsive Layout** - Works perfectly on all devices
- **Dynamic Animations** - Smooth transitions and visual feedback
- **Interactive Elements** - Engaging user experience

## 🚀 **Demo**

### **Voice Commands Examples:**
```
🗣️ "What's the weather like today?"
🗣️ "What time is it?"
🗣️ "Open YouTube"
🗣️ "Tell me about artificial intelligence"
🗣️ "What's today's date?"
```

## 🛠️ **Tech Stack**

| Technology | Purpose | Version |
|------------|---------|---------|
| ⚛️ **React** | Frontend Framework | 18.0+ |
| ⚡ **Vite** | Build Tool | 5.0+ |
| 🎨 **Tailwind CSS** | Styling | 3.0+ |
| 🤖 **Google Gemini AI** | AI Processing | Latest |
| 🎤 **Web Speech API** | Voice Recognition | Native |
| 🔊 **Speech Synthesis API** | Text-to-Speech | Native |
| 📱 **React Icons** | UI Icons | Latest |

## 📦 **Installation**

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API Key

### **Setup Steps**

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/chipi-ai-assistant.git
cd chipi-ai-assistant
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Configuration**
```bash
# Create .env file in root directory
touch .env

# Add your Gemini API key
echo "VITE_GEMINI_API_KEY=your_api_key_here" > .env
```

4. **Get Gemini API Key**
- Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
- Create a new API key
- Copy and paste into your `.env` file

5. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

6. **Open your browser**
```
Navigate to: http://localhost:5173
```

## 🎯 **Usage**

### **Basic Interaction**
1. Click the **"Click here"** button to start listening
2. Speak your question or command clearly
3. Wait for Chipi's response (both visual and audio)
4. Continue the conversation naturally

### **Supported Commands**

#### **📅 Date & Time**
```
"What's the date?"
"What time is it?"
"Show me current time"
"What's today?"
```

#### **🌤️ Weather**
```
"What's the weather?"
"How's the weather today?"
"Tell me the weather"
```

#### **🌐 Web Navigation**
```
"Open YouTube"
"Open Google"
"Open GitHub"
"Open Instagram"
"Open Facebook"
```

#### **💬 General Queries**
```
"Tell me about [topic]"
"Explain [concept]"
"What is [question]?"
"How do I [task]?"
```

## 🏗️ **Project Structure**

```
chipi-ai-assistant/
├── 📁 public/
│   ├── vite.svg
│   └── index.html
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── 📁 context/
│   │   │   └── UserContext.jsx
│   │   ├── ai.png
│   │   ├── aiVoice.gif
│   │   └── speak.gif
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── gemini.js
├── 📄 .env
├── 📄 package.json
├── 📄 vite.config.js
├── 📄 tailwind.config.js
└── 📄 README.md
```

## 🔧 **Configuration**

### **Environment Variables**
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### **Voice Settings**
```javascript
// Customize voice parameters in UserContext.jsx
const utterance = new SpeechSynthesisUtterance(text);
utterance.rate = 0.8;    // Speech speed (0.1 - 2.0)
utterance.pitch = 1.0;   // Voice pitch (0.0 - 2.0)
utterance.volume = 1.0;  // Volume level (0.0 - 1.0)
```

## 🌍 **Browser Compatibility**

| Browser | Speech Recognition | Text-to-Speech | Overall Support |
|---------|-------------------|-----------------|-----------------|
| ✅ **Chrome** | Full Support | Full Support | Recommended |
| ✅ **Edge** | Full Support | Full Support | Excellent |
| ⚠️ **Firefox** | Limited | Full Support | Partial |
| ⚠️ **Safari** | Limited | Full Support | Partial |

## 📱 **Responsive Design**

- **📱 Mobile Phones** - Optimized touch interface
- **📱 Tablets** - Adaptive layout and controls
- **💻 Laptops** - Full feature experience
- **🖥️ Desktop** - Enhanced visual effects

## 🔒 **Privacy & Security**

- **🔐 API Key Security** - Environment variable protection
- **🛡️ Data Privacy** - No conversation data stored
- **🔒 Secure Communication** - HTTPS-only API calls
- **👤 User Privacy** - Local processing where possible

## 🤝 **Contributing**

We welcome contributions! Here's how you can help:

### **🐛 Bug Reports**
- Use GitHub Issues
- Include detailed reproduction steps
- Provide browser and OS information

### **✨ Feature Requests**
- Describe the feature clearly
- Explain the use case
- Provide implementation suggestions

### **🔧 Pull Requests**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Google Gemini AI** for advanced language processing
- **React Team** for the amazing framework
- **Tailwind CSS** for beautiful styling utilities
- **Web Speech API** for voice capabilities
- **Vite** for lightning-fast development

## 📞 **Support**

- **📧 Email:** your.email@example.com
- **🐛 Issues:** [GitHub Issues](https://github.com/yourusername/chipi-ai-assistant/issues)
- **💬 Discussions:** [GitHub Discussions](https://github.com/yourusername/chipi-ai-assistant/discussions)

---

<div align="center">
  <p><strong>Made with ❤️ by [Your Name]</strong></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
