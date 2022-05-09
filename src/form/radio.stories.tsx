import React from "react";
import { Meta } from "@storybook/react";
import { Radio } from "./radio";

export default {
  title: "Example/Radio",
  component: Radio,
} as Meta;

export const Usage = () => {
  return (
    <Radio
      error
      helperText="Deu erro aqui, cara"
      options={[
        {
          value: "red",
          label: "Red",
        },
        {
          value: "green",
          label: "Green",
        },
        {
          value: "blue",
          label: "Blue",
        },
      ]}
      row
      checked="blue"
    />
  );
};
