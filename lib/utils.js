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

export function formatPhoneNumber(phoneNumber) {
  // Ensure the input is a string and has the correct length
  if (typeof phoneNumber !== 'string' || phoneNumber.length !== 11) {
      throw new Error('Invalid phone number format');
  }

  // Use regex to extract parts of the phone number
  const match = phoneNumber.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

  if (!match) {
      throw new Error('Invalid phone number format');
  }

  // Destructure the matched groups
  const [_, countryCode, firstPart, secondPart, thirdPart, fourthPart] = match;

  // Format the phone number
  return `+${countryCode} (${firstPart})-${secondPart} ${thirdPart}-${fourthPart}`;
}

