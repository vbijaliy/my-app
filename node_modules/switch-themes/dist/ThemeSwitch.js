import React from "react";
var ThemeSwitch = function (_a) {
    var themeState = _a.themeState, children = _a.children;
    return React.createElement("div", { className: themeState ? themeState : 'light' }, children);
};
export default ThemeSwitch;
