import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
    backgroundImage:{
      'bottom' : "url('/bottom.jpg')",
    },

    fontFamily: {
      heading: ["Akaya Telivigala", "cursive"],
      main: ["Young Serif", "serif"],
    },
    animation: {
      'moveLR': 'moveLR 1s ease-in-out',
      'moveRL': 'moveRL 1s ease-in-out',
      'moveDT': 'moveDT 1s ease-in-out',
      'moveTD': 'moveTD 1s ease-in-out',
      'show': 'show 1s ease-in-out',
    },
    keyframes: {
      moveLR: {
        '0%': {transform: "translateX(-200px)", opacity: '0'},
        '100%': {transform: 'translateX(0px)', opacity: '1'}
      },
      moveRL: {
        '0%': {transform: "translateX(200px)", opacity: '0'},
        '100': {transform: "translateX(0px)", opacity: '1'}
      },
      moveDT: {
        '0%': {transform: "translateY(100px)", opacity: '0'},
        '100%': {transform: "translateY(0)", opacity: '1'}
      },
      moveTD: {
        '0%': {transform: "translateY(-100px)", opacity: '0'},
        '100%': {transform: "translateY(0)", opacity: '1'}
      },
      show: {
        '0%': {opacity: '0.2'},
        '50%': {opacity: '0.5'},
        '100': {opacity: '1'}
      }
    }
  },
  plugins: [],
}
export default config
