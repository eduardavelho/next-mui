import React from "react";
import { Meta } from "@storybook/react";
import { PersonalDataForm } from "./personal-data-form";

export default {
  title: "Example/PersonalDataForm",
  component: PersonalDataForm,
} as Meta;

export const Usage = () => {
  return (
    <PersonalDataForm
      onSubmit={async () => {
        alert("onSubmit");
      }}
      loading={false}
      phoneNumberMask="(99) 99999-9999"
      submitButtonLabel="Enviar"
      form={{
        name: {
          label: "Nome",
          helperText: "Error goes here",
          value: "",
          error: true,
          onBlur: () => {},
          onChange: (value) => {},
          onFocus: () => {},
        },
        surname: {
          label: "Sobrenome",
          helperText: "Error goes here",
          value: "",
          error: true,
          onBlur: () => {},
          onChange: (value) => {},
          onFocus: () => {},
        },
        email: {
          label: "Email",
          helperText: "Error goes here",
          value: "",
          error: true,
          onBlur: () => {},
          onChange: (value) => {},
          onFocus: () => {},
        },
        phoneNumber: {
          label: "Celular",
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
