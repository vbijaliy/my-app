import React from 'react';
var Button = function (_a) {
    var className = _a.className, label = _a.label, handleClick = _a.handleClick;
    return React.createElement("button", { className: className ? "vds-btn ".concat(className) : 'vds-btn', onClick: handleClick }, label);
};
export default Button;
