module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '13Blue': '#0c0c91',
        '13Green': '#05e273',
        '13Pink': '#fff2f8'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
