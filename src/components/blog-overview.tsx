import React from "react";
import Link from "next/link";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { MasonryGrid } from "./masonry-grid";
import { PostCard, PostCardProps } from "./post-card";
import { PostList, PostListProps } from "./post-list";

export interface BlogOverviewProps {
  cardsTitleOverlineText?: string;
  cardsTitle?: string;
  listTitleOverlineText?: string;
  listTitle?: string;
  color?: string;
  cards: PostListProps["items"];
  list: PostListProps["items"];
  blogHref?: string;
  blogHrefButtonLabel?: string;
}

export function BlogOverview({
  cardsTitle,
  cardsTitleOverlineText,
  listTitle,
  listTitleOverlineText,
  cards,
  list,
  blogHref,
  blogHrefButtonLabel,
}: BlogOverviewProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      paddingY={isDesktop ? 16 : 8}
      paddingX={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundSize: "cover",
      }}
    >
      <Box maxWidth={960} marginX="auto">
        <Box>
          {cardsTitle && (
            <Box marginBottom={4}>
              {cardsTitleOverlineText && (
                <Typography variant="overline">
                  {cardsTitleOverlineText}
                </Typography>
              )}
              <Typography variant={isDesktop ? "h3" : "h4"} component="h2">
                {cardsTitle}
              </Typography>
            </Box>
          )}
          <MasonryGrid spacing={theme.spacing(2)} xs={2} md={2} lg={3} xl={3}>
            {cards.map((card) => (
              <PostCard
                {...card}
                elevation={0}
                titleColor="inherit"
                backgroundColor="initial"
              />
            ))}
          </MasonryGrid>
        </Box>
        <Box marginTop={4}>
          {listTitle && (
            <Box marginBottom={4}>
              {listTitleOverlineText && (
                <Typography variant="overline">
                  {listTitleOverlineText}
                </Typography>
              )}
              <Typography variant={isDesktop ? "h3" : "h4"} component="h2">
                {listTitle}
              </Typography>
            </Box>
          )}
          <PostList items={list} />
        </Box>
        {blogHref && blogHrefButtonLabel && (
          <Box marginTop={8}>
            <Button variant="contained" size="large" fullWidth disableElevation>
              {blogHrefButtonLabel}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
