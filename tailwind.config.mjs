/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F6F6",
        foreground: "#222222",
        secondary: "#333333",
        tertiary: "#666666",
        footer: "#F0F0F0",
        footerText: "#444444",
        linkColor: "#0056B3",
        buttonBg: "#111111",
        buttonText: "#FFFFFF",
        secondaryButtonBg: "#FFFFFF",
        secondaryButtonText: "#222222",
        secondaryButtonBorder: "#E0E0E0",
        secondaryButtonHover: "#F0F0F0",
        dotColor: "#E0E0E0",
        cardBorder: "#EEEEEE",
        divider: "#EEEEEE",
      },
      borderRadius: {
        'button': '6px',
        'card': '8px',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'cardHover': '0 6px 8px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['48px', '1.1'],
        'hero-mobile': ['36px', '1.2'],
        'card-heading': '22px',
      },
      spacing: {
        'section': '80px',
        'section-mobile': '60px',
        'section-heading': '40px',
        'card-padding': '32px',
        'card-margin': '24px',
        'icon-margin': '16px',
        'heading-margin': '16px',
        'button-padding-x': '24px',
        'button-padding-y': '12px',
        'nav-button-padding-x': '24px',
        'nav-button-padding-y': '10px',
      },
      maxWidth: {
        'content': '1200px',
      },
      padding: {
        'container': '5%',
      },
    },
  },
  plugins: [],
} 