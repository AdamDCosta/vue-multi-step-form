/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "marine-blue": "hsl(213, 96%, 18%)",
      "purplish-blue": "hsl(243, 100%, 62%)",
      "pastel-blue": "hsl(228, 100%, 84%)",
      "light-blue": "hsl(206, 94%, 87%)",
      "strawberry-red": "hsl(354, 84%, 57%)",
      "cool-gray": "hsl(231, 11%, 63%)",
      "light-gray": "hsl(229, 24%, 87%)",
      "neutral-magnolia": "hsl(217, 100%, 97%)",
      "neutral-alabaster": "hsl(231, 100%, 99%)",
      "primary-white": "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      primary: ["Ubuntu", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'progress-mobile': "url('/src/assets/images/bg-sidebar-mobile.svg')",
        'progress-desktop': "url('/src/assets/images/bg-sidebar-desktop.svg')",
      }
    },
  },
  plugins: [],
};
