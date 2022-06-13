import React from "react";
import { Meta } from "@storybook/react";
import { PersonalData } from "./personal-data";

export default {
  title: "Example/PersonalData",
  component: PersonalData,
} as Meta;

export const Usage = () => {
  return <PersonalData />;
};
