/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      ui:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Oxygen-Sans, Ubuntu, Cantarell, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      prose: "Lora, ui-serif, serif",
      mono:
        '"Jetbrains Mono", "SF Mono", SFMono-Regular, ui-monospace, "Roboto Mono", monospace',

    },
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            h3: {
              color: theme("colors.white"),
            },
            h4: {
              color: theme("colors.white"),
            },
            a: {
              color: theme("colors.white"),
            },
            code: {
              color: theme("colors.white"),
              background: theme("colors.gray.900"),
              fontFamily: theme("fontFamily.mono"),
            },
            pre: {
              color: theme("colors.white"),
              background: theme("colors.gray.900"),
              textShadow: "none",
              fontFamily: theme("fontFamily.mono"),
            }
          },
        },
        DEFAULT: {
          css: {
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
}
