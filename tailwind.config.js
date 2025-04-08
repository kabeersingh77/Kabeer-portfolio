/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      clipPath:{
        spotlight: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  variants:{
    extend:{
      content: ['after'],
    },
  },
  plugins: [],
}

