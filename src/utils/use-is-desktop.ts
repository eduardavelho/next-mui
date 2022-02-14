import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export function useIsDesktop() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return isDesktop;
}
