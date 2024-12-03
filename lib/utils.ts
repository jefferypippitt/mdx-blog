import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  const parsedDate = new Date(date + "T00:00:00Z");

  const month = (parsedDate.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = parsedDate.getUTCDate().toString().padStart(2, "0");
  const year = parsedDate.getUTCFullYear();

  return `${month}/${day}/${year}`;
}
