import type { Config } from 'tailwindcss'
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { base: { bg: '#0b0f19' } } } },
  plugins: [],
} satisfies Config
