import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";
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

export interface AppBarProps {
  backgroundColor?: string;
  color?: string;
  shortName: string;
  logo: string;
  items: Item[];
  itemsAriaLabel: string;
  drawerButtonAriaLabel: string;
  setDrawerOpen: (drawerOpen: boolean) => void;
  drawerIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export function AppBar({
  backgroundColor,
  color,
  shortName,
  logo,
  items,
  itemsAriaLabel,
  drawerButtonAriaLabel,
  setDrawerOpen,
  drawerIcon = MenuIcon,
}: AppBarProps) {
  const DrawerIcon = drawerIcon;
  const theme = useTheme();
  return (
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
              marginRight={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <img
                alt=""
                src={logo}
                style={{
                  maxHeight: 42,
                  maxWidth: 96,
                }}
              />
            </Box>
            <Box marginRight={3}>
              <Typography variant="h6" component="span">
                {shortName}
              </Typography>
            </Box>
          </a>
        </Link>
        <Hidden smDown>
          <nav>
            <Tabs value={false} arial-label={itemsAriaLabel}>
              {items.map((item) =>
                "href" in item ? (
                  <Link href={item.href} passHref key={item.key}>
                    <Tab label={item.label} component="a" />
                  </Link>
                ) : (
                  <Tab
                    key={item.key}
                    label={item.label}
                    onClick={item.onClick}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                )
              )}
            </Tabs>
          </nav>
        </Hidden>
        <Box display="flex" flexGrow={1} justifyContent="flex-end">
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
  );
}
