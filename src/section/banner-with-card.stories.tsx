import React from "react";
import { Meta } from "@storybook/react";
import { BannerWithCard } from "./banner-with-card";
import { SocialCard } from "../social-page/social-card";

export default {
  title: "Example/BannerWithCard",
  component: BannerWithCard,
} as Meta;

export const Usage = () => {
  return (
    <BannerWithCard
      title="Title goes here"
      content="Programador e bolsista-pesquisador de doutorado financiado pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico do Brasil (CNPq)."
      backgroundColor="red"
      color="purple"
      backgroundImage="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
      actions={[
        { key: 1, label: "Já sou membro / Entrar", href: "/" },
        { key: 2, label: "FAQ", href: "/" },
      ]}
      card={
        <SocialCard
          name="Full name"
          nameColor="red"
          description="People description goes here"
          picture="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
          about="Programador e bolsista-pesquisador de doutorado financiado pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico do Brasil (CNPq). Possui graduação em Sistemas para Internet (FEEVALE, 2015), mestrado em Diversidade Cultural e Inclusão Social (FEEVALE, 2018) e atualmente é doutorando no PPG em Processos e Manifestações Culturais da Universidade Feevale."
          tags={[
            { key: 1, tag: "Some tag" },
            { key: 2, tag: "Another tag" },
          ]}
          elevation={9}
          smallIcons={true}
          socialAnchorTitle="Anchor title"
          email="email@email.email"
          facebook="https://facebook.com/teste"
          instagram="https://instagram.com/teste"
          linkedIn="https://linkedin.com/teste"
          twitter="https://twitter.com/teste"
          whatsApp="https://whatsapp.com/teste"
          lattes="https://lattes.cnpq.br/teste"
        />
      }
    />
  );
};
