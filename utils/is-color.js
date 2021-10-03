"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isColor = void 0;
function isColor(color) {
    return (isHex(color) ||
        isRgb(color) ||
        isRgba(color) ||
        isHsl(color) ||
        isHsla(color));
}
exports.isColor = isColor;
const isHex = (color) => !!color.match(/^#([0-9a-f]{3}){1,2}$/i);
const isRgb = (color) => !!color.match(/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);
const isRgba = (color) => !!color.match(/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);
const isHsl = (color) => !!color.match(/hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);
const isHsla = (color) => !!color.match(/hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);
//# sourceMappingURL=is-color.js.map