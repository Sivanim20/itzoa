/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
            variants: {
          scrollbar: ['rounded'],
        },
      animation: {
        float: "float 6s ease-in-out infinite",
        bounceSlow: "bounceSlow 3s ease-in-out infinite",
        fadeIn: "fadeIn 2s ease-in-out forwards",
        slideUp: "slideUp 1s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

