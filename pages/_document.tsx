import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="relative h-screen bg-white dark:bg-black font-mono font-light text-black/60 dark:text-white/50">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
