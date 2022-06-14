import React from "react";
import { Meta } from "@storybook/react";
import { Link } from "./link";

export default {
  title: "Example/Link",
  component: Link,
} as Meta;

export const Usage = () => {
  return <Link href="/">Um link</Link>;
};
