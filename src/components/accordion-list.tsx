import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTheme } from "@material-ui/core/styles";

export interface AccordionListProps {
  items: {
    key: React.Key;
    header: React.ReactNode;
    content: React.ReactNode;
  }[];
  expandIconAriaLabel: string;
}

export function AccordionList({
  items,
  expandIconAriaLabel,
}: AccordionListProps) {
  const theme = useTheme();

  return (
    <Box>
      {items.map(({ header, content, key }) => (
        <Accordion key={key}>
          <AccordionSummary
            style={{
              paddingLeft: theme.spacing(1.5),
              paddingRight: theme.spacing(1.5),
            }}
            expandIcon={
              <Box paddingRight={{ sm: 0, md: 1 }}>
                <ExpandMoreIcon />
              </Box>
            }
            aria-controls={expandIconAriaLabel}
          >
            {header}
          </AccordionSummary>
          <AccordionDetails
            style={{
              paddingLeft: theme.spacing(1.5),
              paddingRight: theme.spacing(1.5),
            }}
          >
            <Box
              paddingRight={{ sm: 0, md: 8 }}
              paddingBottom={{ sm: 0, md: 2 }}
            >
              <Box
                paddingRight={{ sm: 0, md: 8 }}
                paddingBottom={{ sm: 0, md: 2 }}
              >
                {content}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
