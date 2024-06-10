import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatBot/config";
import MessageParser from "../ChatBot/MessageParser";
import ActionProvider from "../ChatBot/ActionProvider";
import "./ChatAssistant.css";
import chatbotLogo from "../assets/chatbotLogo.jpeg";
import chatbotLogo1 from "../assets/logo1.png";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(chatbotLogo);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <div className='chatbot'>
      {!isOpen && (

    <div className="chatbot">
      <img
        className="Logo"
        src={chatbotLogo}
        alt="Logo"
        onClick={toggleChatbot}
        onMouseEnter={() => (document.querySelector(".Logo").src = chatbotLogo1)}
        onMouseLeave={() => (document.querySelector(".Logo").src = chatbotLogo)}
      />
      {isOpen && (
        <div className={`chatbot-wrapper ${isOpen ? "chatbot-animation" : "chatbot-close-animation"}`}>
          <button className="close-button" onClick={closeChatbot}>
            X
          </button>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
    <div className='chatbot'>
      {!isOpen && ( // Conditionally render the logo if the chatbot is closed
        <img
          className='Logo'
          src={logoSrc}
          alt='Logo'
          onClick={toggleChatbot}
          onMouseEnter={() => setLogoSrc(chatbotLogo1)}
          onMouseLeave={() => setLogoSrc(chatbotLogo)}
        />
      )}
      {isOpen && (
        <div className='chatbot-wrapper'>
          <button className='close-button' onClick={closeChatbot}>
            X
          </button>
          <div className='chatbot-animation'>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>

        </div>
      )}
    </div>
  );
};

export default ChatAssistant;