import React from "react";
import { MasonryGridProps } from "./masonry-grid";
import { InfiniteScrollProps } from "./infinite-scroll";
export declare type InfiniteScrollGridProps<Item extends {
    key: React.Key;
}> = {
    items: Item[];
    hasMoreItems: InfiniteScrollProps["hasMoreItems"];
    onRequestMoreItems: InfiniteScrollProps["onRequestMoreItems"];
    mapItemToComponent: (item: Item) => React.ReactNode;
} & Omit<MasonryGridProps, "children">;
export declare function InfiniteScrollGrid<Item extends {
    key: React.Key;
}>({ hasMoreItems, onRequestMoreItems, items, mapItemToComponent, ...gridProps }: InfiniteScrollGridProps<Item>): JSX.Element;
