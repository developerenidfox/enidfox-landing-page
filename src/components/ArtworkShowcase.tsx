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
      {/* Subtle organic ambient glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-olive/15 via-sage/20 to-stone/10 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-700 -z-10" />

      {/* Main Showcase Card */}
      <div className="relative overflow-hidden rounded-3xl border border-stone/40 bg-cream-card shadow-xl transition-all duration-300 hover:border-olive/40 hover:shadow-2xl">
        <div className="aspect-[4/5] sm:aspect-square w-full relative flex items-center justify-center p-4 sm:p-8">
          {!imageError ? (
            <>
              {/* Image loading indicator */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-olive border-t-transparent" />
                </div>
              )}
              <Image
                src={artworkSrc}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className={`object-contain p-4 transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                priority
              />
            </>
          ) : (
            /* Fallback state when artwork is pending */
            <div className="flex flex-col items-center justify-center text-center p-8 z-10 select-none">
              {/* Minimalist Fox Silhouette Motif in Olive & Sage */}
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-sage/30 rounded-2xl blur-lg" />
                <div className="relative h-28 w-28 rounded-2xl bg-gradient-to-br from-cream via-sage-soft to-cream border border-olive/20 flex items-center justify-center shadow-sm">
                  <svg
                    className="w-16 h-16 text-olive"
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

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-soft border border-sage/40 text-xs font-semibold text-olive mb-3">
                <Sparkles className="w-3.5 h-3.5 text-olive" />
                Artwork Showcase Ready
              </div>

              <h3 className="text-xl font-bold text-charcoal tracking-tight mb-2">
                Artwork Pending Drop-In
              </h3>
              <p className="text-sm text-charcoal-muted max-w-xs leading-relaxed">
                Add your artwork file to{" "}
                <code className="text-olive font-mono text-xs bg-cream px-1.5 py-0.5 rounded border border-stone/50 font-medium">
                  public/artwork/artwork.png
                </code>{" "}
                to display it here.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-charcoal-muted">
                <ImageIcon className="w-4 h-4 text-stone-dark" />
                <span>Supports PNG, SVG, JPG, or WebP</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom subtle edge info */}
        <div className="px-6 py-3 bg-cream border-t border-stone/30 flex items-center justify-between text-xs text-charcoal-muted">
          <span className="flex items-center gap-1.5 font-medium text-olive">
            <span className="h-1.5 w-1.5 rounded-full bg-olive animate-pulse" />
            Visual Identity
          </span>
          <span className="font-mono text-stone-dark font-medium">ENID FOX // 2026</span>
        </div>
      </div>
    </div>
  );
}
