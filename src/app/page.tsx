"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { PageLoader } from "@/components/effects/PageLoader";

export default function Home() {
  const reducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(!reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      window.location.replace("/en/");
      return;
    }
    if (!loading) {
      window.location.replace("/en/");
    }
  }, [loading, reducedMotion]);

  if (reducedMotion) {
    return null;
  }

  if (loading) {
    return <PageLoader locale="en" onComplete={() => setLoading(false)} />;
  }

  return null;
}
