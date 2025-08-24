import Image from "next/image";
import { Vehicle } from "@/lib/types";

type Props = { vehicle: Vehicle };

export default function VehicleCard({ vehicle }: Props) {
  const { make, model, trim, year, color, mileage, price, imageUrl } = vehicle;

  return (
    <article className="card bg-neutral-900 border border-neutral-800 group">
      <figure className="relative w-full aspect-[16/9] overflow-hidden rounded-t-[calc(var(--rounded-box)_-_2px)]">
        <Image
          src={imageUrl}
          alt={`${year} ${make} ${model}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
          priority={false}
        />
      </figure>
      <div className="card-body p-4">
        <h3 className="card-title text-base md:text-lg">
          {year} {make} {model}
        </h3>
        <p className="text-sm text-neutral-400">{trim} • {color}</p>

        <div className="mt-2 flex items-center justify-between">
          <div className="text-sm text-neutral-300">
            <span className="text-neutral-400">Mileage:</span> {mileage.toLocaleString()} mi
          </div>
          <div className="badge border-0 bg-theme text-black font-semibold p-3">
            ${price.toLocaleString()}
          </div>
        </div>
      </div>
    </article>
  );
}
