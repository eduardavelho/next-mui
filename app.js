"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const styles_1 = require("@material-ui/core/styles");
const CssBaseline_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/CssBaseline"));
function app({ theme, Layout, }) {
    return function App({ Component, pageProps }) {
        react_1.default.useEffect(() => {
            var _a;
            const jssStyles = document.querySelector("#jss-server-side");
            if (jssStyles) {
                (_a = jssStyles.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(jssStyles);
            }
        }, []);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(styles_1.ThemeProvider, { theme: theme },
                react_1.default.createElement(CssBaseline_1.default, null),
                react_1.default.createElement(Layout, null,
                    react_1.default.createElement(Component, Object.assign({}, pageProps))))));
    };
}
exports.app = app;
//# sourceMappingURL=app.js.map