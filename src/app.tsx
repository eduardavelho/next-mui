import React, { ReactNode } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import type { Theme } from "./types";

export function app({
  theme,
  Layout,
}: {
  theme: Theme;
  Layout: ({ children }: { children: ReactNode }) => JSX.Element;
}) {
  return function App({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles) {
        jssStyles.parentElement?.removeChild(jssStyles);
      }
    }, []);

    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    );
  };
}
