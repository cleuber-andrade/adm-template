module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safeList: [
    /^bg-/,
    /^to-/,
    /^from-/,
  ],

  darkMode: 'class', //or 'media'(é como se aplicasse o modo dark em algo mais específico) or 'class'(é utilizado em de um modo mais abrangente - como html, body e etc...)
  theme: {
    extend: {

    },
  },
  plugins: [],
}
