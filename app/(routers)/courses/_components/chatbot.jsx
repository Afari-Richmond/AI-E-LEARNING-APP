import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setInputText('');
    // Add logic here to process the input text or send it to a server-side chatbot service
  };

  // Scroll to the bottom of messages whenever component updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className=" flex flex-col min-h-96 p-5 bg-white rounded-lg shadow mt-11 ml-6">
      <div className="flex-1 mb-4 overflow-y-auto">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Chat with Learn Mate AI</h2>
        <div className="border border-gray-300 rounded-lg p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex justify-${message.isUser ? 'end' : 'start'} mb-2`}
            >
              <div
                className={`bg-${message.isUser ? 'cyan-600' : 'gray-200'} text-white rounded-lg p-2 max-w-[75%]`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          value={inputText}
          onChange={handleInputTextChange}
          className="flex-1 p-2 border border-gray-300 rounded-l-lg outline-none"
          placeholder="I am Learn Mate AI, how can I help you today?"
        />
        <button
          onClick={handleSendMessage}
          className="bg-cyan-600 text-white px-4 py-2 rounded-r-lg hover:bg-cyan-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
