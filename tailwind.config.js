module.exports = {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/app/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#16a34a", // hijau utama
          }
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          },
          slideDown: {
            '0%': { opacity: 0, transform: 'translateY(-10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          }
        },
        animation: {
          fadeIn: "fadeIn 0.6s cubic-bezier(0.4,0,0.2,1) both",
          slideDown: "slideDown 0.25s cubic-bezier(0.4,0,0.2,1)"
        }
      }
    },
    plugins: [],
  }
  