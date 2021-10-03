"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemList = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Typography"));
const styles_1 = require("@material-ui/core/styles");
const useMediaQuery_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/useMediaQuery"));
const is_color_1 = require("../utils/is-color");
const is_color_dark_1 = require("../utils/is-color-dark");
function ItemList({ title, titleColor, background, items, }) {
    const theme = (0, styles_1.useTheme)();
    const backgroundFallback = theme.palette.primary.main;
    const isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("sm"));
    const backgroundIsDark = background
        ? (0, is_color_1.isColor)(background) && (0, is_color_dark_1.isColorDark)(background)
        : (0, is_color_dark_1.isColorDark)(backgroundFallback);
    return (react_1.default.createElement(Box_1.default, { paddingY: 16, paddingX: 2, style: {
            background: background || backgroundFallback,
            color: backgroundIsDark ? "rgba(255, 255, 255, 0.8)" : "inherit",
        } },
        react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", maxWidth: 720, marginX: "auto" },
            title && (react_1.default.createElement(Box_1.default, { marginBottom: 4, color: titleColor || theme.palette.primary.contrastText },
                react_1.default.createElement(Typography_1.default, { align: "center", variant: isDesktop ? "h3" : "h4", component: "h1" }, title))),
            items.map(({ key, text, image }, index) => (react_1.default.createElement(Box_1.default, { key: key, marginBottom: items.length - 1 === index ? 0 : 8, width: "100%" },
                react_1.default.createElement(InfoView, { text: text, image: image, reverse: index % 2 !== 0 })))))));
}
exports.ItemList = ItemList;
function InfoViewImage({ image, text }) {
    const theme = (0, styles_1.useTheme)();
    const isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("sm"));
    return (react_1.default.createElement("img", { src: image, alt: "", style: {
            width: isDesktop ? 128 : 72,
            height: isDesktop ? 128 : 72,
            borderRadius: isDesktop ? 64 : 36,
            objectFit: "cover",
        } }));
}
function InfoViewText({ text, reverse }) {
    const theme = (0, styles_1.useTheme)();
    const isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("sm"));
    return (react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center", flexGrow: 1 },
        react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h5" : "body1", component: "p", align: reverse === true ? "right" : undefined, style: {
                width: "100%",
            } }, text)));
}
function InfoView({ text, image, reverse, }) {
    if (reverse) {
        return (react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center" },
            react_1.default.createElement(InfoViewText, { text: text, reverse: true }),
            react_1.default.createElement(Box_1.default, { marginLeft: 2 },
                react_1.default.createElement(InfoViewImage, { image: image, text: text }))));
    }
    else {
        return (react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center" },
            react_1.default.createElement(Box_1.default, { marginRight: 2 },
                react_1.default.createElement(InfoViewImage, { image: image, text: text })),
            react_1.default.createElement(InfoViewText, { text: text })));
    }
}
//# sourceMappingURL=item-list.js.map