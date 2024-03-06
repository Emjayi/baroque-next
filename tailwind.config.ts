import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const { fontFamily } = require('tailwindcss/defaultTheme')



const config: Config = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-euro)', ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#D2AC72",
        "secondary": "#1E2337",
        "accent-light": "#8be9fd",
        "accent-dark": "#50a1f5",
        "neutral-light": "#e5e7eb",
        "neutral-dark": "#4b5563",
        "base-light": "#ffffff",
        "base-dark": "#1a202c",
        "info-light": "#62d3eb",
        "info-dark": "#2779bd",
        "success-light": "#50fa7b",
        "success-dark": "#059669",
        "warning-light": "#f1fa8c",
        "warning-dark": "#d09922",
        "error-light": "#ff79c6",
        "error-dark": "#bd2173",
      }
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
