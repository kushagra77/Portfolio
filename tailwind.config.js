/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          paper: "#E8E4DD",
          signal: "#E63B2E",
          offwhite: "#F5F3EE",
          black: "#111111",
          muted: "#D1CDBF",
        }
      },
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],
        serif: ["'DM Serif Display'", "serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
