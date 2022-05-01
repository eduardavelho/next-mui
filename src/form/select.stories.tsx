import React from "react";
import { Meta } from "@storybook/react";
import { Select } from "./select";

export default {
  title: "Example/Select",
  component: Select,
} as Meta;

export const Usage = () => {
  return (
    <Select
      label="Selecione"
      options={[
        {
          label: "Red",
          value: 1,
        },
        {
          label: "Blueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          value: 2,
        },
      ]}
    />
  );
};
