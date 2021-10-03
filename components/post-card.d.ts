import React from "react";
import { CardProps } from "@material-ui/core/Card";
export declare type PostCardProps = {
    title?: string;
    subtitle?: string;
    image?: string;
    titleColor?: string;
    date?: Date;
    dateText?: React.ReactNode;
    authorName?: string;
    authorPicture?: string;
    tags?: {
        key: React.Key;
        tag: string;
    }[];
    likes?: number;
    likesAriaLabel?: string;
    comments?: number;
    commentsAriaLabel?: string;
    views?: number;
    viewsAriaLabel?: string;
    elevation?: CardProps["elevation"];
} & ({
    href: string;
} | {
    onClick: () => void;
});
export declare function PostCard({ title, subtitle, image, date, dateText, likes, likesAriaLabel, comments, commentsAriaLabel, views, viewsAriaLabel, authorName, authorPicture, tags, titleColor, elevation, ...props }: PostCardProps): JSX.Element;
