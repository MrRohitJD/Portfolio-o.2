/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
          lighter: '#252525',
          border: '#2a2a2a',
        },
        gray: {
          text: '#9ca3af',
          light: '#e5e7eb',
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
