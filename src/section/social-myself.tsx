import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { isColor } from "../utils/is-color";
import { isColorDark } from "../utils/is-color-dark";
import { SocialCard, SocialCardProps } from "../social-page/social-card";

export type SocialMyselfProps = {
  background?: string;
} & SocialCardProps;

export function SocialMyself({
  background,
  ...socialCardProps
}: SocialMyselfProps) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(1600));
  const backgroundFallback = theme.palette.primary.main;
  const backgroundIsDark =
    background && isColor(background)
      ? isColorDark(background)
      : isColorDark(backgroundFallback);

  return (
    <Box
      paddingY={16}
      paddingX={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{
        background: background || backgroundFallback,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: backgroundIsDark ? "rgba(255, 255, 255, 0.8)" : "inherit",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        maxWidth={isLargeScreen ? "720px" : "640px"}
        marginX="auto"
      >
        <SocialCard {...socialCardProps} />
      </Box>
    </Box>
  );
}
