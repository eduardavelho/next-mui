import React from "react";
import Typography from "@material-ui/core/Typography";

export type HtmlComponentType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "pre"
  | "label"
  | "a"
  | "time";

export interface TextProps<HtmlComponent extends HtmlComponentType> {
  component?: HtmlComponent;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "overline"
    | "inherit"
    | "caption"
    | "button";
  children?: React.ReactNode;
  style?: React.StyleHTMLAttributes<HtmlComponent>;
}

export function Text<HtmlComponent extends HtmlComponentType>({
  component = "span" as HtmlComponent,
  variant = "body1",
  style,
  children,
}: TextProps<HtmlComponent>) {
  return (
    <Typography component={component as any} variant={variant} style={style}>
      {children}
    </Typography>
  );
}
