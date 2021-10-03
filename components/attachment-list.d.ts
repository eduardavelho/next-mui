import React from "react";
import { ChipProps } from "@material-ui/core/Chip";
export interface AttachmentListProps {
    items: {
        key: React.Key;
        title: string;
        href: string;
    }[];
    itemColor?: ChipProps["color"];
}
export declare function AttachmentList({ items, itemColor, }: AttachmentListProps): JSX.Element;
