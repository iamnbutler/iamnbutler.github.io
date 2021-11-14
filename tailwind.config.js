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
};
