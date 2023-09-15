import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {        
      fontSize: {
        '8xl': ['5rem', 'inherit'],
        '4xl':['2.5rem' , 'inherit']
      },
      colors: {
        'lightBlueGradient': '#74C6F1',
        'whiteGradient': '#F1F1E7',
        'orangePrimary': '#FF540A',
        'whitePrimary': "#F0EEE6"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',                              
      },
    },
  },
  plugins: [],
}
export default config
