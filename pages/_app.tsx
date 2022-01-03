import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/global.css';


export default function App({ Component, pageProps }: AppProps) {

  return (
      // /* This enables themes/darkmode – https://github.com/pacocoursey/next-themes */
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      >
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
