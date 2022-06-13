import React from "react";
import { Meta } from "@storybook/react";
import { Tags } from "./tags";

export default {
  title: "Example/Tags",
  component: Tags,
} as Meta;

export const Usage = () => {
  const [searchValue, setSearchValue] = React.useState(["A"]);

  return (
    <Tags
      onChange={async (searchValue) => {
        setSearchValue(searchValue);
      }}
      error
      helperText="Deu erro, rapá"
      selected={searchValue}
      noOptionsText="No options"
      options={["Gon", "Killua", "Kurapika", "Giovani Giorgio", "Juan"]}
      placeholder="Placeholder here"
    />
  );
};
