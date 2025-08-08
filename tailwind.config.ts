import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Remove the keyframes and animation from here since you're defining them in CSS
      // This prevents conflicts between Tailwind config and CSS definitions
    },
  },
  plugins: [],
}

export default config