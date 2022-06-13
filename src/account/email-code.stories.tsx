import React from "react";
import { Meta } from "@storybook/react";
import { EmailCode } from "./email-code";

export default {
  title: "Example/EmailCode",
  component: EmailCode,
} as Meta;

export const Usage = () => {
  return <EmailCode />;
};
