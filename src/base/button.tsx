import React from "react";
import Link from "next/link";
import MuiButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

export type ButtonProps = {
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
} & ({ href: string } | { onClick: () => void });

export function Button({
  disabled,
  loading,
  type,
  children,
  ...props
}: ButtonProps) {
  const button = (
    <MuiButton
      disabled={loading}
      type={type}
      variant="outlined"
      color="primary"
      fullWidth
    >
      {loading ? <CircularProgress size="1.5em" /> : children}
    </MuiButton>
  );

  return "href" in props ? (
    <Link href={props.href} passHref>
      {button}
    </Link>
  ) : (
    button
  );
}
