import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// 
export const STATS = [
  { num: "1,", numHighlight: "200+", label: "// students using it" },
  { num: "", numHighlight: "40+", label: "// keywords supported" },
  {
    num: "",
    numHighlight: "12",
    suffix: "ms",
    label: "// avg. execution time",
  },
  {
    num: "",
    numHighlight: "100",
    suffix: "%",
    label: "// cambridge igcse spec",
  },
];
