import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

export interface AttachmentListProps {
  items: { key: React.Key; title: string; href: string }[];
  itemColor?: "primary" | "secondary" | "default" | undefined;
}

export function AttachmentList({
  items,
  itemColor = "secondary",
}: AttachmentListProps) {
  return (
    <Box flexWrap="wrap" display="flex" marginTop={2}>
      {items.map(({ title, href, key }) => (
        <Box
          key={`${key}-attachment-list-item`}
          marginRight={0.5}
          marginBottom={0.5}
        >
          <Button
            variant="contained"
            color={itemColor}
            component="a"
            download={title}
            href={href}
            title={title}
            startIcon={<GetAppIcon />}
          >
            {title}
          </Button>
        </Box>
      ))}
    </Box>
  );
}
