export const isValidZip = (value: string) => /^\d{5}$/.test(value);

export type SortKey = "price-asc" | "price-desc" | "model";

export const sortVehicles = <
  T extends { price: number; model: string }
>(arr: T[], key: SortKey) => {
  const copy = [...arr];
  switch (key) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "model":
      return copy.sort((a, b) => a.model.localeCompare(b.model));
    default:
      return copy;
  }
};
