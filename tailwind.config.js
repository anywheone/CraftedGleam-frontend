/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← JSX/TSX にも対応
  ],
  theme: {
    extend: {
      backgroundImage: {
        'crafted-gleam': "url('./assets/images/bg-crafted-gleam.png')",
      },
    },
  },
  plugins: [],
}
