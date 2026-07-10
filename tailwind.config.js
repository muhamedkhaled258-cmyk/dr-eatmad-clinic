/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          50:  '#fff1f5',
          100: '#ffe1ec',
          200: '#ffc4d9',
          300: '#ff9ec0',
          400: '#ff6ea3',
          500: '#f43f87',
          600: '#e01b6a',
          700: '#bc1057',
          800: '#9a1049',
          900: '#7f1140',
          950: '#4a0421'
        },
        brand: {
          pink: '#e91e63',
          pinkLight: '#fce4ec',
          pinkDark: '#ad1457',
          accent: '#ff4081',
          dark: '#1a1a1a',
          gray: '#4a4a4a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.06)',
        'soft-lg': '0 10px 40px rgba(0,0,0,0.08)',
        'pink-glow': '0 10px 40px rgba(233, 30, 99, 0.25)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.1)'
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(135deg, #f43f87 0%, #e91e63 50%, #ad1457 100%)',
        'gradient-pink-soft': 'linear-gradient(135deg, #fff1f5 0%, #ffe1ec 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(233,30,99,0.85) 0%, rgba(173,20,87,0.75) 100%)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      }
    }
  },
  plugins: []
}
