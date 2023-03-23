import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  content: ["./src/**/*.{tsx,ts}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
})