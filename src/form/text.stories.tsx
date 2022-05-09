import React from "react";
import { Meta } from "@storybook/react";
import { Text } from "./text";

export default {
  title: "Example/Text",
  component: Text,
} as Meta;

export const Usage = () => {
  const [number, setNumber] = React.useState("");

  return (
    <Text
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
