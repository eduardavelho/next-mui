"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBar = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Tabs_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Tabs"));
const Tab_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Tab"));
const AppBar_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/AppBar"));
const Toolbar_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Toolbar"));
const IconButton_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/IconButton"));
const Hidden_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Hidden"));
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Typography"));
const Menu_1 = (0, tslib_1.__importDefault)(require("@material-ui/icons/Menu"));
const link_1 = (0, tslib_1.__importDefault)(require("next/link"));
function AppBar({ backgroundColor, color, shortName, logo, items, itemsAriaLabel, drawerButtonAriaLabel, setDrawerOpen, drawerIcon = Menu_1.default, }) {
    const DrawerIcon = drawerIcon;
    const theme = (0, styles_1.useTheme)();
    return (react_1.default.createElement(AppBar_1.default, { position: "sticky", style: {
            backgroundColor: backgroundColor || theme.palette.primary.main,
            color: color || theme.palette.primary.contrastText,
        } },
        react_1.default.createElement(Toolbar_1.default, null,
            react_1.default.createElement(link_1.default, { href: "/", passHref: true },
                react_1.default.createElement("a", { style: {
                        color: "inherit",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    } },
                    react_1.default.createElement(Box_1.default, { marginRight: 1, display: "flex", alignItems: "center", justifyContent: "center" },
                        react_1.default.createElement("img", { alt: "", src: logo, style: {
                                maxHeight: 42,
                                maxWidth: 96,
                            } })),
                    react_1.default.createElement(Box_1.default, { marginRight: 3 },
                        react_1.default.createElement(Typography_1.default, { variant: "h6", component: "span" }, shortName)))),
            react_1.default.createElement(Hidden_1.default, { smDown: true },
                react_1.default.createElement("nav", null,
                    react_1.default.createElement(Tabs_1.default, { value: false, "arial-label": itemsAriaLabel }, items.map((item) => "href" in item ? (react_1.default.createElement(link_1.default, { href: item.href, passHref: true, key: item.key },
                        react_1.default.createElement(Tab_1.default, { label: item.label, component: "a" }))) : (react_1.default.createElement(Tab_1.default, { key: item.key, label: item.label, onClick: item.onClick, style: {
                            cursor: "pointer",
                        } })))))),
            react_1.default.createElement(Box_1.default, { display: "flex", flexGrow: 1, justifyContent: "flex-end" },
                react_1.default.createElement(IconButton_1.default, { edge: "end", color: "inherit", "aria-label": drawerButtonAriaLabel, onClick: () => setDrawerOpen(true) },
                    react_1.default.createElement(DrawerIcon, null))))));
}
exports.AppBar = AppBar;
//# sourceMappingURL=app-bar.js.map