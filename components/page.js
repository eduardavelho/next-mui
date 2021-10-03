"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const Paper_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Paper"));
const useMediaQuery_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/useMediaQuery"));
const breadcrumbs_1 = require("./breadcrumbs");
const is_color_1 = require("../utils/is-color");
const is_color_dark_1 = require("../utils/is-color-dark");
function Page({ header, children, breadcrumbs, background, paper = false, }) {
    const theme = (0, styles_1.useTheme)();
    const backgroundFallback = theme.palette.primary.main;
    const isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("sm"));
    const backgroundIsDark = background
        ? (0, is_color_1.isColor)(background) && (0, is_color_dark_1.isColorDark)(background)
        : (0, is_color_dark_1.isColorDark)(backgroundFallback);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Box_1.default, { paddingTop: isDesktop ? 8 : 2, paddingBottom: paper ? 24 : undefined, paddingX: { xs: 2, sm: 2, md: 6 }, paddingLeft: { md: 20 }, color: backgroundIsDark ? theme.palette.common.white : undefined, style: { background: background || backgroundFallback } },
            react_1.default.createElement(Box_1.default, { maxWidth: "960px" },
                react_1.default.createElement(Box_1.default, { paddingBottom: paper ? undefined : isDesktop ? 8 : 2 }, header),
                !paper && breadcrumbs !== undefined && breadcrumbs.length && (react_1.default.createElement(Box_1.default, { color: backgroundIsDark ? theme.palette.common.white : undefined, paddingBottom: isDesktop ? 2 : 1 },
                    react_1.default.createElement(breadcrumbs_1.Breadcrumbs, { breadcrumbs: breadcrumbs }))))),
        react_1.default.createElement(Box_1.default, { bgcolor: paper ? undefined : theme.palette.common.white },
            react_1.default.createElement(Box_1.default, { marginX: { xs: 2, sm: 2, md: 6 }, marginLeft: { md: 20 }, marginTop: paper ? -20 : undefined, maxWidth: "960px" },
                paper && breadcrumbs !== undefined && breadcrumbs.length && (react_1.default.createElement(Box_1.default, { color: backgroundIsDark ? theme.palette.common.white : undefined, marginBottom: 1 },
                    react_1.default.createElement(breadcrumbs_1.Breadcrumbs, { breadcrumbs: breadcrumbs }))),
                react_1.default.createElement(Box_1.default, { minHeight: "80vh" }, paper ? (react_1.default.createElement(Box_1.default, { marginBottom: isDesktop ? 6 : 2 },
                    react_1.default.createElement(Paper_1.default, { elevation: 6 },
                        react_1.default.createElement(Box_1.default, null, children)))) : (react_1.default.createElement(Box_1.default, { paddingY: isDesktop ? 6 : 2 }, children)))))));
}
exports.Page = Page;
//# sourceMappingURL=page.js.map