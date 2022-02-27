module.exports = {
  content: ["./views/layouts/main.handlebars"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
