import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "stp-primary": "#00503f", // core deep green from Canva site
        "stp-primary-dark": "#012920",
        "stp-secondary": "#f0c75e", // warm gold accent
        "stp-secondary-dark": "#c79c2b",
        "stp-cream": "#fbf6e9",
        "stp-light": "#edf3ef",
        "stp-dark": "#0a1d17"
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
