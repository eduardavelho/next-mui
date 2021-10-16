import React from "react";
import MuiBottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
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
    <MuiBottomNavigation
      value={value}
      onChange={(_, nextValue) => {
        if (!router.pathname.startsWith(nextValue)) {
          setValue(nextValue);
        }
      }}
      style={{
        width: "100%",
        position: "sticky",
        bottom: 0,
        zIndex: 1100,
      }}
      showLabels
    >
      {items.map(({ key, label, Icon, ...item }) =>
        "href" in item ? (
          <Link href={item.href} passHref key={key}>
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
            key={key}
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
  );
}
