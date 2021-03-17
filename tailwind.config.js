const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: false,
    content: ['public/**/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
      extend: {
        fontFamily: {
          body : ['OpenSans']
        },
        colors : {
          primary : '#ff0000',
          secondary: '#00ff00',
          accent : '#0000ff',
          white: colors.white,
          black: colors.black,
          blau: colors.blue,
          gelb: colors.yellow,
          grau: colors.blueGray,
        }
    },
    debugScreens: {
      position: ['top', 'left'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
