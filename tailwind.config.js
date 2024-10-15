/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.css",
    "./src/components/login/login.tsx",
    "./src/components/forgetPassword/forgetPassword.tsx",
    "./src/components/dashboard/dashboard.tsx",
  ],
  theme: {
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

