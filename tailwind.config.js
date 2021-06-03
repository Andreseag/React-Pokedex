const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      grass: {
        DEFAULT: '#8BBE8A',
        dark: '#62B958',
      },
      fire: {
        DEFAULT: '#FFAC5F',
        dark: '#FD7D24',
      },
      water: {
        DEFAULT: '#58ABF6',
        dark: '#4A90DA',
      },
      bug: {
        DEFAULT: '#8BD674',
        dark: '#8CB331',
      },
      white: colors.white,
      gray: 'rgba(23, 23, 27, 0.6)',
      poison: {
        DEFAULT: '#9F6E97',
        dark: '#A553CC',
      },
      normal: {
        DEFAULT: '#B5B9C4',
        dark: '#9DA0AA',
      },
      flying: {
        dark: '#748FC9',
      },
      electric: {
        DEFAULT: '#F2CB55',
        dark: '#EED535',
      },
      ground: {
        DEFAULT: '#F78551',
        dark: '#DD7748',
      },
      fairy: {
        DEFAULT: '#EBA8C3',
        dark: '#ED6EC7',
      },
      fighting: {
        DEFAULT: '#EB4971',
        dark: '#D04164',
      },
      rock: {
        DEFAULT: '#D4C294',
        dark: '#BAAB82',
      },
      steel: {
        DEFAULT: '#4C91B3',
        dark: '#417D9A',
      },
      psychic: {
        DEFAULT: '#FF6568',
        dark: '#EA5D60',
      },
      ice: {
        DEFAULT: '#91D8DF',
        dark: '#61CEC0',
      },
      ghost: {
        DEFAULT: '#8571BE',
        dark: '#556AAE',
      },
      dragon: {
        DEFAULT: '#7383B9',
        dark: '#0F6AC0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
