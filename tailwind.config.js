/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryBackground: "#191919",
      secondaryBackground: "#202020",
      primaryColor: "#EFE0E0",
      secondaryColor: "#D1D5DB",
      tertiaryColor: "#BAAFAE",
      rareColor: "#FFFFFF80",
    },
    fontFamily: {
      sans: [
        "inter",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};
