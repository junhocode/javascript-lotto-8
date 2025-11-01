export const retryOnException = async (
  asyncInputFunction,
  validationFunction
) => {
  while (true) {
    try {
      const inputValue = await asyncInputFunction();
      validationFunction(inputValue);
      return inputValue;
    } catch (error) {
      throw new Error(error);
    }
  }
};
