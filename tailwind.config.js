/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'zen': {
          'bg': '#F8F5F0',       // Warm paper
          'text': '#2D3436',     // Soft charcoal
          'muted': '#7F8C8D',    // Grayish teal
          'primary': '#556B2F',  // Moss green
          'accent': '#BC4749',   // Stamp red
          'border': '#D1CCC0',   // Paper edge
          'surface': '#FFFFFF',  // Clean white
          'wood': '#8E735B',     // Muted wood
        }
      },
      fontFamily: {
        serif: ['var(--font-noto-serif)', 'serif'],
        sans: ['var(--font-noto-sans)', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
        'loose': '0.1em',
      },
    },
  },
  plugins: [],
};
