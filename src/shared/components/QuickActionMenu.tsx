"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

export type QuickActionItem = {
  key: string;
  label: string;
  icon: string;
  onClick: () => void;
};

export type QuickActionMenuProps = {
  icon: string;
  label?: string;
  actions: QuickActionItem[];
  open: boolean;
  setOpen: (value: boolean) => void;
};

export function QuickActionMenu({
  icon,
  actions,
  open,
  setOpen,
}: QuickActionMenuProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <div ref={ref} className="relative flex flex-col items-end">
      <button
        onClick={() => setOpen(!open)}
        className="
          p-3 rounded-full shadow transition border
          bg-(--color-bg-alt) text-(--color-text) border-(--color-border)
          hover:bg-(--color-hover)
        "
      >
        <Icon icon={icon} className="text-2xl" />
      </button>

      {open && (
        <div
          className="
            glass
            absolute right-0 bottom-full mb-2 w-44 rounded-2xl shadow-lg z-10 overflow-hidden border
            bg-(--color-bg-alt) text-(--color-text) border-(--color-border)
          "
        >
          {actions.map(({ key, icon, label, onClick }) => (
            <button
              key={key}
              onClick={() => {
                onClick();
                setOpen(false);
              }}
              className="
                flex items-center gap-2 w-full text-left px-4 py-2 transition
                hover:bg-(--color-hover)
              "
            >
              <Icon icon={icon} className="text-xl" />
              <span className="text-sm font-medium">
                {label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
