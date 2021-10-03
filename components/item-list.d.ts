import React from "react";
export interface ItemListProps {
    title?: string;
    titleColor?: string;
    background?: string;
    items: Item[];
}
interface Item {
    key: React.Key;
    text: string;
    image: string;
}
export declare function ItemList({ title, titleColor, background, items, }: ItemListProps): JSX.Element;
export {};
