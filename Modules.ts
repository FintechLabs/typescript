export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

class ZipCodeValidator1 {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
export { ZipCodeValidator1 };
export { ZipCodeValidator1 as mainValidator };

export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && parseInt(s).toString() === s;
  }
}
// Export original validator but rename it
export {
  ZipCodeValidator as RegExpBasedZipCodeValidator
} from "./ZipCodeValidator";

export * from "./StringValidator"; // exports interface 'StringValidator'
export * from "./LettersOnlyValidator"; // exports class 'LettersOnlyValidator'
export * from "./ZipCodeValidator"; // exports class 'ZipCodeValidator'

//Import
import { ZipCodeValidator } from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();

import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator1 = new ZCV();

import * as validator from "./ZipCodeValidator";
let myValidator2 = new validator.ZipCodeValidator();
