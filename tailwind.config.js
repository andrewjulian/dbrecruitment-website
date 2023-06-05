/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        stock: "url('./hero.jpeg')"
      },
    },
  },
  plugins: [],
};
