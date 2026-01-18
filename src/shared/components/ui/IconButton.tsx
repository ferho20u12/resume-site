"use client";

import { forwardRef } from "react";
import { Icon } from "@iconify/react";

type IconButtonProps = {
  icon: string;
  onClick?: () => void;
  className?: string;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ icon, onClick, className = "" }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={`flex items-center justify-center transition-all select-none w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ring-1 shadow-sm bg-(--color-bg-alt) text-(--color-text) border-(--color-border) ring-(--color-border) hover:bg-(--color-hover) hover:ring-2 hover:scale-105 active:scale-95 ${className}`}
      >
        <Icon icon={icon} className="text-2xl sm:text-3xl" />
      </button>
    );
  }
);
