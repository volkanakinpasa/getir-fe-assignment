module.exports = {
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
        primaryBlue: '#1EA4CE',
        primaryBlack: '#525252',
        black500: '#6F6F6F',
        grayscale: '#697488',
        primaryWhite: '#ffffff',
        white2: '#fefefe',
        gray1: '#FAFAFA',
        gray2: '#a8a8a8',
      },
    },
  },
  plugins: [],
};
