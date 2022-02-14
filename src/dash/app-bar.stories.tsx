import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { Meta } from "@storybook/react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar } from "./app-bar";

export default {
  title: "Example/AppBar",
  component: AppBar,
} as Meta;

export const Usage = () => {
  return (
    <div>
      <AppBar
        backgroundColor="red"
        itemsAriaLabel="Items"
        color="yellow"
        drawerButtonAriaLabel="Drawer button"
        logo="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
        logoWidth={56}
        logoHeight={42}
        shortName="App name"
        setDrawerOpen={() => {
          alert("Drawer open");
        }}
        drawerIcon={() => (
          <Avatar src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg" />
        )}
        items={[
          { key: 1, label: "Link A", href: "/" },
          { key: 2, label: "Link B", href: "/" },
          { key: 3, label: "Link C", href: "/" },
        ]}
        icons={[
          { key: 1, ariaLabel: "Link A", href: "/", Icon: MenuIcon },
          {
            key: 2,
            ariaLabel: "Button B",
            onClick() {
              alert("teste");
            },
            Icon: MenuIcon,
          },
          { key: 3, ariaLabel: "Link C", href: "/", Icon: MenuIcon },
        ]}
      />
      <Box sx={{ my: 2 }}>
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </Box>
    </div>
  );
};
