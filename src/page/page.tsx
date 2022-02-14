import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Breadcrumbs, BreadcrumbsProps } from "./breadcrumbs";
import { isColor } from "../utils/is-color";
import { isColorDark } from "../utils/is-color-dark";

export interface PageProps {
  header: React.ReactNode;
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbsProps["breadcrumbs"];
  background?: string;
  color?: string;
  overHeader?: boolean;
}

export function Page({
  header,
  children,
  breadcrumbs,
  background,
  color,
  overHeader = false,
}: PageProps) {
  const theme = useTheme();
  const backgroundFallback = theme.palette.primary.main;
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const backgroundIsDark =
    background && isColor(background)
      ? isColorDark(background)
      : isColorDark(backgroundFallback);
  const headerColor =
    color || (backgroundIsDark ? theme.palette.common.white : undefined);

  return (
    <>
      <Box
        paddingTop={isDesktop ? 8 : 2}
        paddingBottom={overHeader ? 24 : undefined}
        paddingX={{ xs: 2, sm: 2, md: 6 }}
        paddingLeft={{ md: 20 }}
        color={
          color || (backgroundIsDark ? theme.palette.common.white : undefined)
        }
        style={{ background: background || backgroundFallback }}
      >
        <Box maxWidth="960px">
          <Box paddingBottom={overHeader ? undefined : isDesktop ? 8 : 2}>
            {header}
          </Box>
          {!overHeader && breadcrumbs !== undefined && breadcrumbs.length && (
            <Box color={headerColor} paddingBottom={isDesktop ? 2 : 1}>
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            </Box>
          )}
        </Box>
      </Box>
      <Box>
        <Box
          marginX={{ xs: 2, sm: 2, md: 6 }}
          marginLeft={{ md: 20 }}
          marginTop={overHeader ? -20 : undefined}
          maxWidth="960px"
        >
          {overHeader && breadcrumbs !== undefined && breadcrumbs.length && (
            <Box color={headerColor} marginBottom={1}>
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            </Box>
          )}
          <Box minHeight="80vh">
            {overHeader ? (
              <Box marginBottom={isDesktop ? 6 : 2}>
                <Box>{children}</Box>
              </Box>
            ) : (
              <Box paddingY={isDesktop ? 6 : 2}>{children}</Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
