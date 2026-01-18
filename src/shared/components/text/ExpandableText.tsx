"use client"; import { useState } from "react";
import Modal from "../ui/Modal";

type ExpandableTextProps = { children?: string; lines?: number };

export default function ExpandableText({ children, lines = 3 }: ExpandableTextProps) {
  const [open, setOpen] = useState(false);
  const content = children ? <div dangerouslySetInnerHTML={{ __html: children }} /> : null;

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer mx-6 flex-1 rounded-xl p-4 bg-(--surface)">
        <div className="text-sm overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: lines, WebkitBoxOrient: "vertical" }}>
          {content}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        {content}
      </Modal>
    </>
  );
}
