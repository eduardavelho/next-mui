import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export interface TitleDescriptionInfoProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export function TitleDescriptionInfo({
  title,
  description,
}: TitleDescriptionInfoProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {title && (
        <Box>
          <Typography component="h1" variant={isDesktop ? "h3" : "h5"}>
            {title}
          </Typography>
        </Box>
      )}
      {description && (
        <Box marginTop={title ? 2 : undefined}>
          <Typography
            component="h2"
            variant={isDesktop ? "subtitle1" : "subtitle2"}
          >
            {description}
          </Typography>
        </Box>
      )}
    </>
  );
}
