module.exports = {
  content: ["./views/layouts/main.handlebars"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
