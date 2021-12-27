import React from "react";
import { Meta } from "@storybook/react";
import AlarmOffIcon from "@material-ui/icons/AlarmOff";
import { Dash, DashProps } from "./dash";

export default {
  title: "Example/Dash",
  component: Dash,
} as Meta;

export const Usage = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [snackbarContent, setSnackbarContent] = React.useState({
    message: undefined,
    severity: "info",
  } as DashProps["snackbarContent"]);

  return (
    <Dash
      appBarBackgroundColor="red"
      appBarItemsAriaLabel="Items"
      appBarIcons={[]}
      appBarColor="yellow"
      drawerButtonAriaLabel="Drawer button"
      logo="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      shortName="App name"
      setDrawerOpen={setDrawerOpen}
      appBarItems={[
        { key: 1, label: "Link A", href: "/" },
        { key: 2, label: "Link B", href: "/" },
        { key: 3, label: "Link C", href: "/" },
      ]}
      bottomNavigationItems={[
        { key: 1, href: "/", label: "Alarm Off", Icon: AlarmOffIcon },
        { key: 2, href: "/a", label: "Alarm Off 2", Icon: AlarmOffIcon },
        { key: 3, href: "/b", label: "Alarm Off 3", Icon: AlarmOffIcon },
      ]}
      drawerItems={[
        { key: 1, href: "/", label: "Alarm Off", Icon: AlarmOffIcon },
        { key: 2, href: "/a", label: "Alarm Off 2", Icon: AlarmOffIcon },
        {
          key: 3,
          onClick() {
            setSnackbarContent({
              message: "Message here",
              severity: "info",
            });
          },
          label: "Show snackbar",
          Icon: AlarmOffIcon,
        },
      ]}
      drawerItemsAriaLabel="Drawer items"
      drawerOpen={drawerOpen}
      footerItems={[
        { key: 1, label: "Link A", href: "/" },
        { key: 2, label: "Link B", href: "/" },
        { key: 3, label: "Link C", href: "/" },
        { key: 4, label: "Link D", href: "/" },
        { key: 5, label: "Link E", href: "/" },
        { key: 6, label: "Link F", href: "/" },
      ]}
      footerItemsAriaLabel="Footer items"
      setSnackbarContent={setSnackbarContent}
      snackbarContent={snackbarContent}
      footerBackgroundColor="green"
      footerColor="red"
      footerSocialIconsText="Siga nas redes sociais"
      socialAnchorTitle="Ver em"
      facebook
      smallIcons
      instagram="tes"
      whatsApp="tes"
      lattes="tes"
      twitter
      gitHub="tes"
      email="tes"
      linkedIn
    >
      <div>Content goes here</div>
    </Dash>
  );
};
