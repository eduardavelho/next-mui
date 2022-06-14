import React from "react";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";

export type LinkProps = {
  children: React.ReactNode;
} & ({ href: string } | { onClick: () => void });

export function Link({ children, ...props }: LinkProps) {
  return "href" in props ? (
    <NextLink href={props.href} passHref>
      <MuiLink>{children}</MuiLink>
    </NextLink>
  ) : (
    <MuiLink style={{ cursor: "pointer" }} onClick={() => props.onClick()}>
      {children}
    </MuiLink>
  );
}
