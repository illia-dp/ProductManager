/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#101828",
        text: "#475467",
        white: "#ffffff",
        inputs: "#f7f7f7",
        badges: "#f2f4f7",
        gray: "#6c717b",
        "gray-light": "#dadde1",
        button: "#e44848",
        "button-hover": "#d84343",
        rating: "#ffc531",
        "custom-gray": "rgba(108, 113, 123, 0.4)",

        "main-dark": "#f5f5f5",
        "text-dark": "#d0d0d0",
        "inputs-dark": "#2a2a2a",
        "badges-dark": "#3a3a3a",
        "gray-dark": "#999999",
        "gray-light-dark": "#777777",
        "button-dark": "#ff6b6b",
        "button-hover-dark": "#ff4b4b",
        "rating-dark": "#ffd95a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        header: "72px",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
