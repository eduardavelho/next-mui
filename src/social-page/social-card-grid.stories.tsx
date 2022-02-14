import React from "react";
import { Meta } from "@storybook/react";
import { SocialCardGrid } from "./social-card-grid";

export default {
  title: "Example/SocialCardGrid",
  component: SocialCardGrid,
} as Meta;

export const Usage = () => {
  const [count, setCount] = React.useState(10);

  return (
    <SocialCardGrid
      hasMoreItems={count < 50}
      onRequestMoreItems={() => {
        setCount(count + 10);
      }}
      items={new Array(count).fill(undefined).map((_, key) => ({
        name: "string",
        description: "string",
        about: "string",
        key,
      }))}
    />
  );
};
