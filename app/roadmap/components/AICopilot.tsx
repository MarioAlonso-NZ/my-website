"use client"
import { useState, useRef, useEffect } from "react";

export default function AIcopilot() {
    // 1. State to control if the chat window is open or closed
  const [isOpen, setIsOpen] = useState(false);
  
  // 2. State for the input field
  const [input, setInput] = useState("");
  
  // 3. State to store the chat history (array of message objects)
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I am your AI Copilot. Ready to help you navigate the universe." }
  ]);

  // 4. Reference to auto-scroll to the bottom of the chat
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
    const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the page from reloading
    
    if (!input.trim()) return; // Don't send empty messages

    // 1. Add the user's message to the chat
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    
    // 2. Clear the input field
    setInput("");

    // 3. Simulate a bot response (We will replace this with an API call in Phase 2)
    setTimeout(() => {
      const botResponse = { 
        role: "bot", 
        text: `I received your question: "${userMessage.text}". In Phase 2, I will answer this using your RAG backend!` 
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000); // 1 second delay to simulate thinking
   };

    return (
    <>
      {/* The Floating Bot Button */}
      <div 
        className="fixed bottom-8 right-8 cursor-pointer animate-[bounce_2s_infinite] z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.6)] border-2 border-blue-300 hover:scale-110 transition-transform">
          <span className="text-3xl">🤖</span>
        </div>
      </div>

      {/* The Chat Window (Only renders if isOpen is true) */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-80 h-96 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl flex flex-col overflow-hidden z-50">
          
          {/* Header */}
          <div className="bg-blue-600 p-3 text-white font-bold flex justify-between items-center">
            <span>AI Copilot</span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-gray-300 text-xl font-bold leading-none"
            >
              &times;
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-3 overflow-y-auto text-sm text-gray-300 flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`p-2 rounded max-w-[80%] ${
                  msg.role === "bot" 
                    ? "bg-gray-800 self-start" 
                    : "bg-blue-900 self-end text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {/* Invisible div to help us auto-scroll */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-2 border-t border-gray-700 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-gray-800 text-white p-2 rounded outline-none text-sm border border-gray-600 focus:border-blue-500"
              placeholder="Ask me anything..." 
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-500 px-4 rounded text-sm font-bold transition-colors"
            >
              Send
            </button>
          </form>
          
        </div>
      )}
    </>
  );
}