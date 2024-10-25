/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2A818",
        light: "#F6F7F7",
        dark: "#221A23",
      },
      fontFamily: {
        primary: "Gill Sans",
        heading: "Impact",
      },
    },
  },
  plugins: [],
};
