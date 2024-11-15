/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          '100': '#F8DEB0',
          '200': '#F5CCA0',
          '300': '#B3895D',
          '400': '#E48F45',
          '500': '#994D1C',
          '600': '#6B240C',
          '800': '#481401',
          '900': '#391D0C',
        },
        pink: {
          '100': '#fff6dc',
          '200': '#ffd8cc',
          '300': '#ffc6ac',
          '400': '#fb9aac',
          '500': '#fb928e',
          '600': '#940128',
          '700': '#800022',
          '800': '#550015',
        },
        grey: {
          '50': '#d2d2d2',
          '100': '#bababa',
          '200': '#929292',
          '300': '#777777',
          '400': '#5c5c5c',
          '500': '#434343',
          '600': '#363434',
        },
        blue: {
          '100': '#7797b0',
          '300': '#9e9fa5',
          '400': '#44628d',
          '500': '#18346a',
        },
      },
      fontFamily: {
        Cinzel: ['Cinzel', 'serif'],
        Lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
