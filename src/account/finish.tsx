import React, { ReactNode } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export interface FinishProps {
  finishTitleText: ReactNode;
  finishButtonLabel: string;
  finishInfoText: ReactNode;
  onClickFinishButton: () => void;
}

export function Finish({
  finishTitleText,
  finishInfoText,
  finishButtonLabel,
  onClickFinishButton,
}: FinishProps) {
  return (
    <>
      <Box marginBottom={3} textAlign="center">
        <Typography variant="h6">{finishTitleText}</Typography>
        <Box marginY={2}>
          <CheckCircleOutlineIcon
            style={{ width: "6em", height: "6em" }}
            color="primary"
          />
        </Box>
        <Typography>{finishInfoText}</Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => onClickFinishButton()}
      >
        {finishButtonLabel}
      </Button>
    </>
  );
}
