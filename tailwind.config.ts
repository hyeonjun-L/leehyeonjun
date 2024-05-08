import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          body: '#1e1e1e',
          activity: '#2c2c2c',
          anchor: {
            bg: '#252526',
            hover: '#2a2d2e',
            active: '#37373d',
          },
          disabled: '#858585',
          menu: { bg: '#3c3c3c', hover: '#454646' },
          selectFileMenu: { bg: '#252526', disabled: '#2d2d2d' },
        },
        White: {
          body: '#ffff',
          activity: '#2c2c2c',
          menu: { bg: '#dddddd', hover: '#d2d2d2' },
          selectFileMenu: { bg: '#ececec', disabled: '' },
          myVScodeText: '#4389ba',
        },
        cursor: {
          dark: '#aeafad',
        },
      },
    },
    keyframes: {
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(15px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeInUp: 'fadeInUp 0.6s ease-out',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
