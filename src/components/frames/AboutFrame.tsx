"use client";

import { motion } from "framer-motion";
import type { SiteContent } from "@/lib/types";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { SectionTitle } from "@/components/ui/SectionTitle";

type AboutFrameProps = {
  content: SiteContent;
};

export function AboutFrame({ content }: AboutFrameProps) {
  const { about } = content;

  return (
    <div className="flex items-center px-6 md:px-16 lg:px-24">
      <ParallaxLayer mouseDepth={18} scrollDepth={35} className="max-w-3xl">
        <FrameLabel label={about.frameLabel} />
        <SectionTitle title={about.title} />

        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -40, rotateY: -8 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-silver/90 text-base md:text-lg leading-relaxed border-l-2 border-aqua-accent/40 pl-5 hover:border-cyan-accent/60 transition-colors"
              style={{ transformPerspective: 600 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </ParallaxLayer>
    </div>
  );
}
