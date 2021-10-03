import React, { ReactNode } from "react";
import { AppProps } from "next/app";
import { Theme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CssTypography } from "./typography/css-typography";

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
          <CssTypography />
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    );
  };
}
