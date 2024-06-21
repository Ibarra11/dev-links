/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Instrument Sans", "sans-serif"],
      },
      colors: {
        brand: {
          purple: {
            100: "hsl(252, 100%, 96%)",
            200: "hsl(252, 100%, 84%)",
            300: "hsl(252, 100%, 62%)",
          },
          gray: {
            100: "hsl(0, 0%, 98%)",
            200: "hsl(0, 0%, 85%)",
            300: "hsl(0, 0%, 45%)",
          },
          red: "hsl(0, 100%, 61%)",
        },
      },
      keyframes: {
        "toast-enter": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "toast-exit": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-200%)" },
        },
      },
      animation: {
        "toast-enter":
          "toast-enter 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "toast-exit": "toast-exit 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         brown: {
//           50: '#fdf8f6',
//           100: '#f2e8e5',
//           200: '#eaddd7',
//           300: '#e0cec7',
//           400: '#d2bab0',
//           500: '#bfa094',
//           600: '#a18072',
//           700: '#977669',
//           800: '#846358',
//           900: '#43302b',
//         },
//       }
//     },
//   },
// }
