import createMuiTheme from "@material-ui/core/styles/createTheme";
import type { Theme } from "../types";

export function createTheme(colors: {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}): Theme {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.primaryColor,
      },
      secondary: {
        main: colors.secondaryColor,
      },
      background: {
        default: colors.backgroundColor,
      },
    },
  });

  return theme as any;
}
