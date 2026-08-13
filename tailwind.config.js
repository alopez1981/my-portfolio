/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        "ink-soft": "#53545C",
        "ink-faint": "#8A8B96",
        mist: "#F2F3F7",
        periwinkle: "#E8EEFF",
        line: "#E4E6EE",
        blue: {
          DEFAULT: "#0052FF",
          50: "#EAF0FF",
          500: "#0052FF",
          600: "#0041CC",
          700: "#00339E",
        },
      },
      fontFamily: {
        sans: [
          "Poppins",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        pill: "999px",
      },
    },
  },
  plugins: [],
};
