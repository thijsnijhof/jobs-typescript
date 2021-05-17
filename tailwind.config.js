module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    minHeight: {
      '136': '136px',
      '160': '160px',
    },
    backgroundSize: {
      '136': '100% 136px',
      '160': '100% 160px',
    },
    fontFamily: {
      'sans': ['"Khumbh Sans"', 'Arial','sans-serif' ]
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
      zIndex: {
        '-1': '-1',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
