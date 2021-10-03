"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRender = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
function ClientRender({ children }) {
    const [isMounted, setIsMounted] = react_1.default.useState(false);
    react_1.default.useEffect(() => {
        setIsMounted(true);
    }, []);
    return react_1.default.createElement(react_1.default.Fragment, null, isMounted ? children : null);
}
exports.ClientRender = ClientRender;
//# sourceMappingURL=client-render.js.map