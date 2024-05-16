/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: "BundesSansWeb",
      },
    },
  },
  presets: [require("@digitalservice4germany/style-dictionary/tailwind")],
  plugins: [require("@digitalservice4germany/angie")],
};
