/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        fmblue: {
          one: "#483EFF",
          onelight: "#928CFF",
          lightest: "#EFF5FF",
          lighter: "#ABBCFF",
          light: "#BEE2FD",
          lightdark: "#164a8a",
          dark: "#022959",
        },
        fmgrey: {
          grey: "#9699aa",
          greylight: "#d6d9e6",
          greyligher: "#f8f9ff",
        },
        fmred: {
          red: "#ee374a",
        },
      },
    },
  },
  plugins: [],
};
