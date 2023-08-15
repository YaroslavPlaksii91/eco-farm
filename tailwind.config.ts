import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        small: '360px',
        mobile: '480px',
        tablet: '744px',
        desktop: '1280px',
        onlyMobile: { max: '743.8px' },
        onlyTablet: { min: '744px', max: '1279.8px' },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          tablet: '40px',
          desktop: '32px',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        moonlessNight: {
          '5%': '#F5F5F5',
          '10%': '#EAEAEA',
          '20%': '#D5D5D6',
          '40%': '#ACABAC',
          '60%': '#828183',
          '80%': '#595759',
          '100%': '#2F2D30',
        },
        blueIce: {
          '10%': '#F1F1F5',
          '20%': '#E2E4EB',
        },
        pampas: {
          '10%': '#FAF8F2',
          '20%': '#F5F1E5',
          '40%': '#ECE4CA',
          '60%': '#E2D6B0',
        },
        amberlight: {
          '60%': '#EED8C7',
          '80%': '#E8CBB5',
          '100%': '#E2BEA2',
        },
        artichokeGreen: {
          '20%': '#DBE2D9',
          '40%': '#B7C5B3',
          '60%': '#93A78D',
          '80%': '#6F8A67',
          '100%': '#4B6D41',
        },
      },

      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
