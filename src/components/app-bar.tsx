import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";

type Item = { key: React.Key; label: string } & (
  | { href: string }
  | { onClick: () => void }
);

type Icon = { key: React.Key; Icon: React.ElementType; ariaLabel: string } & (
  | { href: string }
  | { onClick: () => void }
);

export interface AppBarProps {
  backgroundColor?: string;
  color?: string;
  shortName?: string;
  logo: string;
  logoWidth?: number;
  logoHeight?: number;
  icons: Icon[];
  items: Item[];
  itemsAriaLabel: string;
  drawerButtonAriaLabel: string;
  setDrawerOpen: (drawerOpen: boolean) => void;
  drawerIcon?: React.ElementType;
}

export function AppBar({
  backgroundColor,
  color,
  shortName,
  logo,
  logoWidth = 36,
  logoHeight = 36,
  icons,
  items,
  itemsAriaLabel,
  drawerButtonAriaLabel,
  setDrawerOpen,
  drawerIcon = MenuIcon,
}: AppBarProps) {
  const DrawerIcon = drawerIcon;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollTrigger = useScrollTrigger({
    target: typeof window !== "undefined" ? window : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!scrollTrigger}>
      <MuiAppBar
        position="sticky"
        style={{
          backgroundColor: backgroundColor || theme.palette.primary.main,
          color: color || theme.palette.primary.contrastText,
        }}
      >
        <Toolbar>
          <Link href="/" passHref>
            <a
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                marginRight={shortName ? 1.5 : 3}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <img
                  alt=""
                  src={logo}
                  width={logoWidth}
                  height={logoHeight}
                  style={{
                    width: logoWidth,
                    height: "auto",
                    maxHeight: 36,
                    maxWidth: 96,
                  }}
                />
              </Box>
              {shortName && (
                <Box marginRight={isMobile ? undefined : 3}>
                  <Typography variant="subtitle1" component="span">
                    {shortName}
                  </Typography>
                </Box>
              )}
            </a>
          </Link>
          <Hidden smDown>
            <Tabs value={false} arial-label={itemsAriaLabel} component="nav">
              {items.map((item) =>
                "href" in item ? (
                  <Link href={item.href} passHref key={item.key}>
                    <Tab label={item.label} component="a" tabIndex={0} />
                  </Link>
                ) : (
                  <Tab
                    key={item.key}
                    label={item.label}
                    onClick={item.onClick}
                    tabIndex={0}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                )
              )}
            </Tabs>
          </Hidden>
          <Box
            display="flex"
            flexGrow={1}
            justifyContent="flex-end"
            alignItems="center"
          >
            {icons.map((item) => (
              <Box key={item.key} marginRight={1.5}>
                {"href" in item ? (
                  <Link href={item.href} passHref>
                    <IconButton
                      edge="end"
                      color="inherit"
                      aria-label={item.ariaLabel}
                      component="a"
                      href={item.href}
                    >
                      <item.Icon />
                    </IconButton>
                  </Link>
                ) : (
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label={item.ariaLabel}
                    onClick={item.onClick}
                  >
                    <item.Icon />
                  </IconButton>
                )}
              </Box>
            ))}
            <IconButton
              edge="end"
              color="inherit"
              aria-label={drawerButtonAriaLabel}
              onClick={() => setDrawerOpen(true)}
            >
              <DrawerIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </MuiAppBar>
    </Slide>
  );
}
