import React from "react";
import { Meta } from "@storybook/react";
import { SocialMyself } from "./social-myself";

export default {
  title: "Example/SocialMyself",
  component: SocialMyself,
} as Meta;

export const Usage = () => (
  <SocialMyself
    background="#f00"
    name="Full name"
    nameColor="red"
    description="People description goes here"
    picture="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
    about="Longer text (but not so long) talking about someone. Longer text (but not so long) talking about someone."
    tags={[
      { key: 1, tag: "Some tag" },
      { key: 2, tag: "Another tag" },
    ]}
    largeIcons={false}
    elevation={9}
    smallIcons={false}
    socialAnchorTitle="Anchor title"
    email="email@email.email"
    facebook="https://facebook.com/teste"
    instagram="https://instagram.com/teste"
    linkedIn="https://linkedin.com/teste"
  />
);
