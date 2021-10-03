"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const useMediaQuery_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/useMediaQuery"));
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const styles_1 = require("@material-ui/core/styles");
const no_results_1 = require("./no-results");
const search_header_1 = require("./search-header");
const post_card_grid_1 = require("./post-card-grid");
const breadcrumbs_1 = require("./breadcrumbs");
function Blog({ title, titleColor, background, options, value, placeholder, noOptionsText, disabled, loading, onRequestMorePosts, onChange, hasMorePosts, posts, noResultsText, noResultsDescription, breadcrumbs, }) {
    const theme = (0, styles_1.useTheme)();
    const isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("md"));
    const searchHeaderProps = {
        title,
        titleColor,
        background,
        options,
        value,
        placeholder,
        noOptionsText,
        disabled,
        onChange,
        loading,
    };
    const postCardGridProps = {
        titleColor,
        onRequestMorePosts,
        hasMorePosts,
        posts,
    };
    const noResultsProps = {
        noResultsText,
        noResultsDescription,
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(search_header_1.SearchHeader, Object.assign({}, searchHeaderProps)),
        react_1.default.createElement(Box_1.default, { maxWidth: "960px", marginX: isDesktop ? "auto" : 1.6, marginY: 1.6 },
            react_1.default.createElement(breadcrumbs_1.Breadcrumbs, { breadcrumbs: breadcrumbs }),
            react_1.default.createElement(Box_1.default, { minHeight: "60vh" }, posts.length > 0 ? (react_1.default.createElement(post_card_grid_1.PostCardGrid, Object.assign({}, postCardGridProps))) : (react_1.default.createElement(Box_1.default, { paddingY: isDesktop ? 8 : 4 },
                react_1.default.createElement(no_results_1.NoResults, Object.assign({}, noResultsProps))))))));
}
exports.Blog = Blog;
//# sourceMappingURL=blog.js.map