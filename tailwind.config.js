/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — black base with golden / yellow accents
        bg: {
          DEFAULT: '#0a0a0a',
          soft: '#121212',
          card: '#161616',
          elev: '#1c1c1c',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f5c518',
          600: '#d4a017',
          700: '#a07d12',
          800: '#6b5410',
          900: '#3d3008',
        },
        ink: {
          DEFAULT: '#f5f5f5',
          muted: '#a3a3a3',
          dim: '#737373',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Slightly tighter scale, very readable
        'display-xl': ['clamp(2.5rem, 5vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(245,197,24,0.35)',
        'gold-sm': '0 4px 20px -6px rgba(245,197,24,0.25)',
        card: '0 8px 30px -10px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f5c518 0%, #fbbf24 50%, #d4a017 100%)',
        'gold-radial': 'radial-gradient(circle at 30% 30%, rgba(245,197,24,0.18), transparent 60%)',
        'card-gradient': 'linear-gradient(160deg, #161616 0%, #1c1c1c 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245,197,24,0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(245,197,24,0)' },
        },
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
