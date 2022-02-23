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
    variants: {
      neumorphismFlat: ['responsive', 'active'],
      neumorphismConcave: false,
      neumorphismConvex: ['responsive', 'hover'],
      neumorphismInset: ['focus', 'active'],
    },
    neumorphismSize: {
      xs: '0.05em',
      sm: '0.1em',
      default: '0.2em',
      lg: '0.4em',
      xl: '0.8em',
    },
    neumorphismColor: {
      gray: {
        50: '#c5ccd3',
        100: '#49515a',
        200: '#F5CEC7',
      },
    },
  },
  plugins: [
    require('tailwindcss-neumorphism')
  ],
}
