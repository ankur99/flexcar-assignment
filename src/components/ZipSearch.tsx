"use client";

import { useEffect, useState } from "react";
import { isValidZip } from "@/lib/utils";

type Props = {
  onSubmit: (zip: string) => void;
  initialZip?: string;
};

export default function ZipSearch({ onSubmit, initialZip = "" }: Props) {
  const [zip, setZip] = useState(initialZip);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    setZip(initialZip ?? "");
  }, [initialZip]);

  const invalid = touched && zip.length > 0 && !isValidZip(zip);

  return (
    <form
      className="flex w-full items-start gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setTouched(true);
        if (!zip) return;
        if (!isValidZip(zip)) return;
        onSubmit(zip);
      }}
      noValidate
    >
      <div className="flex-1">
        <label htmlFor="zip" className="sr-only">ZIP Code</label>

        <div className="flex items-center gap-3">
          <input
            id="zip"
            name="zip"
            inputMode="numeric"
            pattern="\d{5}"
            maxLength={5}
            placeholder="Enter ZIP code (e.g. 02116 or 10001 or 94105)"
            value={zip}
            onChange={(e) => {
              const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 5);
              setZip(digitsOnly);
            }}
            onBlur={() => setTouched(true)}
            className={`input input-bordered w-full h-12 ${invalid ? "input-error" : ""} text-black placeholder:text-neutral-500`}
          />

          <button
            type="submit"
            className="
    btn h-12 min-h-0 whitespace-nowrap border-0
    bg-theme text-black hover:bg-theme/90
    disabled:bg-neutral-800 disabled:text-neutral-400 disabled:border disabled:border-neutral-700 disabled:opacity-100 disabled:cursor-not-allowed
  "
            disabled={zip.length !== 5 || !isValidZip(zip)}
          >
            Search
          </button>
        </div>

        <div className="min-h-[1.25rem] pt-1">
          {invalid && (
            <p className="text-xs leading-5 text-error">
              Please enter a valid 5-digit ZIP code.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
