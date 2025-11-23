import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "stp-primary": "#b32017", // primary red from Canva
        "stp-primary-light": "#d6372a",
        "stp-primary-dark": "#8f1618",
        "stp-primary-deep": "#631010",
        "stp-secondary": "#0f4c92", // supporting blue
        "stp-secondary-dark": "#0a3261",
        "stp-accent": "#f4c430", // gold accent
        "stp-accent-dark": "#c9961a",
        "stp-cream": "#fdf7ed",
        "stp-light": "#f5f1e6",
        "stp-dark": "#111827",
        "stp-sky": "#0f4c92",
        "stp-steel": "#3a4555"
      },
      fontFamily: {
        display: ["'Poppins'", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
