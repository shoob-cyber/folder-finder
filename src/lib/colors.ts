export const colors = {
  darkBg: "#0a0c0f",
  lightBg: "#f8f9fa",
  accentCyan: "#2dd4a8",
  accentCyanHover: "#1fae8b",
  accentViolet: "#73ffb8",
  accentOrange: "#d9f99d",
  textPrimary: "#ffffff",
  textSecondary: "#1a1a2e",
  textMuted: "#8a9a93",
  borderLight: "#e8ecff",
  borderDark: "#1f302a",
  glassBg: "rgba(255, 255, 255, 0.08)",
  glassBorder: "rgba(255, 255, 255, 0.1)",
} as const;

export type ColorToken = keyof typeof colors;
