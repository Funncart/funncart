module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "550px",
      md: "1024px",
      lg: "1400px",
      xl: "1800px",
    },

    extend: {
      colors: {
        primary: "#eab308",
        secondary: "#eab308",
        black: "#1f2937",
      },
    },
  },
};
