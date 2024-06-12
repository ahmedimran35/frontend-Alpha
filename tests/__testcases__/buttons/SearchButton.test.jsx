import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import SearchButton from "../../../src/components/buttons/SearchButton/SearchButton";

describe("Search Button on Home Page", () => {
  test("renders properly", () => {
    render(<SearchButton />);
  });
});
