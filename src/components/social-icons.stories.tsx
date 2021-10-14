import React from "react";
import { Meta } from "@storybook/react";
import { SocialIcons } from "./social-icons";

export default {
  title: "Example/SocialIcons",
  component: SocialIcons,
} as Meta;

export const Usage = () => {
  return (
    <SocialIcons
      lattes="https://lattes.cnpq.br/teste"
      linkedIn
      twitter
      whatsApp
      email="email@email.email"
      instagram="https://instagram.com/teste"
      facebook
      youtube="https://youtube.com/teste"
      socialAnchorTitle="Share in"
      largeIcons
      darkIcons
    />
  );
};
