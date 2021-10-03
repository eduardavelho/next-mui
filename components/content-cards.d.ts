import React from "react";
export interface ContentCardsProps {
    title?: string;
    subtitle?: string;
    titleColor?: string;
    cards: CardItem[];
}
interface CardItem {
    key: React.Key;
    title?: string;
    content?: string;
    href: string;
    image: string;
}
export declare function ContentCards({ title, subtitle, titleColor, cards, }: ContentCardsProps): JSX.Element;
export {};
