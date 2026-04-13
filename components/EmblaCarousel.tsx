"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type EmblaCarouselProps = {
  children: React.ReactNode[];
  loop?: boolean;
  slidesPerView?: "auto" | number;
  gap?: number;
};

export default function EmblaCarousel({
  children,
  loop = true,
  gap = 24,
}: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    align: "start",
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const updateState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateState();
    emblaApi.on("select", updateState);
    emblaApi.on("reInit", updateState);
    return () => {
      emblaApi.off("select", updateState);
      emblaApi.off("reInit", updateState);
    };
  }, [emblaApi, updateState]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="relative w-full">
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden w-full">
        <div
          className="flex"
          style={{ gap: `${gap}px` }}
        >
          {children.map((child, i) => (
            <div key={i} className="embla-slide">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        disabled={!loop && prevDisabled}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
        style={{
          background: "rgba(220,20,60,0.15)",
          border: "1px solid rgba(220,20,60,0.3)",
          color: "#DC143C",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(220,20,60,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(220,20,60,0.15)";
        }}
        aria-label="Slide précédent"
      >
        <ChevronLeft size={18} aria-hidden="true" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!loop && nextDisabled}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
        style={{
          background: "rgba(220,20,60,0.15)",
          border: "1px solid rgba(220,20,60,0.3)",
          color: "#DC143C",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(220,20,60,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(220,20,60,0.15)";
        }}
        aria-label="Slide suivant"
      >
        <ChevronRight size={18} aria-hidden="true" />
      </button>

      {/* Dots */}
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Slides">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              role="tab"
              aria-selected={i === selectedIndex}
              aria-label={`Slide ${i + 1}`}
              className="w-2 h-2 rounded-full transition-all duration-200"
              style={{
                background:
                  i === selectedIndex
                    ? "#DC143C"
                    : "rgba(220,20,60,0.3)",
                transform: i === selectedIndex ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
