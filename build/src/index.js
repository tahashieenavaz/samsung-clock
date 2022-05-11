"use strict";
const $ = (s) => document.querySelector(s);
setInterval(() => {
    var _a, _b;
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    (_a = $('.hourHand')) === null || _a === void 0 ? void 0 : _a.style.setProperty('--rotate', `${((hours % 12) + minutes / 60) * 30}deg`);
    (_b = $('.minuteHand')) === null || _b === void 0 ? void 0 : _b.style.setProperty('--rotate', `${(minutes + seconds / 60) * 6}deg`);
}, 1000);
//# sourceMappingURL=index.js.map