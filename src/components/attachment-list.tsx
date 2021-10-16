import React from "react";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
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
        <Box key={key} marginRight={0.5} marginBottom={0.5}>
          <Chip
            color={itemColor}
            component="a"
            download={title}
            href={href}
            label={title}
            icon={<GetAppIcon />}
            style={{
              cursor: "pointer",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
