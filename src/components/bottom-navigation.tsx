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
    const url = router.pathname.concat(hash);

    if (
      "href" in item &&
      item.href
        .concat(item.href.endsWith("/") ? "" : "/")
        .startsWith(url.concat(url.endsWith("/") ? "" : "/"))
    ) {
      return item.href;
    } else {
      return undefined;
    }
  }

  const getValue = () =>
    items
      .map((item) => mapItemToValue(item))
      .concat(undefined)
      .sort()[0];

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
