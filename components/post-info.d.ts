import React from "react";
import { SocialIconsProps } from "./social-icons";
export declare type PostInfoProps = {
    title?: React.ReactNode;
    description?: React.ReactNode;
    date?: Date;
    dateText?: React.ReactNode;
    authorName?: string;
    authorPicture?: string;
    authorDescription?: string;
    tags?: {
        key: React.Key;
        tag: string;
    }[];
    titleColor?: string;
    backgroundIsDark?: boolean;
} & SocialIconsProps;
export declare function PostInfo({ title, description, date, dateText, authorName, authorPicture, authorDescription, tags, titleColor, backgroundIsDark, ...socialIconsProps }: PostInfoProps): JSX.Element;
