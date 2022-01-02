module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: "'Fira Code', serif",
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Use the 'prose' class to format typography – https://tailwindcss.com/docs/typography/
    require('@tailwindcss/line-clamp'), // Provides utilities for visually truncating text after a fixed number of lines – https://github.com/tailwindlabs/tailwindcss-line-clamp
  ],
}