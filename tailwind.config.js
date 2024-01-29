/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
        // colors: {
        //     neutral:{
        //         800: "#0a5d83"
        //     }
        // }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

