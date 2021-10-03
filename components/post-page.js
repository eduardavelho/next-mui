"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostPage = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const styles_1 = require("@material-ui/core/styles");
const post_info_1 = require("./post-info");
const page_1 = require("./page");
const is_color_1 = require("../utils/is-color");
const is_color_dark_1 = require("../utils/is-color-dark");
function PostPage(_a) {
    var { children, background, paper, breadcrumbs } = _a, postInfoProps = (0, tslib_1.__rest)(_a, ["children", "background", "paper", "breadcrumbs"]);
    const theme = (0, styles_1.useTheme)();
    const backgroundIsDark = background
        ? (0, is_color_1.isColor)(background) && (0, is_color_dark_1.isColorDark)(background)
        : (0, is_color_dark_1.isColorDark)(theme.palette.primary.main);
    const pageProps = {
        background,
        paper,
        breadcrumbs,
        backgroundIsDark,
    };
    return (react_1.default.createElement(page_1.Page, Object.assign({}, pageProps, { header: react_1.default.createElement(post_info_1.PostInfo, Object.assign({}, postInfoProps)) }),
        react_1.default.createElement(Box_1.default, { maxWidth: "720px", marginX: "auto" }, children)));
}
exports.PostPage = PostPage;
//# sourceMappingURL=post-page.js.map