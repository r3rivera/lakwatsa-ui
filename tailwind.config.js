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
            "primary": "#D1C1D7",
            "secondary": "#F6CBD1",
            "accent": "#B4E9D6",
            "neutral": "#70ACC7",
            "base-100": "#FFFFFF",
            "info": "#3ABFF8",
            "success": "#36D399",
            "warning": "#FBBD23",
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
