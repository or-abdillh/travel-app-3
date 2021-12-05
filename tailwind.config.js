module.exports = {
  purge: [
	'./src/**/*.html',
	'./src/**/*.vue',
	'./src/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       fontSize: {
          'xxs': '.75rem',
          'xxxs': '.65rem',
          'xxxxs': '.55rem',
          'xxxxxs': '.35rem'
        }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
