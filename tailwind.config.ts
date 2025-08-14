import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "10px",
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        stodirPrimary: "#002350",
        stodirSecondary: "#5C7F95",
        stodirGrey: "#828282",
        stodirLightGrey: "#C3C3C3",
        stodirBackground: "#FAF9F7",
      },
    },
  },
  plugins: [],
} satisfies Config;
