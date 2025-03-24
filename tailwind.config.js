/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "504px",
        md: "600px",
        lg: "798px",
        xl: "1008px"
      },
      colors: {
        green: "#1db954",
        lightBlack: "#212121",
        blackColor: "#121212",
        grayColor: "#535353",
        lightGray: "#b3b3b3"
      },
      fontFamily: {
        custom: ["proxima","customFont"],
      }
    },
  },
  plugins: [
    
  ],
}