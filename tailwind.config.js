module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: ['./pages/**/*.js'],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
      },
      colors: {
        primary: {
          50:  '#eaf8f6',
          100: '#cef7ee',
          200: '#9cf3d9',
          300: '#5beabf',
          400: '#5afba6',
          500: '#07c86d',
          600: '#07b154',
          700: '#0d934a',
          800: '#107341',
          900: '#105e38',
        },
        secondary: {
          50:  '#f0f9fb',
          100: '#d7f7f8',
          200: '#a8eff0',
          300: '#6de3e9',
          400: '#13cef8',
          500: '#0daecf',
          600: '#0b8eb6',
          700: '#107292',
          800: '#11586c',
          900: '#104655',
        },
        tertiary: {
          50:  '#eaf8f8',
          100: '#ccf7f2',
          200: '#99f2e1',
          300: '#23eddc',
          400: '#19d9b1',
          500: '#07c48e',
          600: '#07ab71',
          700: '#0c8d5f',
          800: '#106e4e',
          900: '#105a41',
        },
        gray: {
          50: '#F6F7F8',
          100: '#EEEFF2',
          200: '#DADDE2',
          300: '#C0C4CE',
          400: '#A7ACB9',
          500: '#7C8498',
          600: '#5E6678',
          700: '#474D5C',
          800: '#343A46',
          900: '#21252E',
        }
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
};
