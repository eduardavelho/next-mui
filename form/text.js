"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_input_mask_1 = (0, tslib_1.__importDefault)(require("react-input-mask"));
const TextField_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/TextField"));
function Text({ label, placeholder, disabled, error, mask, value, type, rows, helperText, onChange, onFocus, onBlur, }) {
    if (mask) {
        return (react_1.default.createElement(react_input_mask_1.default, { placeholder: placeholder, type: type, mask: mask, value: value, disabled: disabled, onFocus: onFocus, onBlur: onBlur, onChange: onChange && ((event) => onChange(event.target.value)) }, () => (react_1.default.createElement(TextField_1.default, { label: label, multiline: rows !== undefined, rows: rows, variant: "outlined", fullWidth: true, disabled: disabled, error: error, helperText: helperText }))));
    }
    else {
        return (react_1.default.createElement(TextField_1.default, { type: type, multiline: rows !== undefined, rows: rows, label: label, placeholder: placeholder, variant: "outlined", fullWidth: true, disabled: disabled, error: error, helperText: helperText, value: value, onFocus: onFocus, onBlur: onBlur, onChange: onChange && ((event) => onChange(event.target.value)) }));
    }
}
exports.Text = Text;
//# sourceMappingURL=text.js.map