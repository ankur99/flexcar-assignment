"use client";

type Props = {
    makes: string[];
    colors: string[];
    selectedMakes: string[];
    selectedColors: string[];
    onToggleMake: (make: string) => void;
    onToggleColor: (color: string) => void;
    onClearAll: () => void;
};

export default function FiltersPanel({
    makes,
    colors,
    selectedMakes,
    selectedColors,
    onToggleMake,
    onToggleColor,
    onClearAll,
}: Props) {
    return (
        <div className="card bg-neutral-900 border border-neutral-800 backdrop-blur">
            <div className="card-body p-4">
                <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button
                        className="btn btn-ghost btn-xs text-neutral-300 hover:text-white"
                        onClick={onClearAll}
                    >
                        Clear all
                    </button>
                </div>

                {/* Make accordion */}
                <div className="collapse collapse-arrow border border-neutral-800 bg-neutral-950">
                    <input type="checkbox" defaultChecked aria-label="Toggle Make filter" />
                    <div className="collapse-title text-sm font-medium">Make</div>
                    <div className="collapse-content">
                        <ul className="flex flex-col gap-2 p-0">
                            {makes.length === 0 && (
                                <li className="text-xs text-neutral-500">No options</li>
                            )}
                            {makes.map((m) => {
                                const checked = selectedMakes.includes(m);
                                return (
                                    <li key={m}>
                                        <label className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className={[
                                                    "checkbox checkbox-sm",
                                                    // visible on dark bg
                                                    "border-white/80",
                                                    // ensure the check stands out
                                                    "checked:bg-white checked:border-white checked:[--chkfg:theme(colors.black)]",
                                                    // optional: focus ring for accessibility
                                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900",
                                                ].join(" ")}
                                                checked={checked}
                                                onChange={() => onToggleMake(m)}
                                            />
                                            <span className="text-sm leading-5 text-white break-words">
                                                {m}
                                            </span>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>

                    </div>
                </div>

                {/* Color accordion */}
                <div className="collapse collapse-arrow border border-neutral-800 bg-neutral-950 mt-3">
                    <input type="checkbox" defaultChecked aria-label="Toggle Color filter" />
                    <div className="collapse-title text-sm font-medium">Color</div>
                    <div className="collapse-content">
                        <ul className="flex flex-col gap-2 p-0">
                            {colors.length === 0 && (
                                <li className="text-xs text-neutral-500">No options</li>
                            )}
                            {colors.map((c) => {
                                const checked = selectedColors.includes(c);
                                return (
                                    <li key={c}>
                                        <label className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className={[
                                                    "checkbox checkbox-sm",
                                                    "border-white/80",
                                                    "checked:bg-white checked:border-white checked:[--chkfg:theme(colors.black)]",
                                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900",
                                                ].join(" ")}
                                                checked={checked}
                                                onChange={() => onToggleColor(c)}
                                            />
                                            <span className="text-sm leading-5 text-white break-words">
                                                {c}
                                            </span>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}
