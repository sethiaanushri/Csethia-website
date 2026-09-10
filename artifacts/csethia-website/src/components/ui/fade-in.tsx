import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "",
  variants,
}: { 
  children: ReactNode; 
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  variants?: Variants;
}) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  };

  // If variants are provided (for StaggerChildren context), use them
  if (variants) {
    return (
      <motion.div
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({
  children,
  className = "",
  delayOrder = 0.1
}: {
  children: ReactNode;
  className?: string;
  delayOrder?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: delayOrder
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    }
  }
};
