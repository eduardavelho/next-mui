import React from "react";
import { Meta } from "@storybook/react";
import { FeaturedTopics } from "./featured-topics";

export default {
  title: "Example/FeaturedTopics",
  component: FeaturedTopics,
} as Meta;

export const Usage = () => (
  <FeaturedTopics
    background="#f00"
    titleColor="#0ff"
    title="Item area title"
    subtitle="Some description here to blsidjfisdjfisdfksodfsd"
    items={[
      {
        key: 1,
        title: "Some text here",
        description: "Some description here to blsidjfisdjfisdfksodfsd",
        icon: "AccessAlarm",
      },
      {
        key: 2,
        title: "Some text here",
        description: "Some description here to blsidjfisdjfisdfksodfsd",
        icon: "AccessAlarm",
      },
      {
        key: 3,
        title: "Some text here",
        description: "Some description here to blsidjfisdjfisdfksodfsd",
        icon: "AccessAlarm",
      },
      {
        key: 4,
        title: "Some text here",
        description: "Some description here to blsidjfisdjfisdfksodfsd",
        icon: "AccessAlarm",
      },
      {
        key: 5,
        title: "Some text here",
        description: "Some description here to blsidjfisdjfisdfksodfsd",
        icon: "AccessAlarm",
      },
    ]}
  />
);
