import React from "react";
export interface BreadcrumbsProps {
    breadcrumbs: {
        key: React.Key;
        label: React.ReactNode;
        href: string;
    }[];
}
export declare function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps): JSX.Element;
