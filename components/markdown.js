"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Markdown = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const markdown_styles_1 = require("../utils/markdown-styles");
function Markdown({ content }) {
    const markdownClasses = (0, markdown_styles_1.markdownStyles)();
    return (react_1.default.createElement("div", { className: markdownClasses.markdown, dangerouslySetInnerHTML: { __html: content } }));
}
exports.Markdown = Markdown;
//# sourceMappingURL=markdown.js.map