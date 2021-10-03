"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentCards = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const styles_1 = require("@material-ui/core/styles");
const useMediaQuery_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/useMediaQuery"));
const styles_2 = require("@material-ui/core/styles");
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Typography"));
const masonry_grid_1 = require("./masonry-grid");
const post_card_1 = require("./post-card");
function ContentCards({ title, subtitle, titleColor, cards, }) {
    const theme = (0, styles_1.useTheme)();
    const styles = useStyles();
    const isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("sm"));
    const color = titleColor || theme.palette.primary.main;
    return (react_1.default.createElement(Box_1.default, { paddingY: isDesktop ? 16 : 8, paddingX: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", style: {
            backgroundSize: "cover",
        } },
        react_1.default.createElement(Box_1.default, { maxWidth: 960, marginX: "auto" },
            title && (react_1.default.createElement(Box_1.default, { marginBottom: subtitle ? 1 : 4 },
                react_1.default.createElement(Typography_1.default, { align: "center", variant: isDesktop ? "h2" : "h4", component: "h2", style: {
                        color,
                    } }, title))),
            subtitle && (react_1.default.createElement(Box_1.default, { marginBottom: 4 },
                react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h5" : "subtitle1", align: "center", component: "h3", color: "textPrimary" }, subtitle))),
            react_1.default.createElement(Box_1.default, { className: styles.cards },
                react_1.default.createElement(masonry_grid_1.MasonryGrid, { spacing: theme.spacing(2), xs: 2, md: 2, lg: 3, xl: 3 }, cards.map(({ key, title, content, image, href }) => (react_1.default.createElement(post_card_1.PostCard, { key: key, title: title, subtitle: content, image: image, href: href, titleColor: color }))))))));
}
exports.ContentCards = ContentCards;
const useStyles = (0, styles_2.makeStyles)((theme) => ({
    cards: {
        "& .MuiButtonBase-root": {
            height: "256px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
        },
        "& .MuiButtonBase-root .MuiCardMedia-root": {
            width: "100%",
        },
    },
}));
//# sourceMappingURL=content-cards.js.map