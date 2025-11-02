import { CONSTANTS } from "../constants/constants";

class ValidationError extends Error {
  constructor(message) {
    super(`${CONSTANTS.ERROR_PREFIX} ${message}`);
    this.name = "ValidationError";
  }
}

export default ValidationError;