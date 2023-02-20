import { ValidatorConstants } from "../types/validationTypes";
var validateRequired = function (value) {
    if (typeof value == "undefined" || value === null)
        return false;
    if (typeof value == "string" && value.length === 0)
        return false;
    if (typeof value == "number" && isNaN(value))
        return false;
    return true;
};
var validateLengthMax = function (max, value) {
    if (typeof max === "undefined")
        return true;
    if (typeof value === "number" && value.toString().length > max ||
        typeof value === "string" && value.length > max) {
        return false;
    }
    return true;
};
var validateLengthMin = function (min, value) {
    if (typeof min === "undefined")
        return true;
    if (typeof value === "number" && value.toString().length < min ||
        typeof value === "string" && value.length < min) {
        return false;
    }
    return true;
};
var validateOne = function (valdation, value) {
    switch (valdation.type) {
        case ValidatorConstants.REQUIRED:
            return validateRequired(value);
        case ValidatorConstants.LENGTH_MIN:
            return validateLengthMin(valdation.minLength, value);
        case ValidatorConstants.LENGTH_MAX:
            return validateLengthMax(valdation.maxLength, value);
    }
    return true;
};
export default validateOne;
