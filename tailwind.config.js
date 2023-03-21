module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{tsx,ts}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  plugins: [require('flowbite/plugin')],
  theme: {
    fontFamily: {
      amina: ['amina-reska'],
      roboto: ['Roboto']
    },
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 768px)' }
      }
    }
  }
}