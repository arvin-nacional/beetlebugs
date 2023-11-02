/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        gray: "#050505",
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        raleway: "Raleway",
        arial: "Arial",
      },
      borderRadius: {
        "33xl-7": "52.7px",
      },
    },
    fontSize: {
      "base-9": "16.9px",
      mini: "15px",
      "5xl": "24px",
      xl: "20px",
      "26xl": "45px",
      lg: "18px",
      "smi-7": "12.7px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
