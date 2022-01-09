module.exports = {
  // purge: [],
  // process.env.NODE_ENV === 'development'
  //   ? []
  //   : ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        black: '#525252',
        grayscale: '#697488',
      }, // new
    },
  },
  plugins: [],
};
