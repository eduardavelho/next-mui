import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

export const Usage = () => {
  return <Button href="/">Um botão</Button>;
};
