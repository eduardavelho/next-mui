"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionList = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const Accordion_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Accordion"));
const AccordionSummary_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/AccordionSummary"));
const AccordionDetails_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/AccordionDetails"));
const Box_1 = (0, tslib_1.__importDefault)(require("@material-ui/core/Box"));
const ExpandMore_1 = (0, tslib_1.__importDefault)(require("@material-ui/icons/ExpandMore"));
const styles_1 = require("@material-ui/core/styles");
function AccordionList({ items, expandIconAriaLabel, }) {
    const theme = (0, styles_1.useTheme)();
    return (react_1.default.createElement(Box_1.default, null, items.map(({ header, content, key }) => (react_1.default.createElement(Accordion_1.default, { key: key },
        react_1.default.createElement(AccordionSummary_1.default, { style: {
                paddingLeft: theme.spacing(1.5),
                paddingRight: theme.spacing(1.5),
            }, expandIcon: react_1.default.createElement(Box_1.default, { paddingRight: { sm: 0, md: 1 } },
                react_1.default.createElement(ExpandMore_1.default, null)), "aria-controls": expandIconAriaLabel }, header),
        react_1.default.createElement(AccordionDetails_1.default, { style: {
                paddingLeft: theme.spacing(1.5),
                paddingRight: theme.spacing(1.5),
            } },
            react_1.default.createElement(Box_1.default, { paddingRight: { sm: 0, md: 8 }, paddingBottom: { sm: 0, md: 2 } },
                react_1.default.createElement(Box_1.default, { paddingRight: { sm: 0, md: 8 }, paddingBottom: { sm: 0, md: 2 } }, content))))))));
}
exports.AccordionList = AccordionList;
//# sourceMappingURL=accordion-list.js.map