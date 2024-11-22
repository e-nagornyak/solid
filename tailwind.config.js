/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: () => ({
      center: true,
      padding: {
        sm: "16px",
        md: "16px",
        lg: "16px",
        xl: "0px",
      },
    }),
    screens: {
      sm: "360px",
      md: "452px",
      lg: "999px",
      xl: "1000px",
    },
    extend: {
      transitionDuration: {
        80: "80ms",
        120: "120ms",
      },
      colors: {
        "c-gray": {
          DEFAULT: "#363A43",
          50: "#B0B4BE",
          100: "#E4E6EC",
          200: "#797E8B",
          300: "#666C7B",
        },
        border: {
          DEFAULT: "#C7C9D1",
        },
        primary: {
          DEFAULT: "hsl(144,97,27)",
          "l-8": "hsl(144,97,19)",
          "l-4": "hsl(144,97,23)",
          "l+4": "hsl(144,97,31)",
        },
        secondary: {
          DEFAULT: "#F7F7F9",
        },
        black: {
          DEFAULT: "hsl(0,0,0)",
          "l-4": "hsl(0,0,4)",
          "l+4": "hsl(0,0,8)",
        },
        boxShadow: {
          input: "0px 2px 4px -2px rgba(0, 0, 0, 0.12)",
        },
      },
    },
  },

  plugins: [],
};
