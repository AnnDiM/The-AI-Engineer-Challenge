"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

// Empty string = same-origin (production). Set NEXT_PUBLIC_API_URL=http://localhost:8000 for local dev.
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

type Message = { role: "user" | "ai"; text: string };

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function autoResize() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail ?? `Server error ${res.status}`);
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setMessages((prev) => [...prev, { role: "ai", text: `Error: ${msg}` }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="avatar">🧠</div>
        <div>
          <h1>Mental Coach</h1>
          <p>Your supportive AI companion</p>
        </div>
      </header>

      <div className="messages">
        {messages.length === 0 && !loading && (
          <div className="empty-state">
            <div className="big-avatar">🧠</div>
            <h2>How are you feeling today?</h2>
            <p>Share what&apos;s on your mind. I&apos;m here to listen and support you.</p>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`message ${m.role}`}>
            <div className="message-avatar">
              {m.role === "ai" ? "🧠" : "🙂"}
            </div>
            <div className="bubble">{m.text}</div>
          </div>
        ))}

        {loading && (
          <div className="message ai">
            <div className="message-avatar">🧠</div>
            <div className="bubble">
              <div className="typing-indicator">
                <span /><span /><span />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="input-area">
        <div className="input-row">
          <textarea
            ref={textareaRef}
            rows={1}
            placeholder="Type a message…"
            value={input}
            onChange={(e) => { setInput(e.target.value); autoResize(); }}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <button
            className="send-btn"
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            aria-label="Send"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 8L2 2l3 6-3 6 12-6z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <p className="hint">Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  );
}
