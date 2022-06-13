import React from "react";
import { Meta } from "@storybook/react";
import { UpdatePhone } from "./update-phone";

export default {
  title: "Example/UpdatePhone",
  component: UpdatePhone,
} as Meta;

export const Usage = () => {
  return <UpdatePhone />;
};
