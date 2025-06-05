/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ['Crimson Pro', 'Georgia', 'serif'],
    },
    extend: {
      colors: {
        background: "#F6F6F6",
        foreground: "#222222",
        secondary: "#333333",
        tertiary: "#666666",
        footer: "#E6E6E6",
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
      fontSize: {
        'hero': ['56px', '1.1'],
        'hero-mobile': ['40px', '1.2'],
        'card-heading': '24px',
      },
      spacing: {
        'section': '120px',
        'section-mobile': '80px',
        'section-heading': '48px',
        'card-padding': '32px',
        'card-margin': '24px',
        'icon-margin': '16px',
        'heading-margin': '20px',
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
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',
            a: {
              color: '#0056B3',
              '&:hover': {
                color: '#004494',
              },
            },
            h2: {
              color: '#222222',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '0.5em',
            },
            h3: {
              color: '#222222',
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: '#0056B3',
              color: '#444444',
              fontStyle: 'italic',
            },
            code: {
              color: '#444444',
              backgroundColor: '#F6F6F6',
              padding: '0.2em 0.4em',
              borderRadius: '3px',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 