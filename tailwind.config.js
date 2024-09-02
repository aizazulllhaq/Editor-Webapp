/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '650px',
      // => @media (min-width: 768px) { ... }

      'lg': '850px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1150px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

