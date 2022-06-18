import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import MuiBottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Slide from "@material-ui/core/Slide";
import Link from "next/link";
import { useRouter } from "next/router";

type Item = {
  key: React.Key;
  label: string;
  Icon: React.ElementType;
} & ({ href: string } | { onClick: () => void });

export interface BottomNavigationProps {
  items: Item[];
}

export function BottomNavigation({ items }: BottomNavigationProps) {
  const [value, setValue] = React.useState(undefined as string | undefined);
  const router = useRouter() ?? { pathname: "/" };
  const scrollTrigger = useScrollTrigger({
    target: typeof window !== "undefined" ? window : undefined,
  });

  function mapItemToValue(item: Item) {
    const hash = window.location.hash;
    const url = router.pathname
      .concat(router.pathname.endsWith("/") ? "" : "/")
      .concat(hash ? hash.concat(hash.endsWith("/") ? "" : "/") : "");
    const href =
      "href" in item
        ? item.href.concat(item.href.endsWith("/") ? "" : "/")
        : "";

    if ("href" in item && url.includes(href)) {
      return item.href;
    } else {
      return undefined;
    }
  }

  const getValue = () =>
    items
      .map((item) => mapItemToValue(item))
      .filter((item) => item)
      .sort()
      .reverse()[0];

  React.useEffect(() => {
    setValue(getValue());
  }, []);

  React.useEffect(() => {
    setValue(getValue());
  }, [router.pathname]);

  return (
    <Slide appear={false} direction="up" in={!scrollTrigger}>
      <MuiBottomNavigation
        value={value}
        onChange={(_, nextValue) => {
          if (!router.pathname.startsWith(nextValue)) {
            setValue(nextValue);
          }
        }}
        style={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          zIndex: 1100,
        }}
        showLabels
      >
        {items.map(({ key, label, Icon, ...item }) =>
          "href" in item ? (
            <Link
              href={item.href}
              passHref
              key={`${key}-bottom-navigation-item`}
            >
              <BottomNavigationAction
                component="a"
                value={item.href}
                label={label}
                icon={<Icon />}
                showLabel
                className={item.href === value ? "Mui-selected" : undefined}
              />
            </Link>
          ) : (
            <BottomNavigationAction
              key={`${key}-bottom-navigation`}
              value={key}
              onClick={item.onClick}
              label={label}
              icon={<Icon />}
              showLabel
              style={{
                cursor: "pointer",
              }}
            />
          )
        )}
      </MuiBottomNavigation>
    </Slide>
  );
}
