import React from "react";
import { Meta } from "@storybook/react";
import { CodeVerification } from "./code-verification";

export default {
  title: "Example/CodeVerification",
  component: CodeVerification,
} as Meta;

export const Usage = () => {
  return (
    <CodeVerification
      finishButtonLabel="Confirmar"
      resendCodeLinkLabel="Reenviar"
      submitButtonLabel="Enviar"
      codeMask="999-999"
      onSubmit={async () => {
        alert("onSubmit");
      }}
      onClickResendCode={async () => {
        alert("onClickResendCode");
      }}
      codeVerificationInfoText="Descrição sobre como verificar o código."
      loading={false}
      form={{
        code: {
          label: "Code",
          helperText: "Error goes here",
          value: "",
          error: true,
          onBlur: () => {},
          onChange: (value) => {},
          onFocus: () => {},
        },
      }}
    />
  );
};
