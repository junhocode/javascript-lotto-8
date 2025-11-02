import OutputView from "../view/OutputView.js";

const retryOnException = async (callable) => {
  while (true) {
    try {
      return await callable();
    } catch (error) {
      OutputView.printError(error);
    }
  }
};

export default retryOnException;