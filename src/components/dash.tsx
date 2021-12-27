import React from "react";
import Hidden from "@material-ui/core/Hidden";
import { AppBar, AppBarProps } from "./app-bar";
import { BottomNavigation, BottomNavigationProps } from "./bottom-navigation";
import { Drawer, DrawerProps } from "./drawer";
import { Footer, FooterProps } from "./footer";
import { Snackbar, SnackbarProps } from "./snackbar";
import type { SocialIconsProps } from "./social-icons";

export type DashProps = {
  children: React.ReactNode;
  appBarBackgroundColor: AppBarProps["backgroundColor"];
  appBarColor: AppBarProps["color"];
  shortName: AppBarProps["shortName"];
  logo: AppBarProps["logo"];
  logoWidth?: AppBarProps["logoWidth"];
  logoHeight?: AppBarProps["logoHeight"];
  appBarItems: AppBarProps["items"];
  appBarItemsAriaLabel: AppBarProps["itemsAriaLabel"];
  appBarIcons: AppBarProps["icons"];
  drawerIcon?: AppBarProps["drawerIcon"];
  drawerButtonAriaLabel: AppBarProps["drawerButtonAriaLabel"];
  drawerItemsAriaLabel: DrawerProps["itemsAriaLabel"];
  drawerItems: DrawerProps["items"];
  drawerOpen: DrawerProps["drawerOpen"];
  setDrawerOpen: DrawerProps["setDrawerOpen"];
  footerItemsAriaLabel: FooterProps["itemsAriaLabel"];
  footerItems: FooterProps["items"];
  footerBackgroundColor: FooterProps["backgroundColor"];
  footerColor: FooterProps["color"];
  footerSocialIconsText?: FooterProps["socialIconsText"];
  bottomNavigationItems: BottomNavigationProps["items"];
  snackbarContent: SnackbarProps["content"];
  setSnackbarContent: SnackbarProps["setContent"];
} & SocialIconsProps;

export function Dash({
  appBarBackgroundColor,
  appBarColor,
  logo,
  logoWidth,
  logoHeight,
  shortName,
  appBarIcons,
  appBarItems,
  appBarItemsAriaLabel,
  drawerIcon,
  drawerButtonAriaLabel,
  drawerItemsAriaLabel,
  drawerItems,
  drawerOpen,
  setDrawerOpen,
  footerItemsAriaLabel,
  footerItems,
  footerColor,
  footerBackgroundColor,
  footerSocialIconsText,
  bottomNavigationItems,
  snackbarContent,
  setSnackbarContent,
  children,
  ...socialIconsProps
}: DashProps) {
  return (
    <>
      <AppBar
        backgroundColor={appBarBackgroundColor}
        color={appBarColor}
        shortName={shortName}
        logo={logo}
        logoWidth={logoWidth}
        logoHeight={logoHeight}
        drawerIcon={drawerIcon}
        drawerButtonAriaLabel={drawerButtonAriaLabel}
        itemsAriaLabel={appBarItemsAriaLabel}
        setDrawerOpen={(drawerOpen) => setDrawerOpen(drawerOpen)}
        items={appBarItems}
        icons={appBarIcons}
      />
      <Drawer
        itemsAriaLabel={drawerItemsAriaLabel}
        items={drawerItems}
        drawerOpen={drawerOpen}
        setDrawerOpen={(drawerOpen) => setDrawerOpen(drawerOpen)}
      />
      <main>{children}</main>
      <Footer
        socialIconsText={footerSocialIconsText}
        itemsAriaLabel={footerItemsAriaLabel}
        items={footerItems}
        color={footerColor}
        backgroundColor={footerBackgroundColor}
        {...socialIconsProps}
      />
      <Hidden smUp>
        <BottomNavigation items={bottomNavigationItems} />
      </Hidden>
      <Snackbar content={snackbarContent} setContent={setSnackbarContent} />
    </>
  );
}
