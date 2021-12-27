import React from "react";
import { Meta } from "@storybook/react";
import { Footer } from "./footer";

export default {
  title: "Example/Footer",
  component: Footer,
} as Meta;

export const Usage = () => {
  return (
    <Footer
      socialIconsText="Siga nas redes sociais"
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
      items={[
        {
          key: 3,
          label: "Link C",
          onClick() {
            alert("Click");
          },
        },
        { key: 4, label: "Link D", href: "/" },
        { key: 5, label: "Link E", href: "/" },
        { key: 6, label: "Link F", href: "/" },
        {
          key: 1,
          label: (
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
              style={{
                height: 54,
                width: "auto",
              }}
            />
          ),
          href: "/",
        },
        {
          key: 2,
          label: (
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
              style={{
                height: 54,
                width: "auto",
              }}
            />
          ),
          href: "/",
        },
      ]}
      itemsAriaLabel="Footer items"
      backgroundColor="#0A0310"
      color="#F44321"
    />
  );
};
