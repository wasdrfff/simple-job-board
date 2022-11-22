/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);",
      },
      maxWidth: {
        350: "1400px",
      },
      width: {
        full: "100%",
      },
      colors: {
        gray: "rgba(56, 65, 93, 0.355988)",
        "custom-blue": "rgba(85, 105, 158, 0.3)",
        turquoise: "rgba(161, 177, 219, 0.317343)",
        rusty: "rgba(255, 207, 0, 0.15);",
        "custom-green": "rgba(255, 255, 255, 0.669635)",
        "gray-squere": "rgba(56, 69, 100, 0.632594)",
      },
      padding: {
        button: "padding:18px 30px",
      },
      fontSize: {
        custom: ["28px", "34,1px"],
      },
      screens: {
        mobile: { raw: "(max-width: 600px)" },
        tablet: { raw: "(max-width: 800px)" },
        desktop: { raw: "(max-width:1300px)" },
      },
    },
  },
  plugins: [],
};
