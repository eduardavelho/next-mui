"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Typography"));
const styles_1 = require("@material-ui/core/styles");
const useMediaQuery_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/useMediaQuery"));
function Banner({ image, imageAlt, imageWidth = 128, background, color, title, subtitle, }) {
    const theme = (0, styles_1.useTheme)();
    const isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("sm"));
    return (react_1.default.createElement(Box_1.default, { paddingY: 16, paddingX: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: color || theme.palette.primary.contrastText, style: {
            background: background || theme.palette.primary.main,
            backgroundSize: "cover",
        } },
        react_1.default.createElement(Box_1.default, { maxWidth: 960, marginX: "auto" },
            image && (react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "center", justifyContent: "center" },
                react_1.default.createElement("img", { src: image, alt: imageAlt, style: {
                        width: imageWidth,
                    } }))),
            title && (react_1.default.createElement(Box_1.default, { marginBottom: subtitle && 2, marginTop: image && 6 },
                react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h3" : "h4", component: "h1", align: "center" }, title))),
            subtitle && (react_1.default.createElement(Box_1.default, null,
                react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h4" : "h6", component: "h2", align: "center", style: {
                        fontWeight: 300,
                    } }, subtitle))))));
}
exports.Banner = Banner;
//# sourceMappingURL=banner.js.map