"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const FormControlLabel_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormControlLabel"));
const RadioGroup_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/RadioGroup"));
const Radio_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Radio"));
const FormHelperText_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/FormHelperText"));
function Radio({ row, checked, disabled, options, onChange, error, helperText, ariaLabelledBy, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(RadioGroup_1.default, { row: row, "aria-labelledby": ariaLabelledBy, value: checked, onChange: onChange && ((event) => onChange(event.target.value)) }, options.map((option) => (react_1.default.createElement(FormControlLabel_1.default, { value: option.value, disabled: option.disabled || disabled, label: option.label, control: react_1.default.createElement(Radio_1.default, null) })))),
        helperText && (react_1.default.createElement(FormHelperText_1.default, { error: error }, helperText))));
}
exports.Radio = Radio;
//# sourceMappingURL=radio.js.map