import React from "react";
import { Meta } from "@storybook/react";
import { PaperPage } from "./paper-page";

export default {
  title: "Example/PaperPage",
  component: PaperPage,
} as Meta;

export const Usage = () => {
  return <PaperPage />;
};
