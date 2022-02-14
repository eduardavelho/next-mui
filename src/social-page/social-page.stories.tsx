import React from "react";
import { Meta } from "@storybook/react";
import { SocialPage } from "./social-page";

export default {
  title: "Example/SocialPage",
  component: SocialPage,
} as Meta;

export const Usage = () => (
  <SocialPage
    color="#F00"
    background="#00F"
    title="teste"
    description="teste teste"
    breadcrumbs={[
      { key: 1, label: "Home", href: "/" },
      { key: 2, label: "Also home", href: "/" },
    ]}
    overHeader
    items={new Array(30).fill(undefined).map((_, key) => ({
      name: "string",
      description: "string",
      about: "string",
      key,
    }))}
  />
);
