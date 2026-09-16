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

    // Simulated subscription delay; can easily link to API/service
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-sage-soft border border-sage text-olive shadow-sm animate-in fade-in duration-300">
        <CheckCircle2 className="w-5 h-5 text-olive shrink-0" />
        <div className="text-sm">
          <p className="font-semibold text-charcoal">You're on the priority list!</p>
          <p className="text-charcoal-muted text-xs mt-0.5">We'll notify you as soon as Enid Fox goes live.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-muted">
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
            className="w-full pl-10 pr-4 py-3.5 bg-white border border-stone hover:border-charcoal-muted focus:border-olive focus:ring-2 focus:ring-olive/20 text-charcoal placeholder:text-stone-dark text-sm rounded-xl outline-none transition-all shadow-sm"
            disabled={status === "loading"}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-olive hover:bg-olive-hover text-cream font-medium text-sm rounded-xl transition-all shadow-md shadow-olive/15 hover:shadow-olive/25 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shrink-0"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-cream" />
              <span>Joining...</span>
            </>
          ) : (
            <>
              <span>Notify Me</span>
              <ArrowRight className="w-4 h-4 text-cream" />
            </>
          )}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-2 text-xs text-rose-600 animate-in fade-in">{errorMessage}</p>
      )}

      <p className="mt-2.5 text-xs text-charcoal-muted flex items-center gap-1.5">
        <span>Strictly private. Zero spam. Unsubscribe anytime.</span>
      </p>
    </div>
  );
}
