import React from "react";
import { InfiniteScrollGridProps } from "./infinite-scroll-grid";
import { PostCard, PostCardProps } from "./post-card";
declare type PostCard = PostCardProps & {
    key: React.Key;
};
export declare type PostCardGridProps = {
    titleColor?: PostCardProps["titleColor"];
    posts: PostCard[];
    onRequestMorePosts: InfiniteScrollGridProps<PostCard>["onRequestMoreItems"];
    hasMorePosts: InfiniteScrollGridProps<PostCard>["hasMoreItems"];
};
export declare function PostCardGrid({ titleColor, onRequestMorePosts, hasMorePosts, posts, }: PostCardGridProps): JSX.Element;
export {};
