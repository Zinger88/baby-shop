import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/topics/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f6f4ea',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      width: {
        '16.1': '4.1rem',
      }
    },
  },
  plugins: [],
};

export default config;