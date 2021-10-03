"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleDescriptionInfo = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Typography"));
const useMediaQuery_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/useMediaQuery"));
const styles_1 = require("@material-ui/core/styles");
function TitleDescriptionInfo({ title, description, }) {
    const theme = (0, styles_1.useTheme)();
    const isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("md"));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        title && (react_1.default.createElement(Box_1.default, null,
            react_1.default.createElement(Typography_1.default, { component: "h1", variant: isDesktop ? "h3" : "h5" }, title))),
        description && (react_1.default.createElement(Box_1.default, { marginTop: title ? 2 : undefined },
            react_1.default.createElement(Typography_1.default, { component: "h2", variant: isDesktop ? "subtitle1" : "subtitle2" }, description)))));
}
exports.TitleDescriptionInfo = TitleDescriptionInfo;
//# sourceMappingURL=title-description-info.js.map