"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostInfo = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Typography"));
const Chip_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Chip"));
const Avatar_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Avatar"));
const ListItem_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/ListItem"));
const ListItemText_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/ListItemText"));
const ListItemAvatar_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/ListItemAvatar"));
const useMediaQuery_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/useMediaQuery"));
const social_icons_1 = require("./social-icons");
function PostInfo(_a) {
    var { title, description, date, dateText, authorName, authorPicture, authorDescription, tags, titleColor, backgroundIsDark } = _a, socialIconsProps = (0, tslib_1.__rest)(_a, ["title", "description", "date", "dateText", "authorName", "authorPicture", "authorDescription", "tags", "titleColor", "backgroundIsDark"]);
    const theme = (0, styles_1.useTheme)();
    const isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("sm"));
    const haveSocialIconsProps = Object.keys(socialIconsProps).length > 0;
    return (react_1.default.createElement(Box_1.default, null,
        tags !== undefined && tags.length > 0 && (react_1.default.createElement(Box_1.default, { marginBottom: isDesktop ? undefined : 2 }, tags.map(({ tag, key }) => (react_1.default.createElement(Chip_1.default, { key: key, size: "small", label: tag, style: {
                marginBottom: theme.spacing(0.3),
                marginRight: theme.spacing(0.3),
                backgroundColor: backgroundIsDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.1)",
                color: backgroundIsDark
                    ? theme.palette.common.white
                    : undefined,
            } }))))),
        title && (react_1.default.createElement(Box_1.default, { marginBottom: isDesktop ? 0.4 : 0.6 },
            react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h3" : "h5", component: "h1", style: {
                    lineHeight: 1.1,
                    fontWeight: isDesktop ? undefined : "bold",
                    color: titleColor || theme.palette.primary.contrastText,
                } }, title))),
        description && (react_1.default.createElement(Box_1.default, null,
            react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "subtitle1" : "body2", component: "h2", style: {
                    color: backgroundIsDark ? "rgba(255, 255, 255, 0.8)" : undefined,
                } }, description))),
        react_1.default.createElement(Box_1.default, { display: "flex", flexDirection: isDesktop ? "row" : "column", marginTop: isDesktop ? 3 : undefined },
            authorName && (react_1.default.createElement(Box_1.default, { display: "flex", flex: 1, marginTop: isDesktop ? undefined : 3 },
                react_1.default.createElement(ListItem_1.default, { component: "div", alignItems: "flex-start", style: {
                        padding: 0,
                    } },
                    react_1.default.createElement(ListItemAvatar_1.default, null,
                        react_1.default.createElement(Avatar_1.default, { alt: authorName, src: authorPicture })),
                    react_1.default.createElement(ListItemText_1.default, { primary: react_1.default.createElement("span", { style: {
                                color: titleColor || theme.palette.primary.contrastText,
                            } }, authorName), secondary: react_1.default.createElement(Box_1.default, { component: "span", display: "block", color: backgroundIsDark ? "rgba(255, 255, 255, 0.8)" : undefined },
                            authorDescription,
                            date !== undefined && (react_1.default.createElement(Box_1.default, { component: "span", display: "block", marginTop: 1 },
                                react_1.default.createElement(Typography_1.default, { variant: "body2", component: "time", dateTime: date.toISOString(), style: {
                                        fontWeight: 600,
                                    } }, dateText || date.toLocaleString())))) })))),
            haveSocialIconsProps && (react_1.default.createElement(Box_1.default, { display: "flex", justifyContent: isDesktop ? undefined : "center", alignItems: isDesktop ? "center" : undefined, marginTop: isDesktop ? undefined : 3 },
                react_1.default.createElement(social_icons_1.SocialIcons, Object.assign({}, socialIconsProps)))))));
}
exports.PostInfo = PostInfo;
//# sourceMappingURL=post-info.js.map