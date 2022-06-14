import React from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export interface ContentModalProps {
  open: boolean;
  onRequestClose?: () => Promise<void>;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  actions?: ({ label: string; autoFocus?: boolean } & (
    | { href: string }
    | { onClick: () => void }
  ))[];
}

export function ContentModal({
  open,
  onRequestClose,
  title,
  subtitle,
  children,
  actions,
}: ContentModalProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(1600));

  const maxWidth = `min(${
    isLargeScreen ? "960px" : "720px"
  }, calc(100% - ${theme.spacing(2)}px))`;

  const minWidth = isDesktop ? "480px" : undefined;
  const width = isDesktop ? undefined : `calc(100% - ${theme.spacing(2)}px)`;

  return (
    <Dialog
      aria-labelledby="content-modal-title"
      aria-describedby="content-modal-description"
      open={open}
      onClose={onRequestClose}
      scroll="body"
      PaperProps={{
        style: {
          width,
          minWidth,
          maxWidth,
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
        },
      }}
    >
      {title && (
        <DialogTitle
          id="content-modal-title"
          style={{
            textAlign: "center",
            paddingBottom: theme.spacing(1),
            paddingLeft: isDesktop ? undefined : theme.spacing(2),
            paddingRight: isDesktop ? undefined : theme.spacing(2),
          }}
        >
          {title}
        </DialogTitle>
      )}
      <DialogContent
        style={{
          paddingTop: title ? 0 : theme.spacing(2),
          paddingBottom:
            actions && actions.length > 0 ? undefined : theme.spacing(2),
          paddingLeft: isDesktop ? undefined : theme.spacing(2),
          paddingRight: isDesktop ? undefined : theme.spacing(2),
        }}
      >
        {subtitle && (
          <Box paddingBottom={2} textAlign="center">
            <Typography id="content-modal-description">{subtitle}</Typography>
          </Box>
        )}
        {children}
      </DialogContent>
      {actions && actions.length > 0 && (
        <DialogActions>
          {actions.map((action) => {
            const button = (
              <Button
                color="primary"
                autoFocus={action.autoFocus}
                component={"href" in action ? "a" : "button"}
                onClick={"onClick" in action ? action.onClick : undefined}
              >
                {action.label}
              </Button>
            );

            return "href" in action ? (
              <Link href={action.href} passHref>
                {button}
              </Link>
            ) : (
              button
            );
          })}
        </DialogActions>
      )}
    </Dialog>
  );
}
