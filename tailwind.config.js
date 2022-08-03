/** @type {import('tailwindcss').Config} */

const theme = {
  base00: "#1c1810",
  base01: "#2a261c",
  base02: "#3a3527",
  base03: "#504b38",
  base04: "#5f5b45",
  base05: "#736e55",
  base06: "#bab696",
  base07: "#f8f5de",
  base08: "#e35142",
  base09: "#fba11b",
  base0A: "#f2ff27",
  base0B: "#5ceb5a",
  base0C: "#5aebbc",
  base0D: "#489bf0",
  base0E: "#FF8080",
  base0F: "#F69BE7",
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
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: `system-ui, -apple-system, blinkmacsystemfont, segoe ui, helvetica neue, helvetica, ubuntu, roboto, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;`,
      display: `STDIN, Jetbrains Mono, system-ui, -apple-system, blinkmacsystemfont, segoe ui, helvetica neue, helvetica, ubuntu, roboto, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;`,
      mono: `Jetbrains Mono, fira code, ui-monospace, hack, ibm plex mono, monospace, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji`,
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
            color: theme.base0A,
            "&:hover": {
              color: theme.base0C,
            },
            textDecoration: "underline",
            fontWeight: "500",
          },
          // Headlines
          h1: {
            color: theme.base0E,
            fontSize: rem(72),
            lineHeight: round(24 / 20),
            fontWeight: "100",
          },
          h2: {
            color: theme.base0D,
            fontSize: rem(24),
            fontWeight: "500",
            marginTop: em(32, 20),
            marginBottom: em(12, 20),
          },
          h3: {
            color: theme.base0D,
            fontSize: rem(20),
            fontWeight: "500",
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
