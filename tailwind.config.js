/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        main: "#DB4444",
        secondary: "#00FF66",
      },
      Shadow: {
        "xl": "0px 1px 13px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

