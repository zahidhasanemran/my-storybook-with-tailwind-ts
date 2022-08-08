/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1366px",
      "3xl": "1440px",
      "4xl": "1560px",
      "5xl": "1920px",
    },
    colors: {
      primary: {
        default: "#15C39A",
        525: "#13B58F",
        500: "#15C39A",
        50: "#E8F9F5",
      },
      secondary: {
        main: "#21263B",
      },
      warning: {
        50: "#FFFAEB",
        300: "#FEC84B",
        500: "#F79009",
        600: "#DC6803",
        900: "#7A2E0E",
      },
      gray: {
        900: "#21263B",
        500: "#666C85",
        400: "#98A2B3",
        300: "#D0D5DD",
        200: "#E4E7EC",
        100: "#F2F3F7",
        50: "#F9F9FB",
      },
      success: {
        900: "#054F31",
        600: "#039855",
        500: "#ECFDF3",
      },
      purple: {
        900: "#3E1C96",
        600: "#6938EF",
        500: "#F4F3FF",
      },
      blue: {
        light: {
          900: "#0B4A6F",
          600: "#0086C9",
          500: "#F0F9FF",
        },
      },
      white: "#fff",
      transparent: "transparent",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
    },
    fontSize: {
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      28: "28px",
      30: "30px",
      32: "32px",
      36: "36px",
      40: "40px",
      42: "42px",
      48: "48px",
      60: "60px",
    },
    lineHeight: {
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      28: "28px",
      30: "30px",
      32: "32px",
      36: "36px",
      38: "38px",
      40: "40px",
      42: "42px",
      44: "44px",
      48: "48px",
      60: "60px",
      72: "72px",
    },
    boxShadow: {
      register: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      card: "0px 75px 150px rgba(52, 64, 84, 0.14)",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      content: {
        // pattern: 'url("/assets/pattern.png")',
      },
    },
  },
  plugins: [],
}
