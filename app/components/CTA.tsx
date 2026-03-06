import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden text-center max-w-[1200px] mx-auto py-[120px] px-6 md:px-10">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(109,40,217,.2) 0%, transparent 70%)",
        }}
      />

      <div className="pl-section-eyebrow">{`// GET STARTED`}</div>

      <h2 className="pl-section-h2 max-w-[700px] mx-auto relative z-[1]">
        The exam is months away.
        <br />
        <em>Your prep starts today.</em>
      </h2>

      <p className="pl-section-p mt-5 max-w-[460px] mx-auto relative z-[1]">
        Free to use. No sign-up needed. Open the editor, paste your pseudocode,
        and let the AI show you exactly what you&apos;d score.
      </p>

      <div className="mt-12 flex justify-center gap-4 relative z-[1] flex-wrap">
        <Link href="#" className="pl-btn-large inline-flex items-center gap-2">
          <span>▶</span>
          Open the IDE
        </Link>
        <Link
          href="#"
          className="pl-btn-outline inline-flex items-center gap-2"
        >
          Browse the reference guide
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
