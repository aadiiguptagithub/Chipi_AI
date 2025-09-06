<# 🤖 Chipi AI - Advanced Virtual Assistant

<div align="center">
  <img src="src/assets/ai.png" alt="Chipi AI" width="200" height="200" style="border-radius: 50%;">
  
  [![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan.svg)](https://tailwindcss.com/)
  [![Gemini AI](https://img.shields.io/badge/Gemini-AI-green.svg)](https://ai.google.dev/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aadiiguptagithub/Chipi-virtual-assistant)
</div>

## 🌟 **Live Demo**

🚀 **[Try Chipi AI Live](https://your-deployed-url.vercel.app)**

## 🌟 **Overview**

Chipi is a cutting-edge AI-powered virtual assistant that combines modern web technologies with advanced artificial intelligence. With its futuristic cyberpunk interface and intelligent voice interactions, Chipi provides a seamless user experience for various tasks and queries.

## ✨ **Features**

### 🎤 **Advanced Voice Interaction**
- **Real-time Speech Recognition** - Natural voice input processing
- **High-Quality Text-to-Speech** - Crystal clear AI voice responses
- **Conversation Memory** - Maintains context across interactions
- **Multi-language Support** - Supports Hindi and English

### 🧠 **AI Intelligence**
- **Google Gemini AI Integration** - Advanced language understanding
- **Smart Command Processing** - Intelligent task execution
- **Context-Aware Responses** - Relevant and personalized answers
- **Error Resilience** - Graceful error handling and recovery

### 🌐 **Smart Commands**
- **📅 Date & Time Queries** - Current date, time, and timezone info
- **🌤️ Weather Information** - Real-time weather updates
- **🌐 Web Navigation** - Quick access to popular websites
- **💬 General AI Chat** - Powered by Google Gemini AI

### 🎨 **Futuristic Interface**
- **Cyberpunk Design** - Neon effects and futuristic aesthetics
- **Fully Responsive** - Works perfectly on all devices
- **Dynamic Animations** - Smooth transitions and visual feedback
- **Visual State Indicators** - Real-time status updates

### 🛡️ **Production Ready**
- **Error Boundaries** - Graceful error handling
- **Performance Optimized** - Fast loading and smooth interactions
- **Security Headers** - Enhanced security configuration
- **Environment Management** - Secure API key handling

## 🚀 **Demo Commands**

### **Voice Commands Examples:**
```
🗣️ "What's the weather like today?"
🗣️ "What time is it?"
🗣️ "What's today's date?"
🗣️ "Open YouTube"
🗣️ "Open GitHub"
🗣️ "Tell me about artificial intelligence"
🗣️ "How does machine learning work?"
🗣️ "What is React?"
```

## 🛠️ **Tech Stack**

| Technology | Purpose | Version |
|------------|---------|---------|
| ⚛️ **React** | Frontend Framework | 19.1+ |
| ⚡ **Vite** | Build Tool & Dev Server | 7.1+ |
| 🎨 **Tailwind CSS** | Styling Framework | 4.1+ |
| 🤖 **Google Gemini AI** | AI Processing | Latest |
| 🎤 **Web Speech API** | Voice Recognition | Native |
| 🔊 **Speech Synthesis API** | Text-to-Speech | Native |
| 📱 **React Icons** | UI Icons | 5.5+ |
| 🚀 **Vercel** | Deployment Platform | Latest |

## 📦 **Quick Start**

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API Key

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/aadiiguptagithub/Chipi-virtual-assistant.git
cd Chipi-virtual-assistant
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
# Create .env file
cp .env.example .env

# Add your Gemini API key to .env
VITE_GEMINI_API_KEY=your_api_key_here
```

4. **Get Gemini API Key**
- Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
- Create a new API key
- Copy and paste into your `.env` file

5. **Start development server**
```bash
npm run dev
```

6. **Open in browser**
```
http://localhost:3000
```

## 🚀 **Deployment**

### **Deploy to Vercel (Recommended)**

1. **Quick Deploy**
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aadiiguptagithub/Chipi-virtual-assistant)

2. **Manual Deployment**
```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

3. **Environment Variables**
   In Vercel Dashboard → Settings → Environment Variables:
   ```
   VITE_GEMINI_API_KEY = your_gemini_api_key
   ```

### **Other Platforms**
- **Netlify**: Connect GitHub repo and set build command to `npm run build`
- **GitHub Pages**: Use `gh-pages` branch deployment
- **Self-hosted**: Use `npm run build` and serve `dist` folder

## 🎯 **Usage Guide**

### **Basic Interaction**
1. 🖱️ Click the **"Click here"** button to start listening
2. 🎤 Speak your question or command clearly
3. ⏳ Wait for Chipi's response (visual and audio)
4. 💬 Continue the conversation naturally

### **Supported Commands**

#### **📅 Date & Time**
```
"What's the date?"
"What time is it?"
"Show me current time"
"What's today?"
"Date and time?"
```

#### **🌤️ Weather**
```
"What's the weather?"
"How's the weather today?"
"Tell me the weather"
"Weather update?"
```

#### **🌐 Web Navigation**
```
"Open YouTube"      → Opens youtube.com
"Open Google"       → Opens google.com
"Open GitHub"       → Opens github.com
"Open Instagram"    → Opens instagram.com
"Open Facebook"     → Opens facebook.com
"Open LinkedIn"     → Opens linkedin.com
"Open Twitter"      → Opens twitter.com
"Open Bing"         → Opens bing.com
```

#### **💬 AI Chat**
```
"Tell me about [topic]"
"Explain [concept]"
"What is [question]?"
"How do I [task]?"
"Help me with [problem]"
```

## 🏗️ **Project Structure**

```
chipi-virtual-assistant/
├── 📁 public/
│   └── vite.svg
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── 📁 context/
│   │   │   └── UserContext.jsx     # Global state management
│   │   ├── ai.png                  # Avatar image
│   │   ├── aiVoice.gif            # Speaking animation
│   │   ├── speak.gif              # Listening animation
│   │   └── logo.png               # App logo
│   ├── App.jsx                     # Main application component
│   ├── App.css                     # Styling and animations
│   ├── main.jsx                    # Application entry point
│   ├── index.css                   # Global styles
│   └── gemini.js                   # AI integration
├── 📄 .env                         # Environment variables
├── 📄 .gitignore                   # Git ignore rules
├── 📄 package.json                 # Dependencies and scripts
├── 📄 vite.config.js              # Vite configuration
├── 📄 vercel.json                  # Vercel deployment config
├── 📄 tailwind.config.js          # Tailwind configuration
├── 📄 eslint.config.js            # ESLint configuration
└── 📄 README.md                    # Project documentation
```

## 🔧 **Configuration**

### **Environment Variables**
```env
# Required
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Optional (for development)
NODE_ENV=development
```

### **Voice Customization**
```javascript
// In UserContext.jsx - customize TTS settings
utterance.rate = 0.8;      // Speech speed (0.1 - 2.0)
utterance.pitch = 1.0;     // Voice pitch (0.0 - 2.0)
utterance.volume = 1.0;    // Volume level (0.0 - 1.0)
```

### **AI Configuration**
```javascript
// In gemini.js - customize AI behavior
const generationConfig = {
  temperature: 0.7,        // Creativity (0.0 - 1.0)
  topP: 0.8,              // Nucleus sampling
  topK: 20,               // Top-k sampling
  maxOutputTokens: 150,   // Response length
};
```

## 🌍 **Browser Compatibility**

| Browser | Speech Recognition | Text-to-Speech | Overall Support |
|---------|-------------------|-----------------|-----------------|
| ✅ **Chrome** | Full Support | Full Support | ⭐ Recommended |
| ✅ **Edge** | Full Support | Full Support | ⭐ Excellent |
| ⚠️ **Firefox** | Limited | Full Support | 🔶 Partial |
| ⚠️ **Safari** | Limited | Full Support | 🔶 Partial |
| ❌ **IE** | Not Supported | Not Supported | ❌ Not Supported |

**Recommendation**: Use Chrome or Edge for the best experience.

## 📱 **Responsive Design**

- **📱 Mobile** (320px+) - Touch-optimized interface
- **📱 Tablet** (768px+) - Adaptive layout
- **💻 Laptop** (1024px+) - Full feature experience
- **🖥️ Desktop** (1200px+) - Enhanced visual effects

## 🔒 **Security & Privacy**

### **Security Features**
- 🔐 **Secure API Keys** - Environment variable protection
- 🛡️ **Security Headers** - XSS and clickjacking protection
- 🔒 **HTTPS Enforced** - Secure communication only
- 🚫 **No Data Storage** - Conversations not stored

### **Privacy**
- 👤 **Local Processing** - Speech processing in browser
- 🔒 **No Tracking** - No user behavior tracking
- 🛡️ **API Security** - Direct API calls, no proxy servers
- 🚫 **No Cookies** - No unnecessary data collection

## 🔧 **Development**

### **Development Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run check        # Lint + Build check
```

### **Adding New Features**
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Make changes and test thoroughly
4. Commit changes: `git commit -m 'Add amazing feature'`
5. Push to branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 🐛 **Troubleshooting**

### **Common Issues**

#### **🔇 No Voice Output**
```bash
# Check browser console for errors
# Ensure HTTPS is enabled
# Try Chrome/Edge browser
# Check system volume
```

#### **🎤 Microphone Not Working**
```bash
# Grant microphone permissions
# Check browser privacy settings
# Ensure HTTPS is enabled
# Try refreshing the page
```

#### **🤖 AI Not Responding**
```bash
# Check API key configuration
# Verify internet connection
# Check browser console for errors
# Try refreshing the page
```

#### **🚀 Deployment Issues**
```bash
# Verify environment variables in Vercel
# Check build logs
# Ensure all dependencies are listed
# Verify API key is correct
```

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. **🍴 Fork** the repository
2. **🌟 Star** the repository (optional but appreciated!)
3. **📋 Create** an issue for bugs or feature requests
4. **🔧 Submit** pull requests for improvements
5. **📖 Update** documentation as needed

### **Development Guidelines**
- Follow existing code style
- Add comments for complex logic
- Test on multiple browsers
- Update README for new features

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **🤖 Google Gemini AI** - For powerful language processing
- **⚛️ React Team** - For the amazing framework
- **🎨 Tailwind CSS** - For beautiful utility-first styling
- **⚡ Vite** - For lightning-fast development
- **🌐 Web Speech API** - For voice capabilities
- **🚀 Vercel** - For seamless deployment

## 👨‍💻 **Author**

**Aditya Gupta**
- 📧 Email: aadityagupta0616@gmail.com
- 🐙 GitHub: [@aadiiguptagithub](https://github.com/aadiiguptagithub)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/yourusername)

## 📞 **Support**

- **🐛 Bug Reports**: [GitHub Issues](https://github.com/aadiiguptagithub/Chipi-virtual-assistant/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/aadiiguptagithub/Chipi-virtual-assistant/discussions)
- **📧 Email Support**: aadityagupta0616@gmail.com
- **⭐ Feature Requests**: Open an issue with the enhancement label

## 🌟 **Show Your Support**

If you find this project helpful:

- ⭐ **Star** this repository
- 🍴 **Fork** it for your own use
- 📢 **Share** it with others
- 🐛 **Report** bugs you find
- 💡 **Suggest** new features

---

<div align="center">
  <p><strong>Made with ❤️ and ☕ by Aditya Gupta</strong></p>
  <p>🚀 <em>Building the future of AI interaction, one voice at a time</em> 🚀</p>
  
  [![Follow on GitHub](https://img.shields.io/github/followers/aadiiguptagithub?style=social)](https://github.com/aadiiguptagithub)
  [![Star this repo](https://img.shields.io/github/stars/aadiiguptagithub/Chipi-virtual-assistant?style=social)](https://github.com/aadiiguptagithub/Chipi-virtual-assistant)
</div>EAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
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
>>>>>>> 2fff93a5d811ef1c7e71183c01ef8e6ac3d5895c
