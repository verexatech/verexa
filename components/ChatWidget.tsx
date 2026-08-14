"use client";

import { useState, useRef, useEffect, memo } from "react";
import { useChat } from "ai/react";
import { X, SendHorizonal, Bot, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "./ui/button";

const MarkdownContent = memo(function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="chat-markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 space-y-1">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {children}
            </a>
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className;
            return isInline ? (
              <code className="bg-white/5 border border-white/10 rounded px-1.5 py-0.5 text-xs font-mono" {...props}>
                {children}
              </code>
            ) : (
              <code className={cn("block bg-white/5 border border-white/10 rounded-lg p-3 text-xs font-mono overflow-x-auto mb-2", className)} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => <pre className="mb-2 last:mb-0">{children}</pre>,
          h1: ({ children }) => <h1 className="text-base font-bold mb-2 font-heading">{children}</h1>,
          h2: ({ children }) => <h2 className="text-sm font-bold mb-1.5 font-heading">{children}</h2>,
          h3: ({ children }) => <h3 className="text-sm font-semibold mb-1 font-heading">{children}</h3>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-primary/50 pl-3 italic opacity-80 mb-2">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="border-white/10 my-2" />,
          table: ({ children }) => (
            <div className="overflow-x-auto mb-2">
              <table className="min-w-full text-xs border-collapse">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-white/10 px-2 py-1 bg-white/5 font-semibold text-left">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border border-white/10 px-2 py-1">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
});

const SUGGESTED_QUERIES = [
  "What services do you offer?",
  "What industries do you serve?",
  "How can I contact you?"
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowBubble(false);
  };

  // Show greeting bubble after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-6 sm:right-6">
      {/* Chat Window */}
      {isOpen && (
        <div className="relative mb-4 flex h-[min(540px,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-[420px] flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-background/80 shadow-[0_8px_60px_-12px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-[200px] h-[200px] bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-[150px] h-[150px] bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

          {/* Top Border Highlight — matches service cards */}
          <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="font-heading font-medium text-sm tracking-wide bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Verexa Assistant
                </h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                  <p className="text-[11px] text-muted-foreground">Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 min-h-0 overflow-y-auto px-4 py-4 relative z-10 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
          >
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 m-0">
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                    <Bot className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-medium bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                      Hi! I&apos;m the Verexa Assistant
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      How can I help you today?
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 w-full max-w-[85%]">
                  {SUGGESTED_QUERIES.map((query) => (
                    <button
                      key={query}
                      onClick={() => append({ role: 'user', content: query })}
                      className="text-xs text-left text-muted-foreground hover:text-foreground p-3 rounded-xl liquid-glass-hover transition-all duration-300 border border-white/[0.06] hover:border-white/15 group"
                    >
                      <span className="group-hover:translate-x-0.5 inline-block transition-transform duration-300">
                        {query}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={cn(
                      "flex w-fit max-w-[82%]",
                      m.role === "user" ? "ml-auto" : "mr-auto"
                    )}
                  >
                    {m.role === "assistant" && (
                      <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center mr-2 mt-1 shrink-0">
                        <Bot className="w-3 h-3 text-primary" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm",
                        m.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-md"
                          : "bg-white/[0.04] border border-white/[0.06] text-foreground/90 rounded-tl-md"
                      )}
                    >
                      {m.role === "assistant" ? (
                        <MarkdownContent content={m.content} />
                      ) : (
                        <div className="whitespace-pre-wrap leading-relaxed">{m.content}</div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.role === "user" && (
                  <div className="flex max-w-[82%] mr-auto">
                    <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center mr-2 mt-1 shrink-0">
                      <Bot className="w-3 h-3 text-primary" />
                    </div>
                    <div className="bg-white/[0.04] border border-white/[0.06] text-foreground/90 rounded-2xl rounded-tl-md px-4 py-3 text-sm">
                      <div className="flex space-x-1.5 items-center h-5">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="relative z-10 px-4 py-3 border-t border-white/[0.06]">
            <div className="relative flex items-center">
              <input
                className="w-full pl-4 pr-12 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/30 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all"
                value={input}
                placeholder="Type your message..."
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-1.5 p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-30 disabled:bg-white/5 disabled:text-muted-foreground transition-all duration-200"
                aria-label="Send message"
              >
                <SendHorizonal className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Greeting Bubble */}
      {showBubble && !isOpen && (
        <button
          onClick={toggleChat}
          className="mb-3 hidden whitespace-nowrap rounded-xl border border-white/[0.08] bg-card/80 px-4 py-2.5 text-sm text-foreground shadow-lg backdrop-blur-xl transition-colors hover:bg-card sm:block animate-in slide-in-from-bottom-2 fade-in duration-300"
        >
          👋 How can I help you?
        </button>
      )}

      {/* Floating Toggle Button */}
      <Button
        onClick={toggleChat}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 relative group",
          isOpen
            ? ""
            : "!bg-primary"
        )}
        aria-label="Toggle chat"
      >
        {/* Glow ring on hover for the CTA state */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
        {isOpen ? <X className="!w-5 !h-5" /> : <MessageSquare className="!w-5 !h-5" />}
      </Button>
    </div>
  );
}
