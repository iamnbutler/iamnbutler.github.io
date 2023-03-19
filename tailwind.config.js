/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                "h1-h2": "2.625rem", // 42px
                "h3-h4": "1.5rem", // 24px
                default: "1.25rem", // 20px
            },
            lineHeight: {
                "h1-h2": "3.75rem", // 60px
                h3: "2.25rem", // 36px
                h4: "2rem", // 32px
                default: "1.875rem", // 30px
            },
            fontWeight: {
                bold: "bold",
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        h1: {
                            fontSize: theme("fontSize.h1-h2"),
                            lineHeight: theme("lineHeight.h1-h2"),
                            fontWeight: theme("fontWeight.bold"),
                        },
                        h2: {
                            fontSize: theme("fontSize.h1-h2"),
                            lineHeight: theme("lineHeight.h1-h2"),
                            fontWeight: theme("fontWeight.bold"),
                        },
                        h3: {
                            fontSize: theme("fontSize.h3-h4"),
                            lineHeight: theme("lineHeight.h3"),
                            fontWeight: theme("fontWeight.bold"),
                        },
                        h4: {
                            fontSize: theme("fontSize.h3-h4"),
                            lineHeight: theme("lineHeight.h4"),
                            fontWeight: theme("fontWeight.bold"),
                        },
                        p: {
                            fontSize: theme("fontSize.default"),
                            lineHeight: theme("lineHeight.default"),
                        },
                        a: {
                            color: theme("colors.black"),
                            textDecoration: "underline",
                            "&:hover": {
                                color: theme("colors.blue.500"),
                                textDecoration: "underline",
                            },
                            '&:visited': {
                                color: theme("colors.purple.500"),
                                textDecoration: "underline",
                            }
                        },
                        'code': {
                            backgroundColor: theme("colors.purple.100"),
                            padding: '1px 4px',
                            borderRadius: '2px',
                            fontWeight: 400
                        },
                        'code::before': {
                            content: '""'
                        },
                        'code::after': {
                            content: '""'
                        }
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
