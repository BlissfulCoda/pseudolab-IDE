"use client";

import dynamic from "next/dynamic";
import StatsBar from "./StatsBar";

const MapClient = dynamic(
  () => import("./map").then((m) => ({ default: m.Map })),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-[200px] w-full animate-pulse rounded-xl"
        style={{ background: "var(--surface-2)" }}
      />
    ),
  },
);

export function StatsSection() {
  return (
    <section className="py-12 md:py-24" style={{ background: "var(--bg)" }}>
      <div className="relative mx-auto w-full px-4 md:px-6">
        <div className="overflow-hidden rounded-xl max-w-5xl mx-auto">
          <MapClient />
        </div>
        <StatsBar />
      </div>
    </section>
  );
}
