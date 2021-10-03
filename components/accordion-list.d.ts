import React from "react";
export interface AccordionListProps {
    items: {
        key: React.Key;
        header: React.ReactNode;
        content: React.ReactNode;
    }[];
    expandIconAriaLabel: string;
}
export declare function AccordionList({ items, expandIconAriaLabel, }: AccordionListProps): JSX.Element;
