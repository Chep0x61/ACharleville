/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    colors: {
      'main': '#212529',
      'yellow': '#ffd000',
      'night': '#4a4e69',
      'check': '#3fc66c',
      'snow': '#f9f7f3',
      'test': '#d9dcd6',
      'orange': '#ffaa00',
      'flash': '#f7b538',
      'retry': '#353A47',
    },
    extend: {
      'screens': {
        '2xl': '1900px',
        '3xl': '1920px',
      },
      fontFamily: {
        'sawai': ['sawai', 'sans-serif'],
      },
      'animation': {
          'text':'text 5s ease infinite',
      },
      'keyframes': {
          'text': {
              '0%, 100%': {
                 'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                 'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
      }
    },
  },
  plugins: [require("daisyui")],
}

