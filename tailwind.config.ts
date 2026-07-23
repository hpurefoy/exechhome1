import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: "#19469D",
        navy: {
          DEFAULT: "#0F2A5C",
          deep: "#0B1F42",
        },
        gold: {
          DEFAULT: "#D4AF37",
          antique: "#B8960C",
        },
        grey: {
          warm: "#686672",
        },
        paper: "#F7F7F5",
        cta: {
          DEFAULT: "#FFC629",
          shadow: "#E8AE00",
        },
        alert: "#FF3B3B",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        cta: "0 6px 0 0 #E8AE00, 0 14px 30px -8px rgba(232,174,0,0.55)",
        "cta-active": "0 2px 0 0 #E8AE00, 0 8px 16px -6px rgba(232,174,0,0.5)",
        card: "0 20px 60px -20px rgba(11,31,66,0.25)",
        gold: "0 20px 60px -20px rgba(212,175,55,0.45)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3D77A 0%, #D4AF37 45%, #B8960C 100%)",
        "navy-gradient": "linear-gradient(160deg, #0F2A5C 0%, #0B1F42 100%)",
        "navy-radial": "radial-gradient(circle at 30% 20%, rgba(25,70,157,0.55) 0%, rgba(11,31,66,0) 60%)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-fast": "marquee 18s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
