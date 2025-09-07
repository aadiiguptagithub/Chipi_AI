import React from 'react'
import { generateResponse } from '../../gemini.js';

export const dataContext = React.createContext();

function UserContext({ children }) {
  let [prompt, setPrompt] = React.useState("listening...");
  let [responses, setResponses] = React.useState(false);
  let [Speaking, setSpeaking] = React.useState(false);
  let [avatarState, setAvatarState] = React.useState('idle');

  React.useEffect(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.getVoices();
    }
  }, []);

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    return { date, time };
  };

  const speak = (text) => {
    if ('speechSynthesis' in window && text && text.trim()) {
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text.trim());
      
      const setVoice = () => {
        const voices = speechSynthesis.getVoices();
        const hasHindi = /[\u0900-\u097F]/.test(text);
        
        let preferredVoice;
        if (hasHindi) {
          preferredVoice = voices.find(v => 
            v.name.includes('हिन्दी') || 
            v.lang.includes('hi') ||
            v.name.toLowerCase().includes('hindi')
          );
        }
        
        if (!preferredVoice) {
          preferredVoice = voices.find(v => 
            v.lang.includes('en-US') || 
            v.lang.includes('en-GB') || 
            v.lang.includes('en')
          );
        }
        
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
      };

      if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener('voiceschanged', setVoice, { once: true });
      } else {
        setVoice();
      }

      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      utterance.onstart = () => setAvatarState('speaking');
      utterance.onend = () => setAvatarState('idle');
      utterance.onerror = () => setAvatarState('idle');

      speechSynthesis.speak(utterance);
    }
  };

  const getWeatherInfo = async (location = 'your location') => {
    const mockWeather = {
      temperature: Math.floor(Math.random() * 30) + 15,
      condition: ['sunny', 'cloudy', 'rainy', 'partly cloudy'][Math.floor(Math.random() * 4)],
      humidity: Math.floor(Math.random() * 40) + 30
    };
    
    return `The weather in ${location} is ${mockWeather.condition} with a temperature of ${mockWeather.temperature}°C and humidity of ${mockWeather.humidity}%.`;
  };

  const recognition = {
    start: () => {
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const rec = new SpeechRecognition();
        rec.continuous = false;
        rec.interimResults = false;
        rec.lang = 'en-US';
        
        rec.onresult = async (event) => {
          const transcript = event.results[0][0].transcript;
          setPrompt(transcript);
          setAvatarState('thinking');
          
          const commandResult = await takeCommand(transcript.toLowerCase());
          
          if (!commandResult) {
            try {
              const response = await generateResponse(transcript);
              const newText = response.replace(/\*\*/g, '').replace(/\*/g, '').replace(/google/gi, "Aditya Gupta");
              
              setPrompt(newText);
              setResponses(true);
              speak(newText);
              
              setTimeout(() => setSpeaking(false), 2000);
            } catch (error) {
              const errorMsg = "Sorry, I couldn't process your request.";
              setPrompt(errorMsg);
              speak(errorMsg);
              setTimeout(() => setSpeaking(false), 2000);
            }
          }
        };
        
        rec.onstart = () => setAvatarState('listening');
        rec.onerror = () => setAvatarState('idle');
        rec.onend = () => {};
        
        rec.start();
      }
    }
  };

  async function takeCommand(transcript) {
    // Name questions
    if (transcript.includes("what is your name") || 
        transcript.includes("what's your name") || 
        transcript.includes("who are you") ||
        transcript.includes("tumhara naam kya hai") ||
        transcript.includes("aapka naam kya hai") ||
        transcript.includes("your name") ||
        transcript.includes("naam kya hai")) {
      const message = "My name is Chipi. I'm your virtual AI assistant created by Aditya Gupta.";
      setPrompt(message);
      setResponses(true);
      speak(message);
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    }
    
    if (transcript.includes("weather") || transcript.includes("temperature")) {
      const weatherInfo = await getWeatherInfo();
      setPrompt(weatherInfo);
      setResponses(true);
      speak(weatherInfo);
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    }
    else if (transcript.includes("date") || transcript.includes("today")) {
      const { date } = getCurrentDateTime();
      const message = `Today is ${date}`;
      setPrompt(message);
      setResponses(true);
      speak(message);
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    } else if (transcript.includes("time") || transcript.includes("clock")) {
      const { time } = getCurrentDateTime();
      const message = `Current time is ${time}`;
      setPrompt(message);
      setResponses(true);
      speak(message);
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    } else if (transcript.includes("date and time") || transcript.includes("current date and time")) {
      const { date, time } = getCurrentDateTime();
      const message = `Today is ${date} and current time is ${time}`;
      setPrompt(message);
      setResponses(true);
      speak(message);
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    }
    else if (transcript.includes("open") && transcript.includes("youtube")) {
      window.open("https://www.youtube.com", "_blank");
      setPrompt("Opening YouTube...");
      setResponses(true);
      speak("Opening YouTube...");
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    } else if (transcript.includes("open") && transcript.includes("google")) {
      window.open("https://www.google.com", "_blank");
      setPrompt("Opening Google...");
      setResponses(true);
      speak("Opening Google...");
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    } else if (transcript.includes("open") && transcript.includes("bing")) {
      window.open("https://www.bing.com", "_blank");
      setPrompt("Opening Bing...");
      setResponses(true);
      speak("Opening Bing...");
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    } else if (transcript.includes("open") && transcript.includes("github")) {
      window.open("https://www.github.com", "_blank");
      setPrompt("Opening GitHub...");
      setResponses(true);
      speak("Opening GitHub...");
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    } else if (transcript.includes("open") && transcript.includes("twitter")) {
      window.open("https://www.twitter.com", "_blank");
      setPrompt("Opening Twitter...");
      setResponses(true);
      speak("Opening Twitter...");
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    } else if (transcript.includes("open") && transcript.includes("instagram")) {
      window.open("https://www.instagram.com", "_blank");
      setPrompt("Opening Instagram...");
      setResponses(true);
      speak("Opening Instagram...");
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    } else if (transcript.includes("open") && transcript.includes("facebook")) {
      window.open("https://www.facebook.com", "_blank");
      setPrompt("Opening Facebook...");
      setResponses(true);
      speak("Opening Facebook...");
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    } else if (transcript.includes("open") && transcript.includes("linkedin")) {
      window.open("https://www.linkedin.com", "_blank");
      setPrompt("Opening LinkedIn...");
      setResponses(true);
      speak("Opening LinkedIn...");
      setTimeout(() => setSpeaking(false), 2000);
      return true;
    }
    
    return false;
  } 

let value = {
  recognition,
  speak,
  prompt,
  setPrompt,
  responses,
  setResponses,
  Speaking,
  setSpeaking,
  avatarState,
  setAvatarState
};

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext