import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export interface FeaturedInfoProps {
  image: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  showImageAtEnd?: boolean;
  background?: string;
  color?: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export function FeaturedInfo({
  image,
  imageAlt = "",
  imageWidth = 256,
  imageHeight = 256,
  showImageAtEnd,
  background,
  color,
  title,
  content,
}: FeaturedInfoProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(1600));

  const imageBox = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop={showImageAtEnd && !isDesktop ? 2 : undefined}
      marginBottom={showImageAtEnd || isDesktop ? undefined : 2}
      marginRight={showImageAtEnd || !isDesktop ? undefined : 2.5}
      marginLeft={showImageAtEnd && isDesktop ? 2.5 : undefined}
    >
      <img
        src={image}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        style={{
          width: imageWidth,
          height: "auto",
        }}
      />
    </Box>
  );

  const textBox = (
    <Box display="flex" flexDirection={"column"} justifyContent="center">
      <Box marginBottom={isDesktop ? 2.5 : 1}>
        <Typography variant={isDesktop ? "h4" : "h5"} component="h2">
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant={isDesktop ? "h5" : "h6"}
          component="p"
          style={{
            fontWeight: 300,
          }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      paddingY={16}
      paddingX={2}
      color={color || theme.palette.primary.contrastText}
      style={{
        background: background || theme.palette.primary.main,
        backgroundSize: "cover",
      }}
    >
      <Box
        maxWidth={isLargeScreen ? "1140px" : "960px"}
        marginX="auto"
        flexDirection={isDesktop ? "row" : "column"}
        display="flex"
      >
        {showImageAtEnd ? textBox : imageBox}
        {showImageAtEnd ? imageBox : textBox}
      </Box>
    </Box>
  );
}
