module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      neue:
        '"NeueMachina", NeueMachina, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Oxygen-Sans, Ubuntu, Cantarell, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      serif: '"Eiko", Eiko, Lora, ui-serif, serif',
      mono:
        '"Jetbrains Mono", "SF Mono", SFMono-Regular, ui-monospace, "Roboto Mono", monospace',
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.white"),
            h1: {
              color: theme("colors.white"),
              fontFamily: theme("fontFamily.serif"),
              fontSize: theme("fontSize.5xl"),
              fontWeight: theme("fontWeight.black"),
            },
            h2: {
              color: theme("colors.white"),
              fontFamily: theme("fontFamily.serif"),
              fontSize: theme("fontSize.4xl"),
              fontWeight: theme("fontWeight.semibold"),
            },
            h3: {
              color: theme("colors.white"),
              fontFamily: theme("fontFamily.serif"),
              fontSize: theme("fontSize.3xl"),
              fontWeight: theme("fontWeight.semibold"),
            },
            h4: {
              color: theme("colors.white"),
              fontFamily: theme("fontFamily.serif"),
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.semibold"),
            },
            p: {
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
            },
            a: {
              color: theme("colors.white"),
              textDecoration: "underline",
            },
            code: {
              color: theme("colors.white"),
            },
            pre: {
              background: 'rgba(255,255,255,0.1)',
            },
          },
        },
        DEFAULT: {
          color: theme("colors.black"),
          fontSize: theme("fontSize.lg"),
          h1: {
            color: theme("colors.black"),
            fontFamily: theme("fontFamily.serif"),
            fontSize: theme("fontSize.5xl"),
            fontWeight: theme("fontWeight.black"),
          },
          h2: {
            color: theme("colors.black"),
            fontFamily: theme("fontFamily.serif"),
            fontSize: theme("fontSize.4xl"),
            fontWeight: theme("fontWeight.semibold"),
          },
          h3: {
            color: theme("colors.black"),
            fontFamily: theme("fontFamily.serif"),
            fontSize: theme("fontSize.3xl"),
            fontWeight: theme("fontWeight.semibold"),
          },
          h4: {
            color: theme("colors.black"),
            fontFamily: theme("fontFamily.serif"),
            fontSize: theme("fontSize.2xl"),
            fontWeight: theme("fontWeight.semibold"),
          },
          p: {
            marginTop: theme("spacing.4"),
            marginBottom: theme("spacing.4"),
          },
          a: {
            color: theme("colors.black"),
            textDecoration: "underline",
          },
          code: {
            color: theme("colors.black"),
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};