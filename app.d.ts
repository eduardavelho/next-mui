import { ReactNode } from "react";
import { AppProps } from "next/app";
import { Theme } from "@material-ui/core";
export declare function app({ theme, Layout, }: {
    theme: Theme;
    Layout: ({ children }: {
        children: ReactNode;
    }) => JSX.Element;
}): ({ Component, pageProps }: AppProps) => JSX.Element;
