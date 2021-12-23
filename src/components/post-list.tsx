import React from "react";
import NextLink from "next/link";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export interface PostListProps {
  items: (Omit<PostListItemProps, "showDivider"> & { key: React.Key })[];
}

interface PostListItemProps {
  href: string;
  title: string;
  date?: Date;
  dateText?: React.ReactNode;
  image?: string;
  showDivider: boolean;
}

export function PostList({ items }: PostListProps) {
  return (
    <Box>
      {items.map((item, index) => (
        <PostListItem {...item} showDivider={index > 0} />
      ))}
    </Box>
  );
}

function PostListItem({
  title,
  href,
  date,
  dateText,
  image,
  showDivider,
}: PostListItemProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      borderTop={showDivider ? `1px solid ${theme.palette.divider}` : undefined}
    >
      <NextLink href={href} passHref>
        <Link underline="none" color="inherit">
          <Box
            component="section"
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginY={3}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              component="header"
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              {dateText && (
                <Typography variant="overline">
                  {date && dateText && (
                    <time dateTime={date.toISOString()}>{dateText}</time>
                  )}
                </Typography>
              )}
              <Typography component="h3" variant={isDesktop ? "h4" : "h5"}>
                {title}
              </Typography>
            </Box>
            {isDesktop && image && (
              <Box marginLeft={3}>
                <figure
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "188px",
                    height: "105.75px",
                    margin: 0,
                  }}
                />
              </Box>
            )}
          </Box>
        </Link>
      </NextLink>
    </Box>
  );
}
