
import React, { useContext, useEffect, useState } from 'react';
import { dataContext } from './assets/context/UserContext.jsx';
import "./App.css";
import va from "./assets/ai.png";
import { FaMicrophone } from 'react-icons/fa';
import { CiMicrophoneOn } from 'react-icons/ci';
import speakimg from "./assets/speak.gif";
import aigif from "./assets/aiVoice.gif";

// Error Boundary Component
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const handleError = (errorEvent) => {
      console.error('Application Error:', errorEvent.error);
      setError(errorEvent.error?.message || 'Unknown error occurred');
      setHasError(true);
    };
    
    const handleUnhandledRejection = (event) => {
      console.error('Unhandled Promise Rejection:', event.reason);
      setError(event.reason?.message || 'Promise rejection occurred');
      setHasError(true);
    };
    
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
  
  if (hasError) {
    return (
      <div className="app-bg flex flex-col items-center justify-center min-h-screen text-white">
        <div className="text-center max-w-md mx-auto p-6">
          <h2 className="text-3xl mb-4 text-red-400">🚫 Oops! Something went wrong</h2>
          <p className="text-gray-300 mb-6">
            {error || 'An unexpected error occurred while running Chipi AI.'}
          </p>
          <div className="space-y-3">
            <button 
              onClick={() => window.location.reload()} 
              className="glow-btn px-6 py-3 w-full"
            >
              🔄 Reload App
            </button>
            <button 
              onClick={() => {
                setHasError(false);
                setError(null);
              }} 
              className="glow-btn px-6 py-3 w-full opacity-70 hover:opacity-100"
            >
              ↩️ Try Again
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            If the problem persists, please check your internet connection and try again.
          </p>
        </div>
      </div>
    );
  }
  
  return children;
};

export default function App() {
  let { recognition, Speaking, setSpeaking, prompt, responses, setPrompt, setResponses, avatarState, speak } = useContext(dataContext);

  // Browser compatibility check
  useEffect(() => {
    const checkBrowserSupport = () => {
      const isSupported = {
        speechRecognition: 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window,
        speechSynthesis: 'speechSynthesis' in window,
        https: window.location.protocol === 'https:' || window.location.hostname === 'localhost'
      };
      
      console.log('🔍 Browser Support Check:', isSupported);
      
      if (!isSupported.speechRecognition) {
        console.warn('⚠️ Speech Recognition not supported in this browser');
      }
      
      if (!isSupported.speechSynthesis) {
        console.warn('⚠️ Speech Synthesis not supported in this browser');
      }
      
      if (!isSupported.https && window.location.hostname !== 'localhost') {
        console.warn('⚠️ HTTPS required for speech features in production');
      }
    };
    
    checkBrowserSupport();
  }, []);

  // Test speech function for debugging
  const testSpeech = () => {
    console.log('🔊 Testing speech synthesis...');
    speak("Hello! This is a test message from Chipi AI. Can you hear me clearly?");
  };

  return (
    <ErrorBoundary>
      <div className="app-bg">
        <div className="avatar-container mb-4">
          <img 
            src={va} 
            alt="AI Avatar" 
            className={`avatar-img floating ${avatarState}`} 
          />
          {avatarState !== 'idle' && (
            <div className={`status-indicator ${avatarState}`}>
              {avatarState === 'listening' && '🎤 Listening...'}
              {avatarState === 'thinking' && '🤔 Thinking...'}
              {avatarState === 'speaking' && '🗣️ Speaking...'}
            </div>
          )}
        </div>
        <h1 className="neon-text text-center mb-4 text-xl md:text-2xl lg:text-3xl">
        I'm Chipi,<span className="block md:inline"> Your Advanced Virtual Assistant</span>
        </h1>
        
        {/* Test Speech Button - Remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <button 
            className="glow-btn mb-2 px-4 py-2 text-sm" 
            onClick={testSpeech}
            style={{ fontSize: '0.8rem', marginBottom: '10px' }}
          >
            🔊 Test Speech
          </button>
        )}
        
        {!Speaking ? (
          <button 
            className="glow-btn flex items-center justify-center gap-3 px-8 py-3" 
            onClick={() => {
              recognition.start();
              setSpeaking(true);
              setResponses(false);
            }}
          >
            Click here
            <CiMicrophoneOn className="mic-icon" size="1.2em" />
          </button>
        ) : (
          <div className='response'>
            {!responses ? (
              <img src={speakimg} alt="Listening..." id='speak' />
            ) : (
              <img src={aigif} alt="AI Speaking..." className='aigif' />
            )}
            <p>{prompt}</p>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
