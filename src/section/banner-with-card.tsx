import React from "react";
import Link from "next/link";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export interface BannerWithCardProps {
  backgroundImage: string;
  backgroundColor: string;
  color: string;
  title: React.ReactNode;
  content: React.ReactNode;
  card: React.ReactNode;
  actions?: Action[];
}

type Action = { key: React.Key; label: string } & (
  | { href: string }
  | { onClick: () => void }
);

export function BannerWithCard({
  backgroundImage,
  backgroundColor,
  color,
  title,
  content,
  actions,
  card,
}: BannerWithCardProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(1600));
  const showActionsInColumn = !isDesktop || (actions && actions.length > 2);

  return (
    <Box
      color={color}
      style={{
        background: backgroundColor,
        minHeight: `calc(${isLargeScreen ? "80vh" : "100vh"} - 64px)`,
      }}
    >
      <Box
        maxWidth={isLargeScreen ? "1140px" : "960px"}
        marginX="auto"
        display="flex"
        alignItems="center"
        flexDirection={isDesktop ? "row" : "column"}
        justifyContent={isDesktop ? undefined : "center"}
        paddingBottom={isDesktop ? undefined : 2}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width={isDesktop ? (isLargeScreen ? "690px" : "600px") : "100%"}
          minHeight={
            isDesktop
              ? `calc(${isLargeScreen ? "70vh" : "80vh"} - 64px)`
              : undefined
          }
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            borderRadius: isDesktop ? "0 0 16px 16px" : undefined,
            paddingBottom: isDesktop ? undefined : "100px",
          }}
        >
          <Box
            width={
              isDesktop
                ? `calc(${isLargeScreen ? "960px" : "600px"} - 100px - 32px)`
                : undefined
            }
            paddingX={2}
            paddingY={isDesktop ? undefined : 8}
            textAlign={isDesktop ? undefined : "center"}
          >
            <Box marginBottom={0.8}>
              <Typography variant={isDesktop ? "h3" : "h4"} component="h1">
                {title}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant={isDesktop ? "subtitle1" : "subtitle2"}
                component="p"
                style={{
                  lineHeight: 1.3,
                }}
              >
                {content}
              </Typography>
            </Box>
            {actions && actions.length > 0 && (
              <Box
                display="flex"
                flexDirection={showActionsInColumn ? "column" : "row"}
                marginTop={4}
              >
                {actions.map((action, index) => (
                  <Box
                    key={`${action.key}-banner-action`}
                    paddingTop={
                      showActionsInColumn && index !== 0 ? 1 : undefined
                    }
                    paddingRight={
                      !showActionsInColumn &&
                      actions.length === 2 &&
                      index === 0
                        ? 1
                        : undefined
                    }
                  >
                    {"href" in action ? (
                      <Link href={action.href} passHref>
                        <Button
                          size="large"
                          variant="outlined"
                          color="inherit"
                          component="a"
                          fullWidth={showActionsInColumn}
                        >
                          {action.label}
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        size="large"
                        variant="outlined"
                        color="inherit"
                        style={{
                          cursor: "pointer",
                        }}
                        fullWidth={showActionsInColumn}
                        onClick={action.onClick}
                      />
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
        <Box
          width={isDesktop ? "550px" : undefined}
          paddingX={2}
          style={{
            marginTop: isDesktop ? undefined : "-100px",
            marginLeft: isDesktop ? "-100px" : undefined,
          }}
        >
          {card}
        </Box>
      </Box>
    </Box>
  );
}
