import React from "react";
import { Meta } from "@storybook/react";
import { SignIn } from "./sign-in";

export default {
  title: "Example/SignIn",
  component: SignIn,
} as Meta;

export const Usage = () => {
  return <SignIn />;
};
