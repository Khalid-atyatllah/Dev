/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans your React files
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Custom gold color
      },
      width: {
        '3/10': '30%', // Custom 30% width
        '7/10': '70%', // Custom 70% width
      },
    },
  },
  plugins: [],
};
