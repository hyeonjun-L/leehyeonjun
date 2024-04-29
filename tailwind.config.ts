import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1e1e1e',
          200: '#252526',
          300: '#2c2c2c',
          400: '#2a2d2e',
          500: '#37373d',
          600: '#858585',
        },
      },
    },
  },
  plugins: [],
};

export default config;
