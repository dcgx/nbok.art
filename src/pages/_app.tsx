import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import DefaultLayout from "../layouts/default";
import GlobalStyle from "../styles/global";
import lightTheme from "../themes/light";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
