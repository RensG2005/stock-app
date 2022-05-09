module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 80px 80px rgba(0, 0, 0, 1)",
        "4xl": "0px 0px 160px 160px rgba(0, 0, 0, 1)",
        "dark-3xl": "0px 0px 160px 160px black",
        "dark-4xl": "0px 0px 160px 160px black",
      },
    },
  },
  plugins: [],
};
