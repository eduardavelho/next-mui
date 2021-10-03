import React from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
declare type Item = {
    key: React.Key;
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
} & ({
    href: string;
} | {
    onClick: () => void;
});
export interface DrawerProps {
    itemsAriaLabel: string;
    items: Item[];
    drawerOpen: boolean;
    setDrawerOpen: (drawerOpen: boolean) => void;
}
export declare function Drawer({ itemsAriaLabel, items, drawerOpen, setDrawerOpen, }: DrawerProps): JSX.Element;
export {};
