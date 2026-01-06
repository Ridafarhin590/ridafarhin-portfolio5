/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",       // blue-600
        primaryLight: "#3b82f6",  // blue-500
        bgDark: "#020617",
        cardDark: "#0b1220"
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
