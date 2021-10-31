module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "purple-pattern": "url('/src/resources/images/background.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#6066D0CC",
          dark: "#2F527B",
          darker: "#1D355D",
        },
        green: "#60BF88",
        red: "#EA8282",
        orange: "#F9A826",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
