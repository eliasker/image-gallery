/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const isString = (str: any): str is string => {
  return typeof str === "string" || str instanceof String;
}
