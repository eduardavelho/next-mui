import React from "react";
import { Meta } from "@storybook/react";
import { CodeVerificationForm } from "./code-verification-form";

export default {
  title: "Example/CodeVerificationForm",
  component: CodeVerificationForm,
} as Meta;

export const Usage = () => {
  return (
    <CodeVerificationForm
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
