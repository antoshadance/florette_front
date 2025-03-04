import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Playfair_Display } from "next/font/google";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const pfFont = Playfair_Display({
  subsets:["cyrillic","latin"],
  weight: ["400","500","600","700","800","900"]
})

