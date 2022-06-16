import React from "react";
import { Meta } from "@storybook/react";
import { SignInForm } from "./sign-in-form";

export default {
  title: "Example/SignInForm",
  component: SignInForm,
} as Meta;

export const Usage = () => {
  return (
    <SignInForm
      onSubmit={async () => {}}
      loading={false}
      submitButtonLabel="Entrar"
      recoveryAccountTitleText="Esqueceu sua senha?"
      recoveryAccountLinkLabel="Recuperar agora"
      createAccountButtonLabel="Criar conta"
      loginMask="(99) 99999-9999"
      recoveryAccountOnClick={async () => {
        alert("recoveryAccountOnClick");
      }}
      createAccountOnClick={async () => {
        alert("createAccountOnClick");
      }}
      form={{
        login: {
          label: "Celular",
          helperText: "Error goes here",
          value: "",
          error: false,
          onBlur: () => {},
          onChange: (value) => {},
          onFocus: () => {},
        },
      }}
    />
  );
};
