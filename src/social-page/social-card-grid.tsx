import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { SocialCard, SocialCardProps } from "./social-card";
import {
  InfiniteScrollGrid,
  InfiniteScrollGridProps,
} from "../components/infinite-scroll-grid";

type SocialCard = SocialCardProps & { key: React.Key };

export type SocialCardGridProps = Omit<
  InfiniteScrollGridProps<SocialCard>,
  "mapItemToComponent"
>;

export function SocialCardGrid(props: SocialCardGridProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(1600));

  return (
    <Box
      maxWidth={isLargeScreen ? "1140px" : "960px"}
      marginX={isDesktop ? "auto" : 1.6}
      marginY={1.6}
    >
      <InfiniteScrollGrid
        mapItemToComponent={(props) => <SocialCard {...props} />}
        {...props}
      />
    </Box>
  );
}
