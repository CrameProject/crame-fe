// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // 프로젝트에 맞게 경로 수정
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SUIT"', "sans-serif"],
      },
      colors: {
        gold: {
          100: "#FDF1D6",
          200: "#F9D27E",
          300: "#F2B124",
          400: "#C18C18",
          500: "#916915",
          600: "#725411",
        },
        neutral: {
          100: "#F4F3F1",
          200: "#D9D6D3",
          300: "#BFB8B6",
          400: "#A5A09A",
          500: "#8D8881",
          600: "#6A6762",
          700: "#4F4D4A",
          800: "#343332",
        },
        bg: {
          default: "#FFFFFF",
          1: "#FFFDFC",
          2: "#FCFAF6",
        },
        system: {
          positive: "#EE0000", // 수익금
          negative: "#2D55F4", // 손실금
          highlight: "#F2B124", // 강조
          error: "#EE0000", // 삭제 및 경고
          success: "#5BC085", // 성공
        },
        text: {
          disabled: "#A5A09A",
          sub: "#6A6762",
          default: "#343332",
        },
      },
      fontSize: {
        // Title
        "T1-B": [
          "30px",
          { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "T2-SB": [
          "24px",
          { lineHeight: "35px", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "T2-B": [
          "24px",
          { lineHeight: "35px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "T3-SB": [
          "20px",
          { lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "T3-B": [
          "20px",
          { lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],

        // Body
        "B1-M": [
          "18px",
          { lineHeight: "28px", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        "B1-B": [
          "18px",
          { lineHeight: "28px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "B2-M": [
          "14px",
          { lineHeight: "20px", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        "B2-B": [
          "14px",
          { lineHeight: "20px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],

        // Caption
        "C1-M": [
          "12px",
          { lineHeight: "15px", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        "C1-B": [
          "12px",
          { lineHeight: "15px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "C2-M": [
          "10px",
          { lineHeight: "15px", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        "C2-B": [
          "10px",
          { lineHeight: "15px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
