import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export function useViewport() {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up(1600));
  const isLaptop = !isDesktop && useMediaQuery(theme.breakpoints.up("md"));

  return { isPhone, isTablet, isLaptop, isDesktop };
}
