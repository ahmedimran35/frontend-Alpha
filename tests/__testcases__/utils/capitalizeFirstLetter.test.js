/**
 * Test cases fo capitalizeFirstLetter
 */
import { describe, expect, test } from "vitest";
import capitalizeFirstLetter from "../../../src/utils/Functions/Common/capitalizeFirstLetter";

describe("Test Capilalize First Letter", () => {
  test("sending empty string return empty string", () => {
    expect(capitalizeFirstLetter("")).equal("");
  }),
    test("sending design-template becomes Design Templates", () => {
      expect(capitalizeFirstLetter("design-template")).equal(
        "Design Template"
      );
    }),
    test("sending icon becomes Icons", () => {
      expect(capitalizeFirstLetter("icon")).equal("Icon");
    });
  test("sending stock-photos will becomes Stock Photos", () => {
    expect(capitalizeFirstLetter("stock-photos")).equal("Stock Photos");
  });
  test("sending courses-and-learning becomes Courses And Learnings", () => {
    expect(capitalizeFirstLetter("courses-and-learning")).equal(
      "Courses And Learning"
    );
  });
  test("sending tools-and-softwares becoms Tools And Softwares", () => {
    expect(capitalizeFirstLetter("tools-and-softwares")).equal(
      "Tools And Softwares"
    );
  });
});
