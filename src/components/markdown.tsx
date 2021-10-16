import React from "react";
import { useMarkdownStyles } from "../utils/use-markdown-styles";

export interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  const markdownClasses = useMarkdownStyles();

  return (
    <div
      className={markdownClasses.markdown}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
