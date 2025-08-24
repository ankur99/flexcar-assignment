"use client";

import { useEffect, useMemo, useState } from "react";
import ZipSearch from "@/components/ZipSearch";
import FiltersPanel from "@/components/FiltersPanel";
import Sorter from "@/components/Sorter";
import ErrorBanner from "@/components/ErrorBanner";
import VehicleCard from "@/components/VehicleCard";
import Modal from "@/components/Modal";
import { VEHICLES } from "@/lib/vehicles";
import { sortVehicles, type SortKey, isValidZip } from "@/lib/utils";

export default function Page() {
  const [zip, setZip] = useState("");
  const [submittedZip, setSubmittedZip] = useState<string | null>(null);

  // Multi-select filters
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const [sort, setSort] = useState<SortKey>("price-desc");

  // Modal state
  const [isMounted, setIsMounted] = useState(false);
  const [zipModalOpen, setZipModalOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !submittedZip) {
      setZipModalOpen(true);
    }
  }, [isMounted, submittedZip]);

  const vehiclesForZip = useMemo(() => {
    if (!submittedZip) return [];
    return VEHICLES.filter((v) => v.zip === submittedZip);
  }, [submittedZip]);

  const allMakes = useMemo(() => {
    return Array.from(new Set(vehiclesForZip.map((v) => v.make))).sort();
  }, [vehiclesForZip]);

  const allColors = useMemo(() => {
    return Array.from(new Set(vehiclesForZip.map((v) => v.color))).sort();
  }, [vehiclesForZip]);

  const filtered = useMemo(() => {
    let list = vehiclesForZip;

    if (selectedMakes.length > 0) {
      list = list.filter((v) => selectedMakes.includes(v.make));
    }
    if (selectedColors.length > 0) {
      list = list.filter((v) => selectedColors.includes(v.color));
    }

    return sortVehicles(list, sort);
  }, [vehiclesForZip, selectedMakes, selectedColors, sort]);

  const hasSearched = submittedZip !== null;

  const submitZip = (z: string) => {
    const nextZip = z.replace(/\D/g, "").slice(0, 5);
    if (nextZip.length !== 5) return;

    const results = VEHICLES.filter((v) => v.zip === nextZip);

    setZip(nextZip);
    setSubmittedZip(nextZip);

    if (results.length === 0) {
      // keep modal open to allow editing
      return;
    }

    // Successful search: reset filters and close modal
    setSelectedMakes([]);
    setSelectedColors([]);
    setZipModalOpen(false);
  };

  const zipError = (() => {
    const hasSearchedLocal = submittedZip !== null;
    if (!hasSearchedLocal) return "";
    if (!zip) return "Please enter a ZIP code.";
    if (!isValidZip(zip)) return "Invalid ZIP code. Use 5 digits (e.g., 02116).";
    if (vehiclesForZip.length === 0) return `No vehicles found for ZIP ${zip}.`;
    return "";
  })();

  return (
    <div className="flex flex-col gap-6">
      {/* ZIP Modal */}
      <Modal
        open={zipModalOpen}
        onClose={() => setZipModalOpen(false)}
        title="Find vehicles by ZIP"
      >
        <div className="space-y-3">
          <ZipSearch onSubmit={submitZip} initialZip={zip} />
          {zipError && <ErrorBanner message={zipError} />}
        </div>
      </Modal>

      {/* Top bar with ZIP button + Sorter */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Inventory</h1>

        <div className="flex items-center gap-3">
          <button
            className="btn btn-sm rounded-full border border-neutral-800 bg-neutral-900  text-white"
            onClick={() => setZipModalOpen(true)}
          >
            {/* Search icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="text-theme"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49L15.5 14Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"
              />
            </svg>
            {submittedZip ? `ZIP: ${submittedZip}` : "Set ZIP"}
          </button>

          <div className="hidden md:block">
            <Sorter value={sort} onChange={setSort} />
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">
        <aside className="md:sticky md:top-20 h-max">
          <FiltersPanel
            makes={allMakes}
            colors={allColors}
            selectedMakes={selectedMakes}
            selectedColors={selectedColors}
            onToggleMake={(mk) =>
              setSelectedMakes((prev) =>
                prev.includes(mk) ? prev.filter((x) => x !== mk) : [...prev, mk]
              )
            }
            onToggleColor={(cl) =>
              setSelectedColors((prev) =>
                prev.includes(cl) ? prev.filter((x) => x !== cl) : [...prev, cl]
              )
            }
            onClearAll={() => {
              setSelectedMakes([]);
              setSelectedColors([]);
            }}
          />
        </aside>

        <div>
          <div className="mb-4 md:hidden">
            <Sorter value={sort} onChange={setSort} />
          </div>

          {hasSearched && !zipError && (
            <p className="mb-3 text-sm text-neutral-400">
              Showing {filtered.length} of {vehiclesForZip.length} vehicle(s) for ZIP {zip}.
            </p>
          )}

          <div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            aria-live="polite"
            aria-busy={hasSearched && !zipError && vehiclesForZip.length === 0}
          >
            {filtered.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
