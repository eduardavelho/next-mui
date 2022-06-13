import React from "react";
import { Meta } from "@storybook/react";
import { VerifyCode } from "./verify-code";

export default {
  title: "Example/VerifyCode",
  component: VerifyCode,
} as Meta;

export const Usage = () => {
  return <VerifyCode />;
};
