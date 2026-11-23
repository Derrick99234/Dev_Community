/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: 'rgb(59 130 246)',
        lightBlue: 'rgb(186 230 253)',
      }
    },
  },
  plugins: [],
};
