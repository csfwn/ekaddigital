/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07111f',
          900: '#0b1526',
          800: '#10233f',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(2, 6, 23, 0.12)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(37, 99, 235, 0.12), transparent 28%)',
      },
    },
  },
  plugins: [],
}
