/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        width: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "100%",
        },
      },
      margin: {
        "50px": "50px",
        "100px": "100px",
        "150px": "150px",
        "200px": "200px",
      }
    },
  },
  plugins: [],
}