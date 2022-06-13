import React from "react";
import { Meta } from "@storybook/react";
import { PhoneVerification } from "./phone-verification";

export default {
  title: "Example/PhoneVerification",
  component: PhoneVerification,
} as Meta;

export const Usage = () => {
  return <PhoneVerification />;
};
