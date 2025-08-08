/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "animate-rotate-border",
    "bg-conic-[from_var(--border-angle)]",
    "bg-conic-[from_180deg]",
  ],
  theme: {
    extend: {
      keyframes: {
        "rotate-border": {
          "0%": { "--border-angle": "0deg" },
          "100%": { "--border-angle": "360deg" },
        },
      },
      animation: {
        "rotate-border": "rotate-border 6s linear infinite",
      },
    },
  },
};
