"use client";

import React, { useRef } from "react";
import { Icon } from "@iconify/react";

interface HorizontalScrollContainerProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function HorizontalScrollContainer({
  children,
  title,
  className = "",
}: HorizontalScrollContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 200;
    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative w-full ${className}`}>
      {title && (
        <div className="flex flex-col items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="mt-1 h-0.5 w-12 bg-(--accent) rounded-full" />
        </div>
      )}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-(--surface) hover:bg-(--surface-border) rounded-full shadow"
        >
          <Icon icon="mdi:chevron-left" width={24} height={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-(--surface) hover:bg-(--surface-border) rounded-full shadow"
        >
          <Icon icon="mdi:chevron-right" width={24} height={24} />
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth hide-scrollbar"
          style={{
            WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
            background: "var(--surface)",
          }}
        >
          <div className="flex gap-4 min-w-max">{children}</div>
        </div>
      </div>
    </div>
  );
}
