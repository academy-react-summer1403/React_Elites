/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.css",
    "./src/components/login/login.tsx",
    "./src/components/forgetPassword/forgetPassword.tsx",
    "./src/components/dashboard/dashboard.tsx"
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'DannaThin': ['DannaThin'],
      'DannaExtraLight': ['DannaExtraLight'],
      'DannaLight': ['DannaLight'],
      'DannaNormal': ['DannaNormal'],
      'DannaDemiBold': ['DannaDemiBold'],
      'DannaBold': ['DannaBold'],
      'DannaExtraBold': ['DannaExtraBold'],
    },
    extend: {},
  },
  plugins: [],
}

