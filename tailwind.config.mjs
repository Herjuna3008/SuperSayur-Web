/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}" // boleh tetap ada jika pakai src, tapi tambahkan yang lain juga!
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16a34a" // Tailwind green-600 as primary color
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out"
      }
    }
  },
  plugins: []
}
