import React from "react";
import { Meta } from "@storybook/react";
import { Steps } from "./steps";

export default {
  title: "Example/Steps",
  component: Steps,
} as Meta;

export const Usage = () => {
  const steps = [
    {
      key: "teste",
      label: "React.ReactNode",
      content: "React.ReactNode",
      error: false,
    },
    {
      key: "teste2",
      label: "React.ReactNode 2",
      content:
        "React.ReactNode 2 fffffffff fsdf sdf sdfs dffdfdf fdfdf sdfsdfsdfsdf df dfdfdf sdfsdfsdfsd",
    },
    {
      key: "teste3",
      label: "React.ReactNode 3",
      content: "React.ReactNode 3",
    },
  ];

  return (
    <Steps
      vertical
      onClickStep={async (key) => {
        alert(key);
      }}
      activeStep={steps[1].key}
      steps={steps}
    />
  );
};
