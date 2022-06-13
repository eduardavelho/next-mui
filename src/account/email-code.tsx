import React, { ReactNode } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

export interface EmailCodeProps {
  emailCodeInfoText: ReactNode;
  onClickCloseButton: () => void;
  onSubmit: () => void;
  closeButtonLabel: string;
  onSubmitButtonLabel: string;
  loading: boolean;
}

export function EmailCode({
  emailCodeInfoText,
  onClickCloseButton,
  onSubmit,
  closeButtonLabel,
  onSubmitButtonLabel,
  loading,
}: EmailCodeProps) {
  return (
    <>
      <DialogContent>
        <Typography>{emailCodeInfoText}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => onClickCloseButton()}
        >
          {closeButtonLabel}
        </Button>
        <Button
          variant="contained"
          color="primary"
          autoFocus
          disabled={loading}
          onClick={() => onSubmit()}
        >
          {loading ? <CircularProgress /> : onSubmitButtonLabel}
        </Button>
      </DialogActions>
    </>
  );
}
