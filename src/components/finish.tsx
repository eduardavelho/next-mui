import React, { ReactNode } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export interface FinishProps {
  finishTitleText: ReactNode;
}

export function Finish({ finishTitleText }: FinishProps) {
  return (
    <Box textAlign="center">
      <CheckCircleOutlineIcon
        style={{ width: "6em", height: "6em" }}
        color="primary"
      />
      <Typography>{finishTitleText}</Typography>
    </Box>
  );
}
