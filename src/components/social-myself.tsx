import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { isColor } from "../utils/is-color";
import { isColorDark } from "../utils/is-color-dark";
import { SocialCard, SocialCardProps } from "./social-card";

export type SocialMyselfProps = {
  background?: string;
} & SocialCardProps;

export function SocialMyself({
  background,
  ...socialCardProps
}: SocialMyselfProps) {
  const theme = useTheme();
  const backgroundFallback = theme.palette.primary.main;
  const backgroundIsDark = background
    ? isColor(background) && isColorDark(background)
    : isColorDark(backgroundFallback);

  return (
    <Box
      paddingY={16}
      paddingX={2}
      style={{
        background: background || backgroundFallback,
        color: backgroundIsDark ? "rgba(255, 255, 255, 0.8)" : "inherit",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        maxWidth={960}
        marginX="auto"
      >
        <SocialCard {...socialCardProps} />
      </Box>
    </Box>
  );
}
