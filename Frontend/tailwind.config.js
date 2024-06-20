import { buildErrorMessage } from 'vite';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // slate:[#313131]
      }
    },
  },
  plugins: [],
};
