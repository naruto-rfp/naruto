/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/public/index.html', './client/src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blackCoral: '#595f72',
        darkBlueGray: '#575d90',
        artichoke: '#84a07c',
        juneBud: '#c3d350',
        greenYellow: '#e6f14a',
      },
    },
  },
  plugins: [],
}
