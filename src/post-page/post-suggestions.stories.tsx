import React from "react";
import { Meta } from "@storybook/react";
import { PostSuggestions } from "./post-suggestions";

export default {
  title: "Example/PostSuggestions",
  component: PostSuggestions,
} as Meta;

export const Usage = () => {
  return (
    <PostSuggestions
      socialIconsText="Compartilhar em"
      socialAnchorTitle="Compartilhar em"
      tagsText="Publicado em"
      facebook
      darkIcons
      smallIcons
      instagram="tes"
      whatsApp="tes"
      lattes="tes"
      twitter
      gitHub="tes"
      email="tes"
      linkedIn
      tags={[
        { tag: "JavaScript", key: "teste-1", href: "/teste-1" },
        { tag: "Text mining", key: "teste-2", href: "/teste-2" },
        { tag: "Grupos de ódio", key: "teste-3", href: "/teste-3" },
      ]}
      recommendedPosts={new Array(5).fill(undefined).map((_, key) => ({
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
