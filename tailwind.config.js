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
        black: '#525252',
        black500: '#6F6F6F',
        grayscale: '#697488',
      },
    },
  },
  plugins: [],
};
