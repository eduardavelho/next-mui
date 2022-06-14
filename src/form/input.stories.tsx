import React from "react";
import { Meta } from "@storybook/react";
import { Input } from "./input";

export default {
  title: "Example/Input",
  component: Input,
} as Meta;

export const Usage = () => {
  const [number, setNumber] = React.useState("");

  return (
    <Input
      type="tel"
      label="Teste"
      placeholder="teste"
      value={number}
      onChange={async (value) => {
        value && setNumber(value);
      }}
      mask="(99) 99999-9999"
    />
  );
};
