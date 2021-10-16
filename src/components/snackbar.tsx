import React from "react";
import MuiSnackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

interface Content {
  message: React.ReactNode;
  severity: "error" | "info" | "success" | "warning" | undefined;
}

export interface SnackbarProps {
  content: Content;
  setContent: (content: Content) => void;
}

const emptyContent: Content = {
  message: undefined,
  severity: undefined,
};

export function Snackbar({
  content: { message, severity },
  setContent,
}: SnackbarProps) {
  return (
    <>
      {message !== undefined && (
        <MuiSnackbar
          open={message !== undefined}
          autoHideDuration={6000}
          onClose={() => setContent(emptyContent)}
        >
          <Alert
            onClose={() => setContent(emptyContent)}
            severity={severity ?? "info"}
          >
            {message}
          </Alert>
        </MuiSnackbar>
      )}
    </>
  );
}
