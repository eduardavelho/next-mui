import React from "react";
import { Meta } from "@storybook/react";
import { Page } from "./page";

export default {
  title: "Example/Page",
  component: Page,
} as Meta;

export const Usage = () => (
  <Page
    overHeader={false}
    header={<h1>Some header here</h1>}
    background="#000"
    breadcrumbs={[
      { key: 1, label: "Home", href: "/" },
      { key: 2, label: "Also home", href: "/" },
    ]}
  >
    <p
      style={{
        color: "red",
        paddingTop: "64px",
        paddingBottom: "256px",
        backgroundColor: "grey",
      }}
    >
      Content goes here.
    </p>
  </Page>
);
