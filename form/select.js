"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const MenuItem_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/MenuItem"));
const TextField_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/TextField"));
function Select({ label, placeholder, selected, disabled, error, helperText, options, onChange, }) {
    return (react_1.default.createElement(TextField_1.default, { placeholder: placeholder, error: error, helperText: helperText, label: label, select: true, fullWidth: true, variant: "outlined", disabled: disabled, value: selected ? selected : undefined, onChange: onChange && ((event) => onChange(event.target.value)) }, options.map((option) => (react_1.default.createElement(MenuItem_1.default, { value: option.value }, option.label)))));
}
exports.Select = Select;
//# sourceMappingURL=select.js.map