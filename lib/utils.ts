import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


/* ── Floating keyword pill data (position/color per-item via style) ── */
export const FLOATING_KEYWORDS = [
  {
    text: "FOR i ← 1 TO n",
    style: {
      top: "15%",
      left: "18%",
      animationDelay: "0.8s",
      color: "var(--text-3)",
      borderColor: "var(--border)",
    },
  },
  {
    text: "DECLARE x : INTEGER",
    style: {
      top: "25%",
      right: "22%",
      animationDelay: "1s",
      color: "var(--code-purple)",
      borderColor: "rgba(139,92,246,.2)",
    },
  },
  {
    text: 'OUTPUT "Hello"',
    style: {
      top: "60%",
      left: "20%",
      animationDelay: "1.2s",
      color: "var(--code-green)",
      borderColor: "rgba(34,197,94,.15)",
    },
  },
  {
    text: "WHILE count < 10",
    style: {
      top: "70%",
      right: "24%",
      animationDelay: "1.4s",
      color: "var(--text-3)",
      borderColor: "var(--border)",
    },
  },
  {
    text: "IF score > 50",
    style: {
      top: "40%",
      left: "22%",
      animationDelay: "1.6s",
      color: "#F472B6",
      borderColor: "rgba(244,114,182,.15)",
    },
  },
  {
    text: "NEXT i",
    style: {
      top: "35%",
      right: "24%",
      animationDelay: "1.1s",
      color: "var(--text-3)",
      borderColor: "var(--border)",
    },
  },
];


//
export const STATS = [
  // { num: "1,", numHighlight: "200+", label: "// students using it" },
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
