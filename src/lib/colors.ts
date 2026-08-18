export const colors = {
  darkBg: "#070b09",
  lightBg: "#f8f9fa",
  accentCyan: "#00f5a0",
  accentCyanHover: "#00c47f",
  accentViolet: "#00d2ff",
  accentOrange: "#7dffd0",
  textPrimary: "#ffffff",
  textSecondary: "#1a1a2e",
  textMuted: "#8a9a93",
  borderLight: "#e8ecff",
  borderDark: "#164034",
  glassBg: "rgba(255, 255, 255, 0.08)",
  glassBorder: "rgba(255, 255, 255, 0.1)",
} as const;

export type ColorToken = keyof typeof colors;
