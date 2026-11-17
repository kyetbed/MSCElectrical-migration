"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import { motionEase, motionViewport, motionViewportImmediate } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Fade only — no vertical shift (better for carousels / touch scroll). */
  fadeOnly?: boolean;
  eager?: boolean;
} & Pick<HTMLMotionProps<"div">, "id" | "aria-label" | "aria-labelledby">;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  fadeOnly = false,
  eager = false,
  ...rest
}: RevealProps) {
  const offset = fadeOnly ? 0 : y;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={eager ? motionViewportImmediate : motionViewport}
      transition={{ duration: 0.5, ease: motionEase, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type HeroRevealProps = {
  children: ReactNode;
  className?: string;
};

export function HeroReveal({ children, className }: HeroRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: motionEase, delay: 0.08 }}
    >
      {children}
    </motion.div>
  );
}