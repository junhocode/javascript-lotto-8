import { CONSTANTS } from "../constants/constants.js";

class ValidationError extends Error {
  constructor(message) {
    super(`${CONSTANTS.ERROR_PREFIX} ${message}`);
    this.name = "ValidationError";
  }
}

export default ValidationError;