"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Image as ImageIcon } from "lucide-react";

interface ArtworkShowcaseProps {
  artworkSrc?: string;
  alt?: string;
}

export function ArtworkShowcase({
  artworkSrc = "/artwork/artwork.jpg",
  alt = "Enid Fox — International BodyTalk Practitioner, Nature's Language Practitioner, Reiki Master, Cranio Sacral Therapist",
}: ArtworkShowcaseProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      {/* Subtle organic ambient glow */}
      <div className="absolute -inset-2.5 bg-gradient-to-tr from-olive/20 via-sage/25 to-stone/15 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition duration-700 -z-10" />

      {/* Main Showcase Card */}
      <div className="relative overflow-hidden rounded-3xl border border-stone/50 bg-cream-card shadow-xl transition-all duration-300 hover:border-olive/50 hover:shadow-2xl">
        <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative flex items-center justify-center overflow-hidden bg-cream">
          {!imageError ? (
            <>
              {/* Image loading indicator */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-cream z-10">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-olive border-t-transparent" />
                </div>
              )}
              <Image
                src={artworkSrc}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                className={`object-cover transition-opacity duration-500 ${
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
              <div className="relative mb-4">
                <div className="absolute -inset-2 bg-sage/30 rounded-2xl blur-lg" />
                <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-cream via-sage-soft to-cream border border-olive/20 flex items-center justify-center shadow-xs">
                  {/* Botanical Leaf Motif matching Enid Fox identity */}
                  <svg
                    className="w-12 h-12 text-olive"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C8 6 6 11 12 17c6-6 4-11 0-15z" />
                    <path d="M12 17V7" />
                    <path d="M4 14c2-4 5-5 8-3-1 4-4 6-8 3z" />
                    <path d="M20 14c-2-4-5-5-8-3 1 4 4 6 8 3z" />
                  </svg>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-soft border border-sage/40 text-xs font-semibold text-olive mb-2">
                <Sparkles className="w-3.5 h-3.5 text-olive" />
                Artwork Showcase Ready
              </div>

              <h3 className="text-lg font-bold text-charcoal tracking-tight mb-1">
                Artwork Pending Drop-In
              </h3>
              <p className="text-xs text-charcoal-muted max-w-xs leading-relaxed">
                Add your artwork file to{" "}
                <code className="text-olive font-mono text-xs bg-cream px-1.5 py-0.5 rounded border border-stone/50 font-medium">
                  public/artwork/artwork.jpg
                </code>{" "}
                to display it here.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-charcoal-muted">
                <ImageIcon className="w-3.5 h-3.5 text-stone-dark" />
                <span>Supports JPG, PNG, SVG, or WebP</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom subtle bar */}
        <div className="px-6 py-3 bg-cream border-t border-stone/30 flex items-center justify-between text-xs text-charcoal-muted">
          <span className="flex items-center gap-1.5 font-medium text-olive">
            <span className="h-1.5 w-1.5 rounded-full bg-olive animate-pulse" />
            Official Visual
          </span>
          <span className="font-mono text-stone-dark font-medium">ENID FOX // HOLISTIC PRACTICE</span>
        </div>
      </div>
    </div>
  );
}
