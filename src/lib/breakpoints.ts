export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  large: 1440,
} as const;

export type BreakpointKey = keyof typeof breakpoints;
