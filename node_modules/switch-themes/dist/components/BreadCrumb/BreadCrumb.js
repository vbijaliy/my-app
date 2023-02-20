import React from 'react';
var BreadCrumb = function (_a) {
    var className = _a.className, arr = _a.arr;
    return (React.createElement("ul", { className: className ? "vds-breadcrumb ".concat(className) : 'vds-breadcrumb' }, arr.length > 0 ? (arr.map(function (ele) { return (React.createElement(React.Fragment, { key: ele.display },
        React.createElement("li", null, ele.display))); })) : 'Please specify the breadcrumbs array'));
};
export default BreadCrumb;
