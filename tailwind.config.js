/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#0c728c",

        "secondary": "#afd7ed",

        "accent": "#2c5593",

        "neutral": "#281c30",

        "base-100": "#30303b",

        "info": "#83a0f6",

        "success": "#69e89e",

        "warning": "#e99f16",

        "error": "#e05548",
      },
    }],
  },
  theme: {
    themes: ["light"],
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}

