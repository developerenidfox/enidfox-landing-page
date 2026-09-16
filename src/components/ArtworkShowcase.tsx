"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Image as ImageIcon } from "lucide-react";

interface ArtworkShowcaseProps {
  artworkSrc?: string;
  alt?: string;
}

export function ArtworkShowcase({
  artworkSrc = "/artwork/artwork.png",
  alt = "Enid Fox Artwork",
}: ArtworkShowcaseProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full max-w-xl mx-auto group">
      {/* Ambient background glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-rose-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Container Card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-amber-500/30">
        <div className="aspect-[4/5] sm:aspect-square w-full relative flex items-center justify-center p-4 sm:p-8">
          {!imageError ? (
            <>
              {/* Image loading indicator */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-amber-400 border-t-transparent" />
                </div>
              )}
              <Image
                src={artworkSrc}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className={`object-contain p-4 transition-all duration-700 ${
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                } group-hover:scale-[1.02]`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                priority
              />
            </>
          ) : (
            /* Placeholder state when artwork hasn't been dropped into public/artwork yet */
            <div className="flex flex-col items-center justify-center text-center p-8 z-10 select-none">
              {/* Abstract Fox / Art Motif Icon */}
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-amber-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative h-28 w-28 rounded-2xl bg-gradient-to-br from-amber-500/20 via-orange-600/20 to-neutral-900 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                  <svg
                    className="w-16 h-16 text-amber-400/90"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3L4 9l2 7 6 5 6-5 2-7-8-6z" />
                    <path d="M12 3v18" />
                    <path d="M8 12l4 3 4-3" />
                    <path d="M9 7.5L12 9l3-1.5" />
                  </svg>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-300 mb-3 tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                Artwork Showcase Ready
              </div>

              <h3 className="text-xl font-medium text-neutral-200 tracking-tight mb-2">
                Artwork Pending Drop-In
              </h3>
              <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
                Add your artwork file to{" "}
                <code className="text-amber-300 font-mono text-xs bg-neutral-800/80 px-1.5 py-0.5 rounded border border-neutral-700">
                  public/artwork/artwork.png
                </code>{" "}
                to display it here.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-neutral-500">
                <ImageIcon className="w-4 h-4" />
                <span>Supports PNG, SVG, JPG, or WebP</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom subtle edge info */}
        <div className="px-6 py-3 bg-neutral-900/50 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            Visual Identity
          </span>
          <span className="font-mono text-neutral-500">ENID FOX // 2026</span>
        </div>
      </div>
    </div>
  );
}
