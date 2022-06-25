/** @type {import('tailwindcss').Config} */
const theme = {
  base00: "#19171c",
  base01: "#26232a",
  base02: "#585260",
  base03: "#655f6d",
  base04: "#7e7887",
  base05: "#8b8792",
  base06: "#e2dfe7",
  base07: "#efecf4",
  base08: "#be4678",
  base09: "#aa573c",
  base0A: "#a06e3b",
  base0B: "#2a9292",
  base0C: "#398bc6",
  base0D: "#576ddb",
  base0E: "#955ae7",
  base0F: "#bf40bf",
}

// Utilities from tailwind typography's default config
// https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "")
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: `system-ui, -apple-system, blinkmacsystemfont, segoe ui, helvetica neue, helvetica, ubuntu, roboto, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;`,
      display: `PPAgrandirGrandVariable, system-ui, -apple-system, blinkmacsystemfont, segoe ui, helvetica neue, helvetica, ubuntu, roboto, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;`,
      mono: `Fira Code, fira code, ui-monospace, hack, ibm plex mono, monospace, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji`,
      code: `Fira Code, hack, ibm plex mono, monospace, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji`,
    },
    extend: {
      colors: theme,
    },
    typography: {
      DEFAULT: {
        css: {
          color: theme.base07,
          fontSize: rem(20),
          lineHeight: round(28 / 16),
          // Links
          a: {
            color: theme.base0E,
            "&:hover": {
              color: theme.base0C,
            },
            textDecoration: "underline",
            fontWeight: "500",
          },
          // Headlines
          h1: {
            color: theme.base07,
            fontSize: rem(32),
            marginTop: em(36, 20),
            marginBottom: em(12, 20),
            fontWeight: "800",
          },
          h2: {
            color: theme.base0D,
            fontSize: rem(24),
            fontWeight: "700",
            marginTop: em(36, 20),
            marginBottom: em(12, 20),
          },
          h3: {
            color: theme.base0D,
            fontSize: rem(20),
            fontWeight: "700",
            marginTop: em(36, 20),
            marginBottom: em(12, 20),
          },
          h4: {
            marginTop: em(36, 20),
            marginBottom: em(12, 20),
            lineHeight: round(32 / 20),
            color: theme.base0C,
            fontWeight: "700",
          },
          "h2 + *": {
            marginTop: "0",
          },
          "h3 + *": {
            marginTop: "0",
          },
          "h4 + *": {
            marginTop: "0",
          },
          // Body
          p: {
            marginTop: em(16, 14),
            marginBottom: em(16, 14),
            fontSize: rem(20),
          },
          // Blockquotes
          blockquote: {
            marginTop: em(16, 14),
            marginBottom: em(16, 14),
            backgroundColor: theme.base01,
            paddingTop: 1,
            paddingRight: 16,
            paddingBottom: 1,
            paddingLeft: 16,
            borderRadius: rem(4),
          },
          // Lists
          ol: {
            marginTop: em(20, 16),
            marginBottom: em(20, 16),
            paddingLeft: em(20, 16),
            listStyleType: "decimal",
          },
          ul: {
            marginTop: em(20, 16),
            marginBottom: em(20, 16),
            paddingLeft: em(20, 16),
            listStyleType: "disc",
          },
          li: {
            marginTop: em(8, 16),
            marginBottom: em(8, 16),
          },
          'ol[type="A"]': {
            listStyleType: "upper-alpha",
          },
          'ol[type="a"]': {
            listStyleType: "lower-alpha",
          },
          'ol[type="A" s]': {
            listStyleType: "upper-alpha",
          },
          'ol[type="a" s]': {
            listStyleType: "lower-alpha",
          },
          'ol[type="I"]': {
            listStyleType: "upper-roman",
          },
          'ol[type="i"]': {
            listStyleType: "lower-roman",
          },
          'ol[type="I" s]': {
            listStyleType: "upper-roman",
          },
          'ol[type="i" s]': {
            listStyleType: "lower-roman",
          },
          'ol[type="1"]': {
            listStyleType: "decimal",
          },
          // Nested lists
          "ol > li": {
            paddingLeft: em(6, 14),
          },
          "ul > li": {
            paddingLeft: em(6, 14),
          },
          "> ul > li p": {
            marginTop: em(8, 14),
            marginBottom: em(8, 14),
          },
          "> ul > li > *:first-child": {
            marginTop: em(16, 14),
          },
          "> ul > li > *:last-child": {
            marginBottom: em(16, 14),
          },
          "> ol > li > *:first-child": {
            marginTop: em(16, 14),
          },
          "> ol > li > *:last-child": {
            marginBottom: em(16, 14),
          },
          "ul ul, ul ol, ol ul, ol ol": {
            marginTop: em(8, 14),
            marginBottom: em(8, 14),
          },
          // Dividers
          hr: {
            borderColor: theme.base03,
            marginTop: em(48, 16),
            marginBottom: em(48, 16),
          },
          "hr + *": {
            marginTop: "0",
          },
          pre: {
            fontSize: rem(16),
            backgroundColor: theme.base01,
            marginTop: rem(16),
            marginBottom: rem(16),
            border: `1px solid ${theme.base02}`,
            padding: 12,
            borderRadius: rem(8),
            overflow: "hidden",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
