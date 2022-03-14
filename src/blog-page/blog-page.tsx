import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { SearchHeader, SearchHeaderProps } from "./search-header";
import { PostCardGrid, PostCardGridProps } from "./post-card-grid";
import { Breadcrumbs, BreadcrumbsProps } from "../page/breadcrumbs";
import { NoResults, NoResultsProps } from "../components/no-results";

export type BlogPageProps = SearchHeaderProps &
  PostCardGridProps &
  NoResultsProps &
  BreadcrumbsProps;

export function BlogPage({
  title,
  titleColor,
  background,
  options,
  value,
  placeholder,
  noOptionsText,
  disabled,
  loading,
  onRequestMorePosts,
  onChange,
  hasMorePosts,
  posts,
  noResultsText,
  noResultsDescription,
  breadcrumbs,
}: BlogPageProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const searchHeaderProps = {
    title,
    titleColor,
    background,
    options,
    value,
    placeholder,
    noOptionsText,
    disabled,
    onChange,
    loading,
  };

  const postCardGridProps = {
    titleColor,
    onRequestMorePosts,
    hasMorePosts,
    posts,
  };

  const noResultsProps = {
    noResultsText,
    noResultsDescription,
  };

  return (
    <>
      <SearchHeader {...searchHeaderProps} />
      <Box
        maxWidth="960px"
        marginX={isDesktop ? "auto" : undefined}
        marginY={1.6}
      >
        <Box marginX={isDesktop ? undefined : 1.6}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </Box>
        <Box minHeight="60vh">
          {posts.length > 0 ? (
            <PostCardGrid {...postCardGridProps} />
          ) : (
            <Box paddingY={isDesktop ? 8 : 4}>
              <NoResults {...noResultsProps} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
