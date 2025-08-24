"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <div
      className={`modal ${open ? "modal-open" : ""}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box bg-neutral-900">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">{title ?? "Search by ZIP"}</h3>
          <button className="btn btn-ghost btn-sm" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
      <div className="modal-backdrop bg-black/70">
        <button aria-label="Close backdrop" onClick={onClose}>close</button>
      </div>
    </div>
  );
}
