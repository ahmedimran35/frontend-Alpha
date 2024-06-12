/**
 * This test case tests the calculatePagination function
 */
import { describe, expect, test } from "vitest";
import { calculateNumberOfPages } from "../../../src/utils/Functions/Common/calculatePagination";

describe("test calculate pagination function returns correct value", () => {
  test("Passing two values of 10 and 10 returns a value of 1", () => {
    expect(calculateNumberOfPages(10, 10)).equal(1);
  });
  test("passing 10 and -100 return 0", () => {
    expect(calculateNumberOfPages(10, -100)).equal(0);
  });
  test("passing 333 and 30 return 12", () => {
    expect(calculateNumberOfPages(333, 30)).equal(12);
  });
  test("passing 20 and 30 return 1", () => {
    expect(calculateNumberOfPages(20, 30)).equal(1);
  });
  test("passing -33 and -66 return 0", () => {
    expect(calculateNumberOfPages(-33, -66)).equal(0);
  });
});
