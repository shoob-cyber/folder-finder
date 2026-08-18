export const easingCurves = {
  easeInOutCubic: [0.645, 0.045, 0.355, 1] as [number, number, number, number],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  easeInQuad: [0.55, 0.085, 0.68, 0.53] as [number, number, number, number],
  springGentle: { type: "spring", stiffness: 100, damping: 20 },
  springBouncy: { type: "spring", stiffness: 300, damping: 25 },
};

export const staggerVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: (customDelay = 0.1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: customDelay,
      },
    }),
  },
  itemFadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: easingCurves.easeOutQuad,
      },
    },
  },
  itemFadeSlideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easingCurves.easeOutQuad,
      },
    },
  },
  itemFadeSlideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easingCurves.easeOutQuad,
      },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easingCurves.easeOutQuad,
      },
    },
  },
};
