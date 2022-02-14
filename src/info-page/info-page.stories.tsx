import React from "react";
import { Meta } from "@storybook/react";
import { InfoPage } from "./info-page";

export default {
  title: "Example/InfoPage",
  component: InfoPage,
} as Meta;

export const Usage = () => (
  <InfoPage
    expandIconAriaLabel=""
    color="#F00"
    background="#00F"
    title="teste"
    description="teste teste"
    items={new Array(9).fill(undefined).map((_, index) => ({
      key: index,
      header: `title at ${index}`,
      content: `description at${index}`,
    }))}
    breadcrumbs={[
      { key: 1, label: "Home", href: "/" },
      { key: 2, label: "Also home", href: "/" },
    ]}
  />
);
