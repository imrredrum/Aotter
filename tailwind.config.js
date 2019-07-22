// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#64c2c2',
      'bgi': '#eee'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#45babd',
      'gray': '#9b9b9b'
    }),
    extend: {}
  },
  variants: {}
}
