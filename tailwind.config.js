const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#fde047",
          "secondary": "#d9f99d",   
          "accent": "#bbf7d0",     
          "neutral": "#f5f5f4",     
          "base-100": "#FFFFFF",   
          "info": "#3ABFF8",   
          "success": "#36D399",   
          "warning": "#d97706",   
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui")
  ]
};
