/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
        arabic: ['Tahoma', 'Segoe UI', 'Arial', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'heading': '0.02em',
      },
      colors: {
        sodic: {
          black: '#000000',
          white: '#FFFFFF',
          gray: '#F5F5F5',
          border: '#E5E5E5',
        },
      },
      spacing: {
        'section-sm': '3rem',
        'section-md': '5rem',
        'section-lg': '7rem',
      },
      borderRadius: {
        button: '0',
        sm: '0.125rem',
      },
    },
  },
  plugins: [],
}
