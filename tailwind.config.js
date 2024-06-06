/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':['DM Sans','sans-serif']
      },
      colors:{
        customGreen:"#0c4651",
        customWhite:"#F8F7F2",
        customYellow:"#E6FF2A",
        customGrey:"#F5F4F9",
      }
    },
  },
  plugins: [],
}

