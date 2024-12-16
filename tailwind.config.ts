import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],

        playfair: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          default: '#ffe4ae',
        },
        green: {
          default: 'rgb(81, 214, 44)',
          100: '#8BE27B',
          transparent: '#82FF1F96',
        },
        gray: {
          default: 'rgb(246, 246, 246)',
          100: '#F4F4F4',
          200: 'rgb(244, 244, 244)',
          300: 'rgb(241, 241, 241)',
          400: '#F1F1F1',
          500: 'rgb(229, 229, 229)',
          600: 'rgb(17, 17, 18)',
          700: '#111112',
          800: '#F1F1F1',
          900: '#E7E7E7',
          trans_6: 'rgba(255, 255, 255, 0.6)',
          trans_24: 'rgba(255, 255, 255, 0.24)',
          trans_12: 'rgba(255, 255, 255, 0.12)',
        },
        blue: {
          default: '#0099ff',
        },
        gradient: {
          default:
            'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 25.39590371621621%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 73.94777590090091%, rgba(0, 0, 0, 0) 100%)',
          linear_44:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 44%, rgb(0, 0, 0) 100%)',
          linear_26:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 26.432291666666668%, rgba(0, 0, 0, .8) 100%)',
          linear_0:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .7) 100%)',
          left: 'linear-gradient(90deg, rgba(153, 238, 255, 0) 77%, rgb(255, 255, 255) 100%)',
          linear_24:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .24) 100%)',
          radial:
            'radial-gradient(75% 62% at 50% 92.10000000000001%, #505052 0%, rgb(17, 17, 18) 100%)',
          radial_2:
            'radial-gradient(66% 75% at 50% 92.10000000000001%, #3c3c3d 0%, rgb(17, 17, 18) 100%)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
