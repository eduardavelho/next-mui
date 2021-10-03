"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isColorDark = void 0;
const core_1 = require("@material-ui/core");
function isColorDark(color, contrastThreshold = 3) {
    return (0, core_1.getContrastRatio)(color, "#fff") >= contrastThreshold ? true : false;
}
exports.isColorDark = isColorDark;
//# sourceMappingURL=is-color-dark.js.map