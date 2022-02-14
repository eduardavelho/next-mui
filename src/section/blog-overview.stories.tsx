import React from "react";
import { Meta } from "@storybook/react";
import { BlogOverview } from "./blog-overview";

export default {
  title: "Example/BlogOverview",
  component: BlogOverview,
} as Meta;

export const Usage = () => {
  return (
    <BlogOverview
      blogHref="/"
      blogHrefButtonLabel="See all the publications"
      cardsTitle={`Últimas publicações em "JavaScript"`}
      cardsTitleOverlineText="Featured"
      listTitle="Publicações mais recentes do site"
      listTitleOverlineText="The lastest"
      list={new Array(5).fill(undefined).map((_, key) => ({
        key,
        title:
          "Some long text here to show how the layout is handled for this use case",
        href: "/",
        authorName: "Doge, the dog",
        date: new Date(),
        dateText: new Date().toLocaleDateString(),
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
      }))}
      cards={new Array(3).fill(undefined).map((_, key) => ({
        key,
        title:
          "Some long text here to show how the layout is handled for this use case",
        href: "/",
        authorName: "Doge, the dog",
        date: new Date(),
        dateText: new Date().toLocaleDateString(),
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
      }))}
    />
  );
};
