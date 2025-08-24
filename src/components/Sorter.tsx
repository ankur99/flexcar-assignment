"use client";

import { useMemo, useState } from "react";
import type { SortKey } from "@/lib/utils";

type Props = {
  value: SortKey;
  onChange: (s: SortKey) => void;
};

function SortIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="text-theme"
      aria-hidden="true"
    >
      <path
        d="M6 4h2v12h2l-3 4-3-4h2V4zm10 16h-2V8h-2l3-4 3 4h-2v12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Sorter({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const label = useMemo(() => {
    switch (value) {
      case "price-desc":
        return "Price high";
      case "price-asc":
        return "Price low";
      case "model":
        return "Model";
      default:
        return "";
    }
  }, [value]);

  return (
    <div className="dropdown dropdown-end">
      {/* Trigger button: icon + current label */}
      <button
        type="button"
        className="btn btn-sm rounded-full border border-neutral-800 bg-neutral-900 text-white hover:border-theme gap-2"
        aria-haspopup="menu"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen((s) => !s)}
        onBlur={() => setOpen(false)}
        title={`Sort: ${label}`}
      >
        <SortIcon />
        <span className="text-xs md:text-sm">{label}</span>
      </button>

      {/* Dropdown menu */}
      <ul
        className={`menu dropdown-content z-10 mt-2 w-48 rounded-box bg-neutral-900 p-2 shadow border border-neutral-800 ${open ? "" : "hidden"}`}
        role="menu"
        onMouseDown={(e) => e.preventDefault()} // keep focus while clicking
      >
        <li role="menuitem">
          <button
            className={`${value === "price-desc" ? "active" : ""}`}
            onClick={() => {
              onChange("price-desc");
              setOpen(false);
            }}
          >
            Price high
          </button>
        </li>
        <li role="menuitem">
          <button
            className={`${value === "price-asc" ? "active" : ""}`}
            onClick={() => {
              onChange("price-asc");
              setOpen(false);
            }}
          >
            Price low
          </button>
        </li>
        <li role="menuitem">
          <button
            className={`${value === "model" ? "active" : ""}`}
            onClick={() => {
              onChange("model");
              setOpen(false);
            }}
          >
            Model
          </button>
        </li>
      </ul>
    </div>
  );
}
