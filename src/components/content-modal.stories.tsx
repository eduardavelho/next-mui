import React from "react";
import { Meta } from "@storybook/react";
import { ContentModal } from "./content-modal";

export default {
  title: "Example/ContentModal",
  component: ContentModal,
} as Meta;

export const Usage = () => {
  return (
    <ContentModal
      title="título aqui"
      subtitle="subtítulo aqui com um pouco mais de texto pra testar."
      open
      actions={[
        { label: "teste 1", href: "/" },
        { label: "teste 2", href: "/", autoFocus: true },
      ]}
    >
      um monte de texto aqui.
    </ContentModal>
  );
};
