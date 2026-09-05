"use client";

import * as React from "react";
import Image from "next/image";
import {
  Bot,
  X,
  Send,
  Sparkles,
  RotateCcw,
  User,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { profileData } from "@/data/profile";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  time: string;
}

const SUGGESTED_PROMPTS = [
  { label: "About MediTrack 🏥", query: "Tell me about the MediTrack project." },
  { label: "Skills & Tech 💻", query: "What are Satyajit's top technical skills?" },
  { label: "Education 🎓", query: "What is his educational background?" },
  { label: "Resume 📄", query: "Can I see Satyajit's resume?" },
  { label: "Contact Info 📬", query: "How can I contact Satyajit?" },
];

export function AIChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: `Hi there! 👋 I am **SD AI**, Satyajit's personal portfolio assistant.\n\nAsk me anything about his **health-tech projects** (like MediTrack), **programming skills**, **pharmacy education**, or **resume**!`,
      time: "Just now",
    },
  ]);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = async (userQuery?: string) => {
    const textToSend = (userQuery || input).trim();
    if (!textToSend || loading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });

      if (!res.ok) throw new Error("Network response error");

      const data = await res.json();
      const aiReply = data.reply || "I am having trouble answering right now. Please try asking again!";

      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: aiReply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        sender: "ai",
        text: "I couldn't connect to the server right now. You can reach out directly via [Contact](/contact) or email Satyajit at " + profileData.email + "!",
        time: "Just now",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "ai",
        text: `Chat reset! 👋 How can I help you learn more about Satyajit today?`,
        time: "Just now",
      },
    ]);
  };

  // Helper to format basic markdown (bold, links, bullet points, headers)
  const renderFormattedText = (content: string) => {
    const lines = content.split("\n");

    return lines.map((line, lIdx) => {
      // Header ###
      if (line.startsWith("### ")) {
        return (
          <h4 key={lIdx} className="font-semibold text-text-primary mt-2 mb-1 text-sm font-clash">
            {line.replace("### ", "")}
          </h4>
        );
      }

      // Bullet points
      const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("• ");
      const formattedLine = isBullet ? line.trim().replace(/^[-•]\s*/, "") : line;

      // Parse bold **text** and [link](url)
      const parts = formattedLine.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

      const parsed = parts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="font-semibold text-text-primary">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
          const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
          if (match) {
            const [, linkText, linkUrl] = match;
            return (
              <a
                key={pIdx}
                href={linkUrl}
                target={linkUrl.startsWith("http") || linkUrl.endsWith(".pdf") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-highlight hover:underline font-medium"
              >
                {linkText}
                <ArrowUpRight className="h-3 w-3 inline" />
              </a>
            );
          }
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={lIdx} className="flex items-start gap-1.5 ml-1 my-0.5 text-xs sm:text-sm">
            <span className="text-highlight mt-1">•</span>
            <div className="flex-1">{parsed}</div>
          </div>
        );
      }

      return (
        <p key={lIdx} className={line === "" ? "h-2" : "my-0.5 text-xs sm:text-sm leading-relaxed"}>
          {parsed}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Bottom-Right Toggle Button */}
      <div className="fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close AI Chat" : "Open SD AI Assistant"}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-bg-700 bg-bg-800 text-text-primary shadow-2xl transition-all duration-300 hover:scale-110 hover:border-highlight/50 hover:bg-bg-700 active:scale-95"
        >
          {/* Pulsing Online Status Indicator */}
          <span className="absolute right-1 top-1 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-highlight opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-background bg-highlight" />
          </span>

          {isOpen ? (
            <X className="h-6 w-6 text-text-primary transition-transform duration-200 group-hover:rotate-90" />
          ) : (
            <div className="flex items-center justify-center">
              <Bot className="h-6 w-6 text-highlight transition-transform group-hover:scale-110" />
            </div>
          )}
        </button>
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-36 right-4 z-50 flex h-[530px] max-h-[78vh] w-[92vw] flex-col overflow-hidden rounded-3xl border border-bg-700/80 bg-bg-900/95 shadow-2xl backdrop-blur-2xl sm:bottom-24 sm:right-6 sm:w-[390px] md:w-[410px]">
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-bg-700/80 bg-bg-800/80 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-bg-600 bg-bg-700 shrink-0">
                <Image
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-clash text-sm font-semibold text-text-primary">
                    SD AI Assistant
                  </h3>
                  <span className="rounded-full bg-highlight/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-highlight">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-text-secondary">
                  Pharmacy • Health-Tech • Web
                </p>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                title="Reset conversation"
                aria-label="Reset chat"
                className="rounded-full p-1.5 text-text-secondary transition-colors hover:bg-bg-700 hover:text-text-primary"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="rounded-full p-1.5 text-text-secondary transition-colors hover:bg-bg-700 hover:text-text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Thread */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-satoshi text-text-primary">
            {messages.map((msg) => {
              const isUser = msg.sender === "user";

              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Sender Avatar */}
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      isUser
                        ? "bg-primary text-primary-foreground"
                        : "border border-bg-700 bg-bg-800 text-highlight"
                    }`}
                  >
                    {isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm ${
                      isUser
                        ? "bg-primary text-primary-foreground font-medium rounded-tr-none shadow-md"
                        : "border border-bg-700/80 bg-bg-800/90 text-text-secondary rounded-tl-none shadow-sm"
                    }`}
                  >
                    {renderFormattedText(msg.text)}
                    <span
                      className={`block mt-1 text-[10px] ${
                        isUser ? "text-primary-foreground/70 text-right" : "text-text-secondary/60"
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {loading && (
              <div className="flex items-center gap-2 text-text-secondary">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-bg-700 bg-bg-800 text-highlight">
                  <Bot className="h-3.5 w-3.5 animate-spin" />
                </div>
                <div className="flex items-center gap-1 rounded-full border border-bg-700 bg-bg-800 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-highlight" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-highlight [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-highlight [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Prompt Chips */}
          <div className="border-t border-bg-700/60 bg-bg-900/60 px-3 py-2">
            <div className="flex gap-1.5 overflow-x-auto no-visible-scrollbar pb-1">
              {SUGGESTED_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(prompt.query)}
                  disabled={loading}
                  className="whitespace-nowrap rounded-full border border-bg-700 bg-bg-800/90 px-3 py-1 text-[11px] font-medium text-text-secondary transition-all hover:border-highlight/50 hover:bg-bg-700 hover:text-text-primary disabled:opacity-50"
                >
                  {prompt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input & Send Controls */}
          <div className="border-t border-bg-700/80 bg-bg-900 p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask SD AI anything..."
                disabled={loading}
                className="flex-1 rounded-full border border-bg-700 bg-bg-800 px-4 py-2 text-xs sm:text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-highlight focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
