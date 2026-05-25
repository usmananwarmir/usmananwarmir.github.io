"use client";

type FrameProgressProps = {
  total: number;
  active: number;
};

export function FrameProgress({ total, active }: FrameProgressProps) {
  return (
    <div
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2"
      aria-hidden="true"
    >
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i === active
              ? "h-8 w-1.5 bg-cyan-accent"
              : "h-2 w-1.5 bg-indigo-accent/40"
          }`}
        />
      ))}
    </div>
  );
}
