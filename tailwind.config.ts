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
          menu: '#3c3c3c',
        },
        White: {
          menu: { bg: '#dddddd', hover: '#d2d2d2' },
          selectFile: '#ececec',
          myVScodeText: '#4389ba',
        },
        cursor: {
          dark: '#aeafad',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
