"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = void 0;
const tslib_1 = require("tslib");
const createTheme_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/styles/createTheme"));
const createTheme = (colors) => (0, createTheme_1.default)({
    palette: {
        primary: {
            main: colors.primaryColor,
        },
        secondary: {
            main: colors.secondaryColor,
        },
        background: {
            default: colors.backgroundColor,
        },
    },
});
exports.createTheme = createTheme;
//# sourceMappingURL=create-theme.js.map