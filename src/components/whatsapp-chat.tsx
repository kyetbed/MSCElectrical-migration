"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";

import {
  chatNodes,
  freeTextFallback,
  routeFreeText,
  type ChatNode,
} from "@/data/chatbot";
import { business, buildWhatsAppUrl } from "@/data/nap";
import { motionEase } from "@/lib/motion";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
  link?: ChatNode["link"];
};

let messageCounter = 0;
function createMessageId() {
  messageCounter += 1;
  return `msg-${messageCounter}`;
}

function nodeToBotMessage(node: ChatNode): ChatMessage {
  return {
    id: createMessageId(),
    role: "bot",
    text: node.message,
    link: node.link,
  };
}

const panelMotion = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const bubbleMotion = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const BOT_REPLY_DELAY_MS = 480;

const MOBILE_MQ = "(max-width: 639px)";

function useMobileLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isMobile;
}

export function WhatsAppChat() {
  const panelId = useId();
  const inputId = useId();
  const [open, setOpen] = useState(false);
  const [nodeId, setNodeId] = useState("start");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const [whatsappContext, setWhatsappContext] = useState(
    "Hello MSC Electrical, I have a question about an electrical job.",
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const replyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMobile = useMobileLayout();

  const node = chatNodes[nodeId] ?? chatNodes.start;

  const scrollToBottom = useCallback(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, []);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) clearTimeout(replyTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const start = chatNodes.start;
    setNodeId("start");
    setMessages([nodeToBotMessage(start)]);
    setWhatsappContext("Hello MSC Electrical, I have a question about an electrical job.");
    setDraft("");
    setTyping(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    scrollToBottom();
  }, [messages, open, typing, node.options, scrollToBottom]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open || !isMobile) return;
    const { style } = document.body;
    const previousOverflow = style.overflow;
    const previousTouchAction = style.touchAction;
    style.overflow = "hidden";
    style.touchAction = "none";
    return () => {
      style.overflow = previousOverflow;
      style.touchAction = previousTouchAction;
    };
  }, [open, isMobile]);

  function appendBotNode(nextNodeId: string) {
    if (replyTimerRef.current) clearTimeout(replyTimerRef.current);

    const deliver = () => {
      const next = chatNodes[nextNodeId] ?? chatNodes.start;
      setNodeId(nextNodeId);
      if (next.whatsappHint) setWhatsappContext(next.whatsappHint);
      setMessages((current) => [...current, nodeToBotMessage(next)]);
      setTyping(false);
    };

    setTyping(true);
    replyTimerRef.current = setTimeout(deliver, BOT_REPLY_DELAY_MS);
  }

  function onOptionClick(option: { label: string; next: string }) {
    setMessages((current) => [
      ...current,
      { id: createMessageId(), role: "user", text: option.label },
    ]);
    appendBotNode(option.next);
  }

  function onSendText(event: React.FormEvent) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((current) => [...current, { id: createMessageId(), role: "user", text }]);
    setDraft("");
    setWhatsappContext(`${text}\n\n(Sent from MSC Electrical website chat)`);

    const routed = routeFreeText(text);
    if (routed) {
      appendBotNode(routed);
      return;
    }

    setTyping(true);
    replyTimerRef.current = setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: createMessageId(), role: "bot", text: freeTextFallback },
      ]);
      setTyping(false);
    }, BOT_REPLY_DELAY_MS);
  }

  const whatsappHref = buildWhatsAppUrl(whatsappContext);

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 max-sm:bottom-[max(1.25rem,env(safe-area-inset-bottom))] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="chat-panel"
            id={panelId}
            role="dialog"
            aria-labelledby={`${panelId}-title`}
            aria-modal="true"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={isMobile ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : panelMotion}
            transition={{ duration: isMobile ? 0.2 : 0.28, ease: motionEase }}
            className="pointer-events-auto flex origin-bottom-right flex-col overflow-hidden bg-white max-sm:fixed max-sm:inset-0 max-sm:z-[100] max-sm:h-dvh max-sm:w-full max-sm:rounded-none max-sm:border-0 max-sm:shadow-none sm:h-[min(28rem,calc(100dvh-5.5rem))] sm:w-[min(100vw-2.5rem,22rem)] sm:rounded-2xl sm:border sm:border-black/10 sm:shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
          >
            <header className="flex shrink-0 items-center gap-3 bg-[#075E54] px-4 py-3 text-white max-sm:pt-[max(0.75rem,env(safe-area-inset-top))]">
              <div className="flex size-10 items-center justify-center rounded-full bg-white/15">
                <WhatsAppIcon className="size-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p id={`${panelId}-title`} className="truncate text-sm font-semibold">
                  {business.name}
                </p>
                <p className="text-xs text-white/85">
                  {typing ? "Typing…" : `Online · WhatsApp ${business.phoneDisplay}`}
                </p>
              </div>
              <button
                type="button"
                className="inline-flex size-9 items-center justify-center rounded-full hover:bg-white/10"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" aria-hidden />
              </button>
            </header>

            <div
              ref={scrollRef}
              className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain bg-[#E5DDD5] px-3 py-3"
            >
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={bubbleMotion}
                    transition={{ duration: 0.22, ease: motionEase }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[92%] rounded-lg px-3 py-2 text-sm leading-relaxed shadow-sm ${
                        message.role === "user"
                          ? "rounded-br-none bg-[#DCF8C6] text-[#111]"
                          : "rounded-bl-none bg-white text-[#111]"
                      }`}
                    >
                      {message.text}
                      {message.link ? (
                        <Link
                          href={message.link.href}
                          className="mt-2 block text-sm font-semibold text-[#1243B4] underline underline-offset-2"
                          onClick={() => setOpen(false)}
                        >
                          {message.link.label}
                        </Link>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <AnimatePresence>
                {typing ? (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                    className="flex justify-start"
                  >
                    <TypingIndicator />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {node.options?.length ? (
              <motion.div
                key={node.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="flex max-h-32 shrink-0 flex-wrap gap-2 overflow-y-auto border-t border-[#1243B4]/10 bg-white px-3 py-2 sm:max-h-28"
              >
                {node.options.map((option) => (
                  <button
                    key={`${node.id}-${option.id}`}
                    type="button"
                    className="min-h-11 rounded-full border border-[#1243B4]/25 bg-[#1243B4]/5 px-3.5 py-2 text-left text-sm font-medium text-[#1243B4] hover:bg-[#1243B4]/10 active:scale-[0.98] sm:min-h-0 sm:py-1.5 sm:text-xs"
                    onClick={() => onOptionClick(option)}
                  >
                    {option.label}
                  </button>
                ))}
              </motion.div>
            ) : null}

            <form
              onSubmit={onSendText}
              className="flex shrink-0 items-center gap-2 border-t border-black/5 bg-white px-3 py-2 max-sm:pb-[max(0.5rem,env(safe-area-inset-bottom))]"
            >
              <label htmlFor={inputId} className="sr-only">
                Type a message
              </label>
              <input
                id={inputId}
                type="text"
                inputMode="text"
                enterKeyHint="send"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Type a message…"
                className="min-w-0 flex-1 rounded-full border border-black/10 bg-[#F6F6F6] px-3 py-2.5 text-base outline-none focus:border-[#1243B4]/40 sm:py-2 sm:text-sm"
                autoComplete="off"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.94 }}
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#1243B4] text-white disabled:opacity-40"
                disabled={!draft.trim()}
                aria-label="Send message"
              >
                <Send className="size-4" aria-hidden />
              </motion.button>
            </form>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center justify-center gap-2 bg-[#25D366] px-4 py-3.5 text-base font-semibold text-white hover:bg-[#20BD5A] sm:py-3 sm:text-sm max-sm:pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            >
              <WhatsAppIcon className="size-5" />
              Continue on WhatsApp
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
        className={`pointer-events-auto inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-[#20BD5A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] ${open ? "max-sm:pointer-events-none max-sm:opacity-0" : ""}`}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        onClick={() => setOpen((current) => !current)}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <X className="size-7" aria-hidden />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <WhatsAppIcon className="size-8" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div
      className="flex items-center gap-1 rounded-lg rounded-bl-none bg-white px-3 py-2.5 shadow-sm"
      aria-hidden
    >
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          className="size-1.5 rounded-full bg-[#9CA3AF]"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: index * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}