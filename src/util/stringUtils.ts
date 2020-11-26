import { isString } from "./typeChecks"

export const capitalize = (str: string | undefined): string => {
  return isString(str) ? str.slice(0, 1).toLocaleUpperCase() + str.slice(1) : "";
}
