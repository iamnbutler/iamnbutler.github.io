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
                xs: '14px',    // 0.875rem
                base: '16px',  // 1rem
                lg: '20px',    // 1.25rem
                xl: '24px',    // 1.5rem
                '2xl': '30px', // 1.875rem
                '3xl': '36px', // 2.25rem
                "h1": "2.625rem", // 42px
                "h2": "2.25rem", // 42px
                "h3": "1.5rem", // 24px
                "h4": "1.5rem", // 24px
                default: "1.25rem", // 20px
            },
            lineHeight: {
                "h1": "3.75rem", // 60px
                "h2": "2.75rem", // 60px
                h3: "2.25rem", // 36px
                h4: "2rem", // 32px
                default: "1.875rem", // 30px
            },
            fontWeight: {
                bold: "bold",
            },
            color: {
                brightRed: "#FF0000",
                brightGreen: "#00FF00",
                brightBlue: "#0000FF",
                brightMagenta: "#FF00FF",
                brightYellow: "#FFFF00",
                brightCyan: "#00FFFF",
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        h1: {
                            fontSize: theme("fontSize.h1"),
                            lineHeight: theme("lineHeight.h1"),
                            fontWeight: theme("fontWeight.bold"),
                        },
                        h2: {
                            fontSize: theme("fontSize.h2"),
                            lineHeight: theme("lineHeight.h2"),
                            fontWeight: theme("fontWeight.bold"),
                        },
                        h3: {
                            fontSize: theme("fontSize.h3"),
                            lineHeight: theme("lineHeight.h3"),
                            fontWeight: theme("fontWeight.bold"),
                        },
                        h4: {
                            fontSize: theme("fontSize.h4"),
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
                                textDecoration: "underline",
                                "&:hover": {
                                    color: theme("colors.purple.500"),
                                    textDecoration: "underline",
                                },
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
