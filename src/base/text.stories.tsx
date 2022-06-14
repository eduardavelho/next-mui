import React from "react";
import { Meta } from "@storybook/react";
import { Text } from "./text";

export default {
  title: "Example/Text",
  component: Text,
} as Meta;

export const Usage = () => {
  return <Text>teste</Text>;
};
