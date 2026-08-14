"use client";

import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      data-page-transition
      initial={reduceMotion ? false : { opacity: 0.94 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  priority = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  priority?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion
    ? false
    : priority
      ? { opacity: 0, y: 24 }
      : { opacity: 0, y: 24 };

  return (
    <motion.div
      data-page-reveal
      initial={initial}
      animate={priority ? { opacity: 1, y: 0 } : undefined}
      whileInView={priority ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: priority ? 0.7 : 0.65, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
