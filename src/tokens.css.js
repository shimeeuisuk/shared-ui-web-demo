import { css } from "react-strict-dom";

export const colors = css.defineVars({
  background: {
    default: "#f4f6fb",
    "@media (prefers-color-scheme: dark)": "#11131a",
  },
  surface: {
    default: "#ffffff",
    "@media (prefers-color-scheme: dark)": "#1d1f26",
  },
  textPrimary: {
    default: "#1f2933",
    "@media (prefers-color-scheme: dark)": "#f3f4f6",
  },
  textSecondary: {
    default: "#52606d",
    "@media (prefers-color-scheme: dark)": "#9ca3af",
  },
  primary: {
    default: "#3b5bfd",
    "@media (prefers-color-scheme: dark)": "#7a8bff",
  },
  accent: {
    default: "#f97316",
    "@media (prefers-color-scheme: dark)": "#fb923c",
  },
});

export const spacing = css.defineVars({
  xs: { default: 8 },
  sm: { default: 12 },
  md: { default: 16 },
  lg: { default: 24 },
});
