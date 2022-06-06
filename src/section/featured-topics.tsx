import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { icons } from "../icons";
import { isColor } from "../utils/is-color";
import { isColorDark } from "../utils/is-color-dark";

export interface FeaturedTopicsProps {
  title?: string;
  subtitle?: React.ReactNode;
  titleColor?: string;
  background?: string;
  items: Item[];
}

interface Item {
  key: React.Key;
  title: React.ReactNode;
  description: React.ReactNode;
  icon?: string;
}

export function FeaturedTopics({
  title,
  subtitle,
  titleColor,
  background,
  items,
}: FeaturedTopicsProps) {
  const theme = useTheme();
  const backgroundFallback = theme.palette.primary.main;
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(1600));
  const backgroundIsDark =
    background && isColor(background)
      ? isColorDark(background)
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
        flexDirection="column"
        maxWidth={isLargeScreen ? "1140px" : "960px"}
        marginX="auto"
      >
        {title && (
          <Box
            marginBottom={subtitle ? undefined : 4}
            color={titleColor || theme.palette.primary.contrastText}
          >
            <Typography variant={isDesktop ? "h3" : "h4"} component="h2">
              {title}
            </Typography>
          </Box>
        )}
        {subtitle && (
          <Box marginBottom={4}>
            <Typography
              variant={isDesktop ? "h5" : "h6"}
              component="p"
              style={{
                fontWeight: 300,
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        )}
        <Grid container>
          {items.map(({ key, ...featuredTopicProps }: Item, index) => (
            <Grid item sm={12} md={6} key={`${key}-featured-topics-item`}>
              <TopicItem {...featuredTopicProps} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

function TopicItem({
  title,
  description,
  icon,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  icon?: string;
}) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const Icon = icon ? icons[icon] : undefined;
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="row"
      width="100%"
      marginY={2}
    >
      {Icon && (
        <Box marginRight={2}>
          <Icon fontSize="large" />
        </Box>
      )}
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        paddingRight={isDesktop ? 2 : undefined}
      >
        <Box>
          <Typography variant={isDesktop ? "h5" : "h6"} component="span">
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography variant={isDesktop ? "subtitle1" : "body1"} component="p">
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
