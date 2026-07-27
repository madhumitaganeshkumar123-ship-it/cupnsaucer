import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Derived directly from the Cup N Saucer logo
        ink: {
          DEFAULT: "#14110C", // warm espresso near-black
          soft: "#2A241B",
        },
        cream: {
          DEFAULT: "#FBF8F1", // paper
          deep: "#F3EDE0",
        },
        gold: {
          DEFAULT: "#A6792E", // primary bronze gold (the mark)
          light: "#C9A24B", // highlight / hover
          dark: "#8A6322",
        },
        taupe: {
          DEFAULT: "#6E6557", // muted secondary text
          light: "#9A9081",
        },
        line: "#E4DDCD", // hairline on cream
      },
      fontFamily: {
        // Wired up via next/font in layout.tsx (CSS variables)
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.4rem, 5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.9rem, 3.4vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        container: "1240px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        rise: {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
