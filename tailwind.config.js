import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: {
              DEFAULT: "#E95721",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#51829B",
              foreground: "#FFFFFF",
            },
            focus: "#BEF264",
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: {
              DEFAULT: "#E95721",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#51829B",
              foreground: "#FFFFFF",
            },
            focus: "#BEF264",
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
