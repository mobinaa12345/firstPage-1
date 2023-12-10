/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./public/images/6-Recoveredtt.jpg')",
      },
      fontFamily: {
        IranYekan: "IranYekan",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
