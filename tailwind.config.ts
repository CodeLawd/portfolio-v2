import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        gold: '#fac748',
        // Custom professional palette extensions if needed
        // Using default Slate/Zinc/Neutral is often best for "Senior" look
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#d4d4d8', // zinc-300
            a: {
              color: '#fac748', // gold
              '&:hover': {
                color: '#fac748', // gold
              },
              textDecoration: 'none',
            },
            strong: {
              color: '#fafafa', // zinc-50
              fontWeight: '600',
            },
            code: {
              color: '#fac748', // gold
              backgroundColor: '#18181b', // zinc-900
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#18181b', // zinc-900
              border: '1px solid #27272a', // zinc-800
              color: '#d4d4d8', // zinc-300
              fontSize: '0.875rem',
              lineHeight: '1.5',
              padding: '1rem',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              fontSize: 'inherit',
              color: 'inherit',
            },
            h1: {
              color: '#fafafa', // zinc-50
              fontWeight: '700',
              fontSize: '1.875rem',
              marginBottom: '2rem',
            },
            h2: {
              color: '#fafafa',
              fontWeight: '700',
              fontSize: '1.5rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: '#fafafa',
              fontWeight: '600',
              fontSize: '1.25rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              color: '#d4d4d8',
              lineHeight: '1.75',
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            blockquote: {
              color: '#a1a1aa', // zinc-400
              borderLeftColor: '#fac748', // gold
              fontStyle: 'italic',
              paddingLeft: '1rem',
            },
            ul: {
              color: '#d4d4d8',
            },
            ol: {
              color: '#d4d4d8',
            },
            li: {
              color: '#d4d4d8',
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            'li::marker': {
              color: '#71717a', // zinc-500
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
