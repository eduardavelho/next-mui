"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const FormControlLabel_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormControlLabel"));
const Checkbox_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Checkbox"));
function Checkbox({ checked, disabled, label, onChange, }) {
    return (react_1.default.createElement(FormControlLabel_1.default, { disabled: disabled, checked: checked, label: label, control: react_1.default.createElement(Checkbox_1.default, { onChange: onChange && ((event) => onChange(event.target.checked)) }) }));
}
exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map