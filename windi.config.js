import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  extract: {
    exclude: [
      'node_modules',
      'public',
      'public',
      '.git',
      'dist',
      'mock',
      '.husky',
    ],
  },
  theme: {
    // colors: {
    //   primary: "#19EFFD",
    //   fff: "#fff",
    //   black: "#000"
    // },
    extend: {
      colors: {
        primary: "#19EFFD",
        fff: "#fff",
        teal: {
          100: '#096',
        },
      },
    },
  },
})