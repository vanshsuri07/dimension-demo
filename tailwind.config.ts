import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
// @ts-expect-error Tailwind Config type does not include 'safelist' but it is supported
  safelist: [
    'animate-rotate-border',
    'bg-conic-[from_var(--border-angle)]',
    'bg-conic-[from_180deg]',
  ],
  theme: {
    extend: {
      keyframes: {
        'rotate-border': {
          '0%': { '--border-angle': '0deg' },
          '100%': { '--border-angle': '360deg' },
        },
      },
      animation: {
        'rotate-border': 'rotate-border 6s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
