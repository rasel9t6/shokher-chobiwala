import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%)',
      },

      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],

        playfair: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        olive: {
          DEFAULT: '#001402',
          '50': '#f9f9f7',
          '100': '#f0f1eb',
          '200': '#dbe1d2',
          '300': '#b3c0a6',
          '400': '#7d9975',
          '500': '#5e784e',
          '600': '#4b5e36',
          '700': '#3a462a',
          '800': '#282f1f',
          '900': '#0a1400',
        },
        gold: {
          DEFAULT: '##ffa82e',
          '50': '#2d1c08',
          '100': '#422d0a',
          '200': '#60420b',
          '400': '#7d580b',
          '500': '#9a7111',
          '600': '#ba9024',
          '700': '#f1dd74',
          '800': '#f9efb3',
          '900': '#fbf9f3',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

