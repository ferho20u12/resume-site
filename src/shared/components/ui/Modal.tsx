"use client";

import { Icon } from "@iconify/react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-9999 backdrop-blur-xl flex items-center justify-center"
      style={{ color: "var(--text)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-(--surface)
          w-full md:w-[70%] lg:w-[40%]
          max-h-[90vh]
          flex flex-col
          rounded-2xl
          shadow-lg
        "
      >
        <header className="flex justify-end p-4 border-b border-(--surface-border)">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-(--surface-border) transition"
            aria-label="Close modal"
          >
            <Icon icon="mdi:close" className="text-2xl" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5 text-lg text-justify">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
