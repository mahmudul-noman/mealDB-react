/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3d66bf",

          "secondary": "#44ce5d",

          "accent": "#d622a0",

          "neutral": "#25282D",

          "base-100": "#F4F2F8",

          "info": "#8EDFF5",

          "success": "#6EE7A3",

          "warning": "#CEA912",

          "error": "#E43A53",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

