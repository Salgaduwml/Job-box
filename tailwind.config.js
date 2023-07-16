/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blueColor: "#1B6EF3",
        lightBlue: "#E7F0FE",
        greyIsh: "#f1f4f8",
        cardShadow: "#f7f8f9",
        textColor: "#252b36",
      },
      boxShadow: {
        "3xl": "0px 4px 20px 0px rgba(27, 110, 243, 0.10);",
      },
    },
  },
  plugins: [],
};
