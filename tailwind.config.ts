import type { Config } from 'tailwindcss'

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
  
      backgroundImage: {
        
      },
    },
  },
  plugins: [],
}
export default config
