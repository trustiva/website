import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#a8e6cf",
        beige: "#f0f0e8",
        "mint-dark": "#8ed3b6",
        "beige-dark": "#e0e0d8",
      },
      animation: {
        "leaf-grow": "leafGrow 1.5s ease-out forwards",
        "fade-up": "fadeUp 0.5s ease-out forwards",
      },
      keyframes: {
        leafGrow: {
          "0%": { transform: "scale(0) rotate(-45deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        fadeUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}

export default config 