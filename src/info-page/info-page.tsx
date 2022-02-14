import React from "react";
import { Page, PageProps } from "../page/page";
import {
  TitleDescriptionInfo,
  TitleDescriptionInfoProps,
} from "../components/title-description-info";
import {
  AccordionList,
  AccordionListProps,
} from "../components/accordion-list";

export type InfoPageProps = {} & Omit<PageProps, "header" | "children"> &
  TitleDescriptionInfoProps &
  AccordionListProps;

export function InfoPage({
  title,
  description,
  expandIconAriaLabel,
  items,
  ...pageProps
}: InfoPageProps) {
  return (
    <Page
      header={<TitleDescriptionInfo title={title} description={description} />}
      {...pageProps}
    >
      <AccordionList expandIconAriaLabel={expandIconAriaLabel} items={items} />
    </Page>
  );
}
