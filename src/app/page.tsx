import { ArtworkShowcase } from "@/components/ArtworkShowcase";
import { NotifyForm } from "@/components/NotifyForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Sparkles, ShieldCheck, Compass, Feather } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cream text-charcoal flex flex-col justify-between selection:bg-olive selection:text-cream overflow-x-hidden">
      {/* Organic Ambient Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-sage/20 via-cream to-transparent blur-3xl" />
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-olive/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-12 -right-32 w-80 h-80 bg-sage/25 rounded-full blur-[100px]" />
      </div>

      {/* Top Header */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          {/* Brand Mark */}
          <div className="h-11 w-11 rounded-2xl bg-olive p-[1px] shadow-md shadow-olive/15 flex items-center justify-center">
            <span className="font-serif font-bold text-cream text-lg tracking-wider">EF</span>
          </div>
          <div>
            <span className="font-bold text-base tracking-wider text-charcoal uppercase block">
              Enid Fox
            </span>
            <span className="text-[11px] tracking-widest text-charcoal-muted uppercase block font-medium">
              Studio & Project
            </span>
          </div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-soft border border-sage/50 text-xs text-olive font-semibold shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-olive" />
          </span>
          <span>Pre-Launch Phase</span>
        </div>
      </header>

      {/* Main Section */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 sm:py-12 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center w-full">
          
          {/* Left Column: Brand Copy & Notification */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-soft border border-sage/40 text-olive text-xs font-semibold w-fit tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-olive" />
              <span>Official Web Experience In Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal leading-[1.1] font-sans">
              Something extraordinary is taking{" "}
              <span className="text-olive">
                shape
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-xl">
              We are quietly preparing the brand new digital home for <strong className="text-charcoal font-semibold">Enid Fox</strong>. Be the first to uncover the upcoming reveal, limited releases, and future projects.
            </p>

            {/* Email Capture */}
            <div className="pt-2 max-w-lg">
              <NotifyForm />
            </div>

            {/* Feature Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-stone/40">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-olive text-xs font-semibold">
                  <Feather className="w-3.5 h-3.5" />
                  <span>Early Access</span>
                </div>
                <p className="text-[11px] text-charcoal-muted leading-tight">Priority invitation to our launch reveal</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-olive text-xs font-semibold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Full Website</span>
                </div>
                <p className="text-[11px] text-charcoal-muted leading-tight">Comprehensive platform arriving soon</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-olive text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Private Updates</span>
                </div>
                <p className="text-[11px] text-charcoal-muted leading-tight">Direct announcements, strictly no spam</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Artwork Showcase Frame */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <ArtworkShowcase />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 border-t border-stone/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-charcoal-muted text-center sm:text-left">
          <p>© {new Date().getFullYear()} Enid Fox. All rights reserved.</p>
          <p className="text-stone-dark mt-0.5">Designed & built with Next.js</p>
        </div>

        <SocialLinks />
      </footer>
    </div>
  );
}
