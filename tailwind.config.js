module.exports = {
  content: ["./views/layouts/main.handlebars"],
  theme: {
    extend: {},
    container: {
      center: true,
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
