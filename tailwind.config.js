/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json', 
    './layout/*.liquid', 
    './assets/*.liquid', 
    './sections/*.liquid', 
    './snippets/*.liquid', 
    './templates/*.liquid', 
    './templates/*.json', 
    './templates/customers/*.liquid', 
    './templates/customers/*.json',
  ],
  theme: {
    screens: {
      'ms': '320px',
      'mm': '480px',
      'ml': '568px',
      'ts': '768px',
      'tl': '868px',
      'ds': '1024px',
      'dm': '1200px',
      'dl': '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        ds: '2.25rem',
        dm: '2.75rem',
        dl: '0',
      }
    },
    fontFamily: {
      'body': ['nunito'],
    },
    extend: {
      borderRadius: {
        'cs': '0.625rem',
        'cl': '1.25rem',
      },
      maxHeight: {
        'cart': 'calc(100vh - 125px)',
        'col': 'calc(100vh - 360px)',
        'scol': 'calc(100vh - 480px)',
        'fil': 'calc(100vh - 60px)',
      },
      boxShadow: {
        'sp': '0 0 15px rgba(0, 0, 0, 0.05)',
        'mp': '0 0 15px rgba(0, 0, 0, 0.10)',
        'lp': '0 0 15px rgba(0, 0, 0, 0.15)',
        'mn': '0 10px 15px rgba(0, 0, 0, 0.05)',
        'ln': '0 15px 15px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        'primary': '#384FAE',
        'secondary': '#7992EB',
        'hover': '#27387A',
        'focus': '#5072FA',
        'text': '#231F20',
        'body': '#FAFAFA',
        'accent': '#61E59E',
        'accent-2': '#d9d9d9',
        'accent-3': '#1D1D1D',
        'accent-4': '#DB0032',
        'accent-5': '#1D295B',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translate(100%)' },
          '100%': { transform: 'translate(-100%)' },
        },
        movemob: {
          '0%': { transform: 'translate(140%)' },
          '100%': { transform: 'translate(-140%)' },
        },
        movetab: {
          '0%': { transform: 'translate(170%)' },
          '100%': { transform: 'translate(-170%)' },
        },
        movedes: {
          '0%': { transform: 'translate(130%)' },
          '100%': { transform: 'translate(-130%)' },
        },
        show: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      animation: {
        'x-left-move': 'move 17s linear infinite',
        'x-left-move-m': 'movemob 16s linear infinite',
        'x-left-move-t': 'movetab 15s linear infinite',
        'x-left-move-d': 'movedes 14s linear infinite',
        'y-down-show': 'show 5s linear',
      },
      fontSize: {
        'title': ['2.5rem', {
          lineHeight: '1',
          letterSpacing: '0.025em',
          fontWeight: '800',
        }]
      },
      transitionProperty: {
        'visibility': 'visibility',
        'height': 'height',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ]
}