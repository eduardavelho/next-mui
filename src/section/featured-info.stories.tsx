import React from "react";
import { Meta } from "@storybook/react";
import { FeaturedInfo } from "./featured-info";

export default {
  title: "Example/FeaturedInfo",
  component: FeaturedInfo,
} as Meta;

export const Usage = () => {
  return (
    <FeaturedInfo
      title="Integração com as ferramentas e os apps que sua equipe já usa"
      content="O Drive complementa e se integra à tecnologia usada pela sua equipe. Colabore nos arquivos do Microsoft Office sem precisar converter qualquer formato. Além disso, é possível editar e armazenar mais de 100 outros tipos de arquivo, como PDFs, CADs, imagens e muito mais. "
      background="red"
      color="blue"
      image="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      imageAlt="Doge alt text"
      imageWidth={256}
    />
  );
};
