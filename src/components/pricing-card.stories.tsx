import React from "react";
import { Meta } from "@storybook/react";
import { PricingCard } from "./pricing-card";

export default {
  title: "Example/PricingCard",
  component: PricingCard,
} as Meta;

export const Usage = () => (
  <PricingCard
    overlinePrice="Seja membro"
    price="R$150,00"
    promotionalPrice="R$120,00"
    priceDescription="ao mês"
    features={[
      { key: 1, content: "Programador e bolsista-pesquisador" },
      { key: 2, content: "doutorado financiado pelo Conselho" },
      { key: 3, content: "Nacional de Desenvolvimento Científico" },
    ]}
    descriptionText="Programador e bolsista-pesquisador de doutorado financiado pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico do Brasil (CNPq)."
    subscribeLabel="Inscreva-se"
    subscribeHref="/"
  />
);
