import React from "react";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import VisibilityIcon from "@material-ui/icons/Visibility";

export type PostCardProps = {
  title?: string;
  subtitle?: string;
  image?: string;
  titleColor?: string;
  date?: Date;
  dateText?: React.ReactNode;
  authorName?: string;
  authorPicture?: string;
  tags?: { key: React.Key; tag: string }[];
  likes?: number;
  likesAriaLabel?: string;
  comments?: number;
  commentsAriaLabel?: string;
  views?: number;
  viewsAriaLabel?: string;
  elevation?: number | undefined;
  backgroundColor?: string;
} & ({ href: string } | { onClick: () => void });

export function PostCard({
  title,
  subtitle,
  image,
  date,
  dateText,
  likes,
  likesAriaLabel,
  comments,
  commentsAriaLabel,
  views,
  viewsAriaLabel,
  authorName,
  authorPicture,
  tags,
  titleColor,
  backgroundColor,
  elevation,
  ...props
}: PostCardProps) {
  const theme = useTheme();

  const postCard = (
    <CardActionArea component={"href" in props ? "a" : "button"}>
      {image && (
        <CardMedia
          image={image}
          title={title}
          style={{
            height: "140px",
          }}
        />
      )}
      {authorPicture && (
        <Avatar
          alt={authorName ?? ""}
          src={authorPicture}
          style={{
            margin: `${image ? "-28px" : "16px"} auto 0`,
            position: "relative",
            width: "56px",
            height: "56px",
          }}
        />
      )}
      <CardContent>
        {tags !== undefined && tags.length > 0 && (
          <Box marginTop={0.8} marginBottom={2.4}>
            {tags.map(({ key, tag }) => (
              <Chip
                key={`${key}-post-card`}
                size="small"
                label={tag}
                style={{
                  marginBottom: theme.spacing(0.3),
                  marginRight: theme.spacing(0.3),
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>
        )}
        {date !== undefined && (
          <Box>
            <Typography
              variant="caption"
              component="time"
              dateTime={date.toISOString()}
            >
              {dateText || date.toLocaleString()}
            </Typography>
          </Box>
        )}
        {title && (
          <Box marginBottom={subtitle ? 0.4 : undefined}>
            <Typography
              variant="h6"
              component="span"
              style={{
                lineHeight: "1.3",
                color: titleColor || theme.palette.primary.main,
              }}
            >
              {title}
            </Typography>
          </Box>
        )}
        {subtitle && (
          <Box>
            <Typography variant="body2" color="textSecondary" component="span">
              {subtitle}
            </Typography>
          </Box>
        )}
      </CardContent>
      {(likes !== undefined ||
        views !== undefined ||
        comments !== undefined) && (
        <Box display="flex" paddingY={1.6}>
          {likes !== undefined && (
            <CardInfo
              amount={likes}
              Icon={FavoriteIcon}
              ariaLabel={likesAriaLabel}
            />
          )}
          {views !== undefined && (
            <CardInfo
              amount={views}
              Icon={VisibilityIcon}
              ariaLabel={viewsAriaLabel}
            />
          )}
          {comments !== undefined && (
            <CardInfo
              amount={comments}
              Icon={ModeCommentIcon}
              ariaLabel={commentsAriaLabel}
            />
          )}
        </Box>
      )}
    </CardActionArea>
  );

  return (
    <Card
      elevation={elevation}
      onClick={() => ("onClick" in props ? props.onClick() : undefined)}
      style={{
        backgroundColor,
      }}
    >
      {"href" in props ? (
        <Link href={props.href} passHref>
          {postCard}
        </Link>
      ) : (
        postCard
      )}
    </Card>
  );
}

function CardInfo({
  Icon,
  amount,
  ariaLabel,
}: {
  Icon: React.ElementType;
  amount: number;
  ariaLabel?: string;
}) {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flex={1}
      alignItems="center"
      justifyContent="center"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <Icon fontSize="small" />
      <Typography
        variant="body2"
        component="div"
        style={{
          marginLeft: theme.spacing(0.5),
        }}
      >
        {amount}
      </Typography>
    </Box>
  );
}
