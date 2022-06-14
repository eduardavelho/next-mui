import React from "react";
import { Meta } from "@storybook/react";
import { Finish } from "./finish";

export default {
  title: "Example/Finish",
  component: Finish,
} as Meta;

export const Usage = () => {
  return <Finish finishTitleText="Finalizou o negócio" />;
};
