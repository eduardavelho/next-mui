import React, { ReactNode } from "react";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import type { FormInput } from "../types";

export interface SignInProps {
  onSubmit: () => void;
  loading: boolean;
  submitButtonLabel: string;
  recoveryAccountTitleText: ReactNode;
  recoveryAccountLinkLabel: string;
  createAccountButtonLabel: string;
  loginMask: string;
  recoveryAccountOnClick: () => void;
  createAccountOnClick: () => void;
  form: {
    login: FormInput<string>;
  };
}

export function SignIn({
  form,
  onSubmit,
  loading,
  submitButtonLabel,
  recoveryAccountTitleText,
  recoveryAccountLinkLabel,
  loginMask,
  recoveryAccountOnClick,
  createAccountButtonLabel,
  createAccountOnClick,
}: SignInProps) {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box marginBottom={1}>
          <InputMask
            mask={loginMask}
            value={form.login.value}
            disabled={loading}
            onFocus={form.login.onFocus}
            onBlur={form.login.onBlur}
            onChange={(event) => form.login.onChange(event.target.value)}
          >
            {() => (
              <TextField
                label={form.login.label}
                variant="outlined"
                fullWidth
                disabled={loading}
                error={form.login.error}
                helperText={form.login.helperText}
              />
            )}
          </InputMask>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? <CircularProgress size="1.5em" /> : submitButtonLabel}
        </Button>
      </form>
      <Box marginTop={1}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => loading === false && createAccountOnClick()}
        >
          {createAccountButtonLabel}
        </Button>
      </Box>
      <Box marginTop={2} marginBottom={1}>
        <Typography>
          {recoveryAccountTitleText}{" "}
          <Link
            onClick={() => loading === false && recoveryAccountOnClick()}
            style={{ cursor: "pointer" }}
          >
            {recoveryAccountLinkLabel}
          </Link>
        </Typography>
      </Box>
    </>
  );
}
