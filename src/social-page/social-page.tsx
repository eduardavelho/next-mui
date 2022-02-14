import React from "react";
import { SocialCardGrid, SocialCardGridProps } from "./social-card-grid";
import { Page, PageProps } from "../page/page";
import {
  TitleDescriptionInfo,
  TitleDescriptionInfoProps,
} from "../components/title-description-info";

export type SocialPageProps = {} & Omit<PageProps, "header" | "children"> &
  TitleDescriptionInfoProps &
  Omit<SocialCardGridProps, "hasMoreItems" | "onRequestMoreItems">;

export function SocialPage({
  title,
  description,
  items,
  ...pageProps
}: SocialPageProps) {
  return (
    <Page
      header={<TitleDescriptionInfo title={title} description={description} />}
      {...pageProps}
    >
      <SocialCardGrid
        items={items}
        hasMoreItems={false}
        onRequestMoreItems={() => {}}
      />
    </Page>
  );
}
