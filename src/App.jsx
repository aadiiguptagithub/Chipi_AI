
import React, { useContext } from 'react';
import { dataContext } from './assets/context/UserContext.jsx';
import "./App.css";
import va from "./assets/ai.png";
import { FaMicrophone } from 'react-icons/fa';
import { CiMicrophoneOn } from 'react-icons/ci';
import speakimg from "./assets/speak.gif";
import aigif from "./assets/aiVoice.gif";

export default function App() {
  let { recognition, Speaking, setSpeaking, prompt, responses, setPrompt, setResponses, avatarState } = useContext(dataContext);

  return (
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
            <img src={speakimg} alt="" id='speak' />
          ) : (
            <img src={aigif} alt="" className='aigif' />
          )}
          <p>{prompt}</p>
        </div>
      )}
    </div>
  );
}
