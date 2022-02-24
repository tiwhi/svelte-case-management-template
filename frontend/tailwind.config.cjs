module.exports = {
  content: ['./src/**/*.{html,css,svelte}'],
  theme: {
    fontFamily: {
      sans: ['Monserrat', 'sans-serif'],
      fancy: ['Pushster', 'cursive']
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
}
