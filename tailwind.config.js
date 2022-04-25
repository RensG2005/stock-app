module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "80px 80px 80px 80px rgba(0, 0, 0, 0.3)",
        "4xl": "160px 160px 160px 160px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
