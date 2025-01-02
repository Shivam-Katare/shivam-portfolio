module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
  theme: {
    extend: {
      scrollSnapType: {
        x: 'x',
        mandatory: 'mandatory',
      },
      scrollSnapAlign: {
        center: 'center',
      },
    },
  },
  variants: {
    extend: {
      scrollSnapType: ['responsive'],
      scrollSnapAlign: ['responsive'],
    },
  },
};