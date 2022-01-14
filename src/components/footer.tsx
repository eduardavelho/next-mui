import React from "react";
import Link from "next/link";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { SocialIcons, SocialIconsProps } from "./social-icons";

type Item = { key: React.Key; label: React.ReactNode } & (
  | { href: string }
  | { onClick: () => void }
);

export type FooterProps = {
  backgroundColor: string;
  color: string;
  itemsAriaLabel: string;
  items: Item[];
  socialIconsText?: string;
} & SocialIconsProps;

export function Footer({
  backgroundColor,
  color,
  itemsAriaLabel,
  items,
  socialIconsText,
  ...socialIconsProps
}: FooterProps) {
  return (
    <footer
      style={{
        backgroundColor,
        color,
      }}
    >
      {Object.keys(socialIconsProps).length > 0 && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingY={4}
        >
          {socialIconsText && (
            <Typography component="span" variant="overline">
              {socialIconsText}
            </Typography>
          )}
          <SocialIcons {...socialIconsProps} />
        </Box>
      )}
      <nav>
        <Tabs
          variant="scrollable"
          scrollButtons="on"
          arial-label={itemsAriaLabel}
          value={false}
        >
          {items.map((item) =>
            "href" in item ? (
              <Link href={item.href} passHref key={`${item.key}-footer`}>
                <Tab component="a" tabIndex={0} label={item.label} />
              </Link>
            ) : (
              <Tab
                tabIndex={0}
                key={`${item.key}-footer`}
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
    </footer>
  );
}
