"use client"; 
import { Icon } from "@iconify/react"; 
import { createPortal } from "react-dom"; 
import { useEffect, useState } from "react";

type ModalProps = { open: boolean; onClose: () => void; children: React.ReactNode };

export default function Modal({ open, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || !open) return null;

  return createPortal(
    <div onClick={onClose} className="fixed inset-0 z-9999 bg-black/50 backdrop-blur-sm">
      <div onClick={(e) => e.stopPropagation()} className="bg-(--surface) w-full h-full flex flex-col">
        <header className="flex justify-end p-4 border-b border-(--surface-border)">
          <button onClick={onClose} className="p-2 rounded-full hover:bg-(--surface-border) transition">
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
