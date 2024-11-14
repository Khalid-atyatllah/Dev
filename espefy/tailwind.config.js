module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans your React files
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Custom gold color
                          brown6d: "#6d5322",

        brown432: "#432e26",
        beigeA08: "#a08e6e",
        lightYellowE7: "#e7d896",
        creamE1: "#e1dbc5",
        gray4f: "#4f4642",
        goldD9: "#d9bc7b",
        brown68: "#685346",
        grayB6: "#b6b0a4",
        gray7c: "#7c7c7c",
        beigeB2: "#b2a37c",
        gray70: "#70675e",
      },
      width: {
        '3/10': '30%', // Custom 30% width
        '7/10': '70%', // Custom 70% width
      },
    },
  },
  plugins: [],
};
