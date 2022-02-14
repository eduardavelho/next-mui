import React from "react";
import { Meta } from "@storybook/react";
import { PostList } from "./post-list";

export default {
  title: "Example/PostList",
  component: PostList,
} as Meta;

export const Usage = () => {
  return (
    <PostList
      items={new Array(10).fill(undefined).map((_, key) => ({
        key,
        title:
          "Some long text here to show how the layout is handled for this use case",
        href: "/",
        date: new Date(),
        dateText: new Date().toLocaleDateString(),
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
      }))}
    />
  );
};
