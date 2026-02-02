import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString('ar-DZ')} دج`;
}

export function formatPhoneNumber(phone: string): string {
  // Format Algerian phone number
  if (phone.startsWith('+213')) {
    return phone;
  }
  if (phone.startsWith('0')) {
    return `+213${phone.slice(1)}`;
  }
  return `+213${phone}`;
}

export function calculateTotal(basePrice: number, shipping: 'home' | 'bureau', isLargeTable: boolean = false): number {
  const shippingCost = isLargeTable
    ? shipping === 'home' ? 3000 : 2500
    : shipping === 'home' ? 2000 : 1800;

  return basePrice + shippingCost;
}
