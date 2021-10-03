"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentList = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const Chip_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Chip"));
const GetApp_1 = (0, tslib_1.__importDefault)(require("@material-ui/icons/GetApp"));
function AttachmentList({ items, itemColor = "secondary", }) {
    return (react_1.default.createElement(Box_1.default, { flexWrap: "wrap", display: "flex", marginTop: 2 }, items.map(({ title, href, key }) => (react_1.default.createElement(Box_1.default, { key: key, marginRight: 0.5, marginBottom: 0.5 },
        react_1.default.createElement(Chip_1.default, { color: itemColor, component: "a", download: title, href: href, label: title, icon: react_1.default.createElement(GetApp_1.default, null), style: {
                cursor: "pointer",
            } }))))));
}
exports.AttachmentList = AttachmentList;
//# sourceMappingURL=attachment-list.js.map