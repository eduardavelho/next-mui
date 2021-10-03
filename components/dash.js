"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dash = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const Hidden_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Hidden"));
const app_bar_1 = require("./app-bar");
const bottom_navigation_1 = require("./bottom-navigation");
const drawer_1 = require("./drawer");
const footer_1 = require("./footer");
const snackbar_1 = require("./snackbar");
function Dash({ appBarBackgroundColor, appBarColor, logo, shortName, appBarItems, appBarItemsAriaLabel, drawerButtonAriaLabel, drawerItemsAriaLabel, drawerItems, drawerOpen, setDrawerOpen, footerItemsAriaLabel, footerItems, footerColor, footerBackgroundColor, bottomNavigationItems, snackbarContent, setSnackbarContent, children, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(app_bar_1.AppBar, { backgroundColor: appBarBackgroundColor, color: appBarColor, shortName: shortName, logo: logo, drawerButtonAriaLabel: drawerButtonAriaLabel, itemsAriaLabel: appBarItemsAriaLabel, setDrawerOpen: (drawerOpen) => setDrawerOpen(drawerOpen), items: appBarItems }),
        react_1.default.createElement(drawer_1.Drawer, { itemsAriaLabel: drawerItemsAriaLabel, items: drawerItems, drawerOpen: drawerOpen, setDrawerOpen: (drawerOpen) => setDrawerOpen(drawerOpen) }),
        react_1.default.createElement("main", null, children),
        react_1.default.createElement(footer_1.Footer, { itemsAriaLabel: footerItemsAriaLabel, items: footerItems, color: footerColor, backgroundColor: footerBackgroundColor }),
        react_1.default.createElement(Hidden_1.default, { smUp: true },
            react_1.default.createElement(bottom_navigation_1.BottomNavigation, { items: bottomNavigationItems })),
        react_1.default.createElement(snackbar_1.Snackbar, { content: snackbarContent, setContent: setSnackbarContent })));
}
exports.Dash = Dash;
//# sourceMappingURL=dash.js.map