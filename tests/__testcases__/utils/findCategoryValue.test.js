import { describe, expect, test } from "vitest";
import findCategoryValue from "../../../src/utils/Functions/Common/findCategoryValue";

describe("Checking Find Category Value Works", () => {
  // test - 1
  test("sending url with icon category in param will return 'icon'", () => {
    expect(findCategoryValue("/category-data?category=icon&searchTerm=")).equal(
      "icon"
    );
  });
  // test - 2
  test("sending url with All category in param will return 'All'", () => {
    expect(findCategoryValue("/category-data?category=All&searchTerm=")).equal(
      "All"
    );
  });
  // test - 3
  test("sending url without category in param will return ''", () => {
    expect(findCategoryValue("/category-data")).equal("");
  });
});
