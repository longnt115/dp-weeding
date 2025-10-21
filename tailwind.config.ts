import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          dark: "#3a3a3a",
          light: "#f5f5f5",
          gold: "#d4af37",
          gray: "#4a4a4a",
          "text-dark": "#404040",
          "text-secondary": "#666666",
          border: "#e0e0e0",
        },
      },
      backgroundColor: {
        wedding: {
          dark: "#3a3a3a",
          light: "#f5f5f5",
          gold: "#d4af37",
        },
      },
      textColor: {
        wedding: {
          primary: "#3a3a3a",
          secondary: "#666666",
          gold: "#d4af37",
        },
      },
      borderColor: {
        wedding: "#e0e0e0",
      },
    },
  },
  plugins: [],
};
export default config;
