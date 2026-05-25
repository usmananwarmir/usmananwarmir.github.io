"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace("/en/");
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0B1E] flex items-center justify-center">
      <p className="mono-label text-[#00F0FF] text-sm tracking-widest">
        Loading…
      </p>
    </div>
  );
}
