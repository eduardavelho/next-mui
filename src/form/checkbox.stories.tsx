import React from "react";
import { Meta } from "@storybook/react";
import FormGroup from "@material-ui/core/FormGroup";
import { Checkbox } from "./checkbox";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
} as Meta;

export const Usage = () => {
  return (
    <FormGroup>
      <Checkbox checked disabled label="Test checkbox" />
      <Checkbox checked={false} disabled label="Test checkbox" />
      <Checkbox checked disabled={false} label="Test checkbox" />
    </FormGroup>
  );
};
