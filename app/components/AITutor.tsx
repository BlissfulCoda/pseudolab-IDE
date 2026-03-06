"use client";

import { IntegrationsIllustration } from "@/components/ui/illustrations/integrations-illustration";
import { InvoiceIllustration } from "@/components/ui/illustrations/invoice-illustration";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { VisualizationIllustration } from "@/components/ui/illustrations/visualization-illustration";
import { MapIllustration } from "@/components/ui/illustrations/map-illustration";

export default function AITutor() {
  return (
    <section id="ai" className="bg-background @container py-24 border-t border-b border-border">
      <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
        {/* Section header — AITutor copy */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20">
          <div>
            <div className="pl-section-eyebrow ai-eye">Powered by AI · Aligned to exam boards</div>
            <h2 className="pl-section-h2">
              Your personal
              <br />
              <em className="ai-em">exam board tutor</em>,
              <br />
              inside the editor.
            </h2>
          </div>
          <div className="pt-5">
            <p className="pl-section-p">
              PseudoLab&apos;s AI doesn&apos;t just check your syntax — it evaluates your
              pseudocode against real Cambridge mark schemes, flags missing
              marks, and suggests improvements the way an experienced examiner
              would.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Cambridge 0478", "Cambridge 9618", "OCR J277", "AQA 8525"].map((label) => (
                <span
                  key={label}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 font-mono text-[11px]",
                    label.startsWith("Cambridge")
                      ? "border border-ai-border bg-ai-glow text-ai"
                      : "border border-border-bright bg-[var(--purple-glow)] text-code-purple"
                  )}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features grid — features-13 layout with AITutor copy */}
        <div className="relative">
          <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
          <PlusDecorator className="right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />
          <PlusDecorator className="bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
          <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />

          <div className="*:nth-3:border-r @max-3xl:*:nth-[1n+1]:nth-[-n+6]:border-b @3xl:*:nth-6:border-r @3xl:*:nth-[1n+3]:nth-[-n+4]:border-r @3xl:*:nth-[1n+1]:nth-[-n+5]:border-b border-foreground/10 divide-foreground/10 @3xl:grid-cols-4 @3xl:*:first:border-r relative grid grid-cols-2 overflow-hidden border *:p-8">
            {/* Mark Scheme Evaluation */}
            <div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-8 p-8">
              <div className="max-w-84 mx-auto w-full self-center">
                <InvoiceIllustration />
              </div>
              <div className="mx-auto max-w-sm text-center">
                <h3 className="text-balance font-semibold">Mark Scheme Evaluation</h3>
                <p className="text-muted-foreground mt-3">
                  Submit your pseudocode and the AI evaluates it against the Cambridge
                  mark scheme for that question type — identifying exactly which marks
                  you&apos;d earn and which you&apos;d drop. Like having an examiner mark your work in seconds.
                </p>
              </div>
            </div>

            {/* Inline Suggestions */}
            <div className="relative col-span-2 row-span-2 grid grid-rows-subgrid gap-8 p-8">
              <PlusDecorator className="bottom-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]" />
              <div className="@4xl:px-8 mx-auto max-w-sm self-center">
                <IntegrationsIllustration />
              </div>
              <div className="relative z-10 mx-auto max-w-sm text-center">
                <h3 className="text-balance font-semibold">Inline Suggestions</h3>
                <p className="text-muted-foreground mt-3">
                  Contextual improvement hints appear directly alongside your code as you
                  write — not a wall of text at the end, but precise, line-level guidance.
                </p>
              </div>
            </div>

            {/* Stat: 7/10 marks */}
            <div className="@max-2xl:p-4 hover:bg-card flex flex-col items-center justify-center space-y-0.5 space-y-1 text-center md:text-center">
              <div className="text-code-green text-4xl font-bold">7</div>
              <p className="text-muted-foreground">/ 10 marks</p>
            </div>

            {/* Stat: Cambridge aligned */}
            <div className="@max-2xl:p-4 hover:bg-card flex flex-col items-center justify-center space-y-0.5 space-y-1 text-center md:text-center">
              <div className="text-foreground text-4xl font-bold">100%</div>
              <p className="text-muted-foreground">Cambridge aligned</p>
            </div>

            {/* Testimonial */}
            <div className="@max-2xl:p-4 @max-2xl:col-span-full hover:bg-card relative col-span-2">
              <PlusDecorator className="bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]" />
              <blockquote className="before:bg-primary relative max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
                <p className="text-foreground">
                  This platform transformed how we handle pseudocode teaching. The AI mark scheme
                  features alone saved us countless hours of manual marking every week.
                </p>
                <footer className="mt-4 flex items-center gap-2">
                  <Avatar className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/68236786?v=4"
                      alt="Cambridge CS Teacher"
                    />
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                  <cite className="text-sm">Cambridge CS Teacher</cite>
                  <span aria-hidden className="bg-foreground/15 size-1 rounded-full" />
                  <span className="text-muted-foreground">IGCSE & A-Level</span>
                </footer>
              </blockquote>
            </div>

            {/* Question Context Mode */}
            <div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-8 p-8">
              <div className="mask-radial-from-35% relative -mx-8 self-center [--color-background:transparent]">
                <MapIllustration />
              </div>
              <div className="mx-auto max-w-sm text-center">
                <h3 className="text-balance font-semibold">Question Context Mode</h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Paste in the actual exam question. The AI understands the context
                  and evaluates your pseudocode specifically against what that
                  question demands — not generic rules.
                </p>
              </div>
            </div>

            {/* Efficiency Analysis & Exam Rewrites */}
            <div className="relative col-span-2 row-span-2 grid grid-rows-subgrid gap-8 p-8">
              <div className="@4xl:px-8 mx-auto w-full max-w-md self-center">
                <VisualizationIllustration />
              </div>
              <div className="relative z-10 mx-auto max-w-sm text-center">
                <h3 className="text-balance font-semibold">Efficiency & Exam-Style Rewrites</h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Flags O(n²) loops where O(n) is possible. Ask the AI to rewrite your solution
                  in the exact style Cambridge examiners expect. See a before/after diff view.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PlusDecorator = ({ className }: { className?: string }) => (
  <div
    aria-hidden
    className={cn(
      "mask-radial-from-15% before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px",
      className
    )}
  />
);
