/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← JSX/TSX にも対応
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-beach': "url('/src/assets/images/beach.jpg')",
      },
    },
  },
  plugins: [],
}
