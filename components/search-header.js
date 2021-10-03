"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHeader = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const styles_1 = require("@material-ui/core/styles");
const useMediaQuery_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/useMediaQuery"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Typography"));
const Chip_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Chip"));
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const TextField_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/TextField"));
const styles_2 = require("@material-ui/core/styles");
const CircularProgress_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/CircularProgress"));
const Autocomplete_1 = (0, tslib_1.__importDefault)(require("@material-ui/lab/Autocomplete"));
const Search_1 = (0, tslib_1.__importDefault)(require("@material-ui/icons/Search"));
const is_color_1 = require("../utils/is-color");
const is_color_dark_1 = require("../utils/is-color-dark");
function SearchHeader({ title, titleColor, background, options, value, placeholder, noOptionsText, disabled, loading, onChange = () => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () { }), }) {
    const theme = (0, styles_2.useTheme)();
    const backgroundFallback = theme.palette.primary.main;
    const backgroundIsDark = background
        ? (0, is_color_1.isColor)(background) && (0, is_color_dark_1.isColorDark)(background)
        : (0, is_color_dark_1.isColorDark)(backgroundFallback);
    const isDesktop = (0, useMediaQuery_1.default)(theme.breakpoints.up("sm"));
    const searchClasses = searchStyles({ backgroundIsDark });
    return (react_1.default.createElement(Box_1.default, { style: {
            background: background || backgroundFallback,
        }, height: isDesktop ? "394px" : "256px", display: "flex", alignItems: "center", justifyContent: "flex-end", flexDirection: "column" },
        react_1.default.createElement(Box_1.default, { maxWidth: "960px", minWidth: isDesktop ? "480px" : "100%" },
            title && (react_1.default.createElement(Box_1.default, { marginBottom: 1.6, marginX: isDesktop ? undefined : 1.6 },
                react_1.default.createElement(Typography_1.default, { variant: isDesktop ? "h3" : "h5", component: "h1", style: {
                        textAlign: "center",
                        fontWeight: "bold",
                        color: titleColor || theme.palette.primary.contrastText,
                    } }, title))),
            react_1.default.createElement(Box_1.default, { marginX: isDesktop ? undefined : 1.6, marginBottom: isDesktop ? 6.4 : 1.6 },
                react_1.default.createElement(Autocomplete_1.default, { multiple: true, disableCloseOnSelect: true, blurOnSelect: true, fullWidth: true, openText: "", clearText: "", closeText: "", loadingText: "", classes: searchClasses, options: options, value: value, getOptionLabel: (option) => option, loading: loading, disabled: loading || disabled, noOptionsText: noOptionsText, popupIcon: loading ? (react_1.default.createElement(CircularProgress_1.default, { color: "inherit", size: "1em" })) : (react_1.default.createElement(Search_1.default, { color: "inherit" })), onChange: (_, value) => {
                        if (value === null) {
                            onChange([]);
                        }
                        else if (Array.isArray(value)) {
                            onChange(value);
                        }
                        else {
                            onChange([value]);
                        }
                    }, renderTags: (value, getTagProps) => value.map((option, index) => (react_1.default.createElement(Chip_1.default, Object.assign({ label: option }, getTagProps({ index }))))), renderInput: (params) => (react_1.default.createElement(TextField_1.default, Object.assign({}, params, { variant: "outlined", placeholder: placeholder }))) })))));
}
exports.SearchHeader = SearchHeader;
const searchStyles = (0, styles_1.makeStyles)((theme) => ({
    inputRoot: {
        color: ({ backgroundIsDark }) => backgroundIsDark ? theme.palette.common.white : "inherit",
        backgroundColor: ({ backgroundIsDark }) => backgroundIsDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        "& .MuiInputBase-input::placeholder": {
            color: ({ backgroundIsDark }) => backgroundIsDark ? theme.palette.common.white : "inherit",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        "& .MuiIconButton-label": {
            color: ({ backgroundIsDark }) => backgroundIsDark ? "rgba(255, 255, 255, 0.42)" : "inherit",
        },
    },
}));
//# sourceMappingURL=search-header.js.map