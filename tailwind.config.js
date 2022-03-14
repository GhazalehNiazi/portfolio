module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        moveInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "80%": { transform: "translateX(10px)" },
          "100%": { transform: "rotate(-3deg)" },
        },
      },
      animation: {
        moveInLeft: "moveInLeft 1s ease-in-out ",
      },
    },
  },
  plugins: [],
};
