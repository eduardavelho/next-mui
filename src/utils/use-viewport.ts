import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export function useViewport() {
  const theme = useTheme();
  const useIsPhone = () => useMediaQuery(theme.breakpoints.down("sm"));
  const useIsTablet = () => useMediaQuery(theme.breakpoints.down("md"));
  const useIsLaptop = () =>
    useMediaQuery(theme.breakpoints.between("md", 1600));
  const useIsDesktop = () => useMediaQuery(theme.breakpoints.up(1600));

  return { useIsPhone, useIsTablet, useIsLaptop, useIsDesktop };
}
