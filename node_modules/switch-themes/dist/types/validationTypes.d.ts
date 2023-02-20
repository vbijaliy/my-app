export declare enum ValidatorConstants {
    REQUIRED = "REQUIRED",
    LENGTH = "LENGTH",
    LENGTH_MIN = "LENGTH_MIN",
    LENGTH_MAX = "LENGTH_MAX"
}
export type ValidatorDefinition = {
    type: ValidatorConstants;
    minLength?: number;
    maxLength?: number;
};
