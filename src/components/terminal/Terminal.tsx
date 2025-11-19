"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Terminal as TerminalIcon, Loader2, Trash2 } from "lucide-react";
import { ChatMessage } from "@/types";
import { sendMessageToGemini } from "@/lib/services/gemini";

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init",
      role: "system",
      text: "Neural Link Established. I am Joshua's AI Assistant. Ask me anything about his experience, skills, or projects.",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "system",
        text: "Error: Connection interrupted. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      // Keep focus on input
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const clearTerminal = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: "system",
        text: "Terminal cleared. Memory flushed.",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-sm">
      {/* Terminal Header */}
      <div className="bg-slate-900 p-3 border-b border-slate-800 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-2 text-emerald-500">
          <TerminalIcon className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest font-bold">
            Neural_Uplink_v2.5
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <button 
            onClick={clearTerminal}
            className="text-slate-500 hover:text-red-400 transition-colors"
            title="Clear Terminal"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role !== "user" && (
              <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                msg.role === "system" ? "bg-amber-500/10 text-amber-500" : "bg-emerald-500/10 text-emerald-500"
              }`}>
                <span className="text-[10px] font-bold">
                  {msg.role === "system" ? "SYS" : "AI"}
                </span>
              </div>
            )}
            
            <div
              className={`max-w-[85%] p-3 rounded-lg text-xs md:text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-slate-800 text-slate-200 border border-slate-700 rounded-tr-none"
                  : msg.role === "system"
                  ? "bg-amber-950/20 text-amber-400 border border-amber-500/20 font-mono"
                  : "bg-emerald-950/20 text-emerald-400 border border-emerald-500/20 rounded-tl-none"
              }`}
            >
              {msg.text}
              <div className="mt-1 text-[9px] opacity-40 uppercase tracking-wider text-right">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>

            {msg.role === "user" && (
              <div className="w-6 h-6 rounded bg-slate-800 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[10px] font-bold">YOU</span>
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold">AI</span>
            </div>
            <div className="bg-emerald-950/20 text-emerald-400 border border-emerald-500/20 p-3 rounded-lg rounded-tl-none flex items-center gap-2">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span className="text-xs animate-pulse">Processing query...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-slate-900 border-t border-slate-800 shrink-0">
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 focus-within:border-emerald-500/50 focus-within:shadow-[0_0_10px_rgba(16,185,129,0.1)] transition-all"
        >
          <span className="text-emerald-500 animate-pulse">➜</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter command or query..."
            className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder:text-slate-600 text-sm font-mono"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="text-slate-500 hover:text-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Terminal;
