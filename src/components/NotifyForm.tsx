"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate subscription delay; easily hook up to backend/provider later
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
        <div className="text-sm">
          <p className="font-medium text-white">You're on the priority list!</p>
          <p className="text-neutral-300 text-xs mt-0.5">We'll notify you as soon as Enid Fox goes live.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
            <Mail className="h-4 w-4" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="Enter your email for early access..."
            required
            className="w-full pl-10 pr-4 py-3 bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 text-neutral-100 placeholder:text-neutral-500 text-sm rounded-xl outline-none transition-all shadow-inner"
            disabled={status === "loading"}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-neutral-950 font-medium text-sm rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Joining...</span>
            </>
          ) : (
            <>
              <span>Notify Me</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-2 text-xs text-rose-400 animate-in fade-in">{errorMessage}</p>
      )}

      <p className="mt-2.5 text-xs text-neutral-500 flex items-center gap-1.5">
        <span>🔒 Zero spam. Be the first to know when we open.</span>
      </p>
    </div>
  );
}
