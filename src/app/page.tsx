import { ArtworkShowcase } from "@/components/ArtworkShowcase";
import { NotifyForm } from "@/components/NotifyForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Sparkles, ShieldCheck, Zap, Compass } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between selection:bg-amber-500 selection:text-neutral-950 overflow-x-hidden">
      {/* Background Decorative Gradients & Mesh */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-500/10 via-orange-600/5 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-amber-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-10 -right-40 w-96 h-96 bg-rose-600/10 rounded-full blur-[128px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Top Navigation / Brand Bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Mark */}
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 p-[1px] shadow-lg shadow-amber-500/10">
            <div className="h-full w-full bg-neutral-950 rounded-[11px] flex items-center justify-center">
              <span className="font-serif font-black text-amber-400 text-lg tracking-wider">EF</span>
            </div>
          </div>
          <div>
            <span className="font-semibold text-base tracking-wider text-white uppercase block">
              Enid Fox
            </span>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase block font-mono">
              Studio & Project
            </span>
          </div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 text-xs text-neutral-300 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-medium">Pre-Launch Phase</span>
        </div>
      </header>

      {/* Main Content Showcase */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 sm:py-12 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Brand Copy & Email Notification */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium w-fit tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Web Experience In Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
              Something extraordinary is taking{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                shape
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl">
              We are quietly preparing the brand new digital home for <strong className="text-neutral-200 font-medium">Enid Fox</strong>. Be the first to uncover the upcoming reveal, limited releases, and future projects.
            </p>

            {/* Email Capture Section */}
            <div className="pt-2 max-w-lg">
              <NotifyForm />
            </div>

            {/* Feature Teasers */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-medium">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Early Access</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-tight">Priority invitation to our launch reveal</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-medium">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Full Website</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-tight">Comprehensive platform arriving soon</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Private Updates</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-tight">Direct announcements, strictly no spam</p>
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
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-neutral-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Enid Fox. All rights reserved.</p>
          <p className="text-neutral-400 mt-0.5">Designed & built with Next.js</p>
        </div>

        <SocialLinks />
      </footer>
    </div>
  );
}
