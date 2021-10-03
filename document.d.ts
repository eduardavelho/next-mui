import React from "react";
import { DocumentContext } from "next/document";
export declare function document({ lang }: {
    lang: string;
}): {
    new (props: (import("next/dist/shared/lib/utils").RenderPageResult & {
        styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
    } & import("next/dist/shared/lib/utils").HtmlProps) | Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
        styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
    } & import("next/dist/shared/lib/utils").HtmlProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: import("next/dist/shared/lib/utils").RenderPageResult & {
        styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
    } & import("next/dist/shared/lib/utils").HtmlProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("next/dist/shared/lib/utils").RenderPageResult & {
            styles?: React.ReactFragment | React.ReactElement<any, string | React.JSXElementConstructor<any>>[] | undefined;
        } & import("next/dist/shared/lib/utils").HtmlProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    getInitialProps(context: DocumentContext): Promise<{
        styles: {}[];
        html: string;
        head?: (JSX.Element | null)[] | undefined;
    }>;
    contextType?: React.Context<any> | undefined;
};
