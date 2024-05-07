/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'Green': 'hsl(75, 94%, 57%)',
        'White': 'hsl(0, 0%, 100%)',
        'Grey': 'hsl(0, 0%, 20%)',
        'Dark-Grey': 'hsl(0, 0%, 12%)',
        'Off-Black': 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
}