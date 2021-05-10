module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Khumb Sans"', 'Arial','sans-serif' ]
    },
    fontSize: {
      sm: ['14px', '18px'],
      base: ['16px', '26px'],
      lg: ['20px', '24px'],
      xl: ['24px', '29px'],
      xxl: ['24px', '34px'],
    },
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        accent: "var(--color-bg-accent)",
        accentLight: "var(--color-bg-accentLight)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        accentLight: "var(--color-text-accentLight)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        white: "var(--color-text-white)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
