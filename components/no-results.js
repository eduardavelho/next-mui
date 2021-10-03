"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoResults = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const styles_1 = require("@material-ui/core/styles");
const useMediaQuery_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/useMediaQuery"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Typography"));
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
function NoResults({ noResultsText, noResultsDescription, }) {
    const theme = (0, styles_1.useTheme)();
    const isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("sm"));
    return (react_1.default.createElement(Box_1.default, { width: "100%", textAlign: "center" },
        react_1.default.createElement(Box_1.default, { marginBottom: 0.8 },
            react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h4" : "h5", component: "div", style: {
                    fontWeight: 400,
                    lineHeight: "1.1",
                } }, noResultsText)),
        react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "body1" : "body2", component: "div" }, noResultsDescription)));
}
exports.NoResults = NoResults;
//# sourceMappingURL=no-results.js.map