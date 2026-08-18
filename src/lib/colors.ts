export const colors = {
  darkBg: "#0a0e27",
  lightBg: "#f8f9fa",
  accentCyan: "#00d4ff",
  accentCyanHover: "#00b8e0",
  accentViolet: "#9d4edd",
  accentOrange: "#ff6b35",
  textPrimary: "#ffffff",
  textSecondary: "#1a1a2e",
  textMuted: "#888899",
  borderLight: "#e8ecff",
  borderDark: "#1a2847",
  glassBg: "rgba(255, 255, 255, 0.08)",
  glassBorder: "rgba(255, 255, 255, 0.1)",
} as const;

export type ColorToken = keyof typeof colors;
