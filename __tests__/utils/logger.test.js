import logger from "../../src/utils/logger.js";

/**
 * spyes to track calls from object[methods]
 */
const spyLog = jest.spyOn(console, "log").mockImplementation();
const spyError = jest.spyOn(console, "error").mockImplementation();

describe("Logger", () => {
  /**
   * clear mocks before each test case
   */
  beforeEach(() => {
    jest.clearAllMocks();
  });

  /**
   * restore all mocks and replaced properties after each test case
   */
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("logging: log", () => {
    logger.log("teste");

    expect(spyLog).toHaveBeenCalledTimes(1);
  });

  it("logging: success", () => {
    logger.success("teste");

    expect(spyLog).toHaveBeenCalledTimes(1);
  });

  it("logging: error", () => {
    logger.error("teste");

    expect(spyError).toHaveBeenCalledTimes(1);
  });
});
