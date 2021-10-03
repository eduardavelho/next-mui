import createMuiTheme from "@material-ui/core/styles/createTheme";

export const createTheme = (colors: {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}) =>
  createMuiTheme({
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
