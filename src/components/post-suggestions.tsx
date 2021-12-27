import React from "react";
import NextLink from "next/link";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { SocialIcons, SocialIconsProps } from "./social-icons";
import { PostList, PostListProps } from "./post-list";

export type PostSuggestionsProps = {
  titleColor?: string;
  socialIconsText?: string;
  tagsText?: string;
  tags?: { key: React.Key; tag: string; href: string }[];
  recommendedPosts?: PostListProps["items"];
} & SocialIconsProps;

export function PostSuggestions({
  titleColor,
  socialIconsText,
  tagsText,
  tags,
  recommendedPosts,
  ...socialIconsProps
}: PostSuggestionsProps) {
  const theme = useTheme();

  return (
    <Box>
      {Object.keys(socialIconsProps).length > 0 && (
        <Box display="flex" flexDirection="column">
          {socialIconsText && (
            <Typography variant="overline" component="span">
              {socialIconsText}
            </Typography>
          )}
          <SocialIcons {...socialIconsProps} />
        </Box>
      )}
      {tags && tags.length > 0 && (
        <Box display="flex" flexDirection="column" marginTop={3}>
          {tagsText && (
            <Typography variant="overline" component="span">
              {tagsText}
            </Typography>
          )}
          <Box>
            {tags.map(({ tag, href, key }) => (
              <NextLink href={href} passHref>
                <Chip
                  size="small"
                  component="a"
                  label={tag}
                  key={key}
                  style={{
                    fontWeight: "bold",
                    marginBottom: theme.spacing(0.3),
                    marginRight: theme.spacing(0.3),
                    color: titleColor || theme.palette.primary.main,
                    backgroundColor: "rgba(0, 0, 0, 0.03)",
                  }}
                />
              </NextLink>
            ))}
          </Box>
        </Box>
      )}
      {recommendedPosts && recommendedPosts.length > 0 && (
        <Box marginTop={3}>
          <PostList items={recommendedPosts} titleColor={titleColor} />
        </Box>
      )}
    </Box>
  );
}
