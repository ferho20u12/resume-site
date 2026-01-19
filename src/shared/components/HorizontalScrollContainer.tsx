"use client";

import React, { useRef, useState, useEffect } from "react";
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
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [pages, setPages] = useState(0);
  const [activePage, setActivePage] = useState(0);

  const needsPadding = showLeft || showRight;

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const current = el.scrollLeft;

      setShowLeft(current > 0);
      setShowRight(current < maxScroll - 1);

      const totalPages = Math.ceil(el.scrollWidth / el.clientWidth);
      setPages(totalPages);

      if (current >= maxScroll - 2) {
        setActivePage(totalPages - 1);
      } else {
        setActivePage(Math.floor(current / el.clientWidth));
      }
    };

    el.addEventListener("scroll", check);
    window.addEventListener("resize", check);
    check();

    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div className={`relative w-full ${className}`}>
      {title && (
        <div className="flex flex-col items-center mb-5">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="mt-1 h-0.5 w-14 bg-(--accent) rounded-full" />
        </div>
      )}

      <div className="relative">
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-(--surface) hover:bg-(--surface-border) shadow-sm transition"
          >
            <Icon icon="mdi:chevron-left" width={22} height={22} />
          </button>
        )}

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-(--surface) hover:bg-(--surface-border) shadow-sm transition"
          >
            <Icon icon="mdi:chevron-right" width={22} height={22} />
          </button>
        )}

        <div
          ref={scrollRef}
          className={`overflow-x-auto scroll-smooth hide-scrollbar ${needsPadding ? "px-10 md:px-14" : ""}`}
          style={{
            background: "var(--surface)",
            WebkitMaskImage: needsPadding
              ? "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
              : undefined,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage: needsPadding
              ? "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
              : undefined,
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        >
          <div
            className={`flex gap-4 min-w-max py-0.5 ${!needsPadding ? "justify-center" : ""}`}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {children}
          </div>
        </div>
      </div>

      {pages > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: pages }).map((_, idx) => (
            <span
              key={idx}
              className={`h-2 rounded-full transition-all duration-200 ${
                idx === activePage ? "bg-(--accent) w-10" : "bg-(--surface-border) w-6"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
