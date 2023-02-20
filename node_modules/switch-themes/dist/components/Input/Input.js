import React from 'react';
var Input = function (_a) {
    var className = _a.className, placeHolder = _a.placeHolder, type = _a.type, value = _a.value, onChange = _a.onChange;
    return React.createElement("input", { className: className ? "vds-input ".concat(className) : 'vds-input', placeholder: placeHolder, type: type, value: value, onChange: onChange });
};
export default Input;
