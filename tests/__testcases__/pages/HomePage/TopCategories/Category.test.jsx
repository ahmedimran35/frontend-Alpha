import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import categories from "../../../../../src/pages/HomePage/TopCategories/CategoryConstans";
import Category from "../../../../../src/pages/HomePage/TopCategories/Category";
import { expect } from "chai";

describe("Category of Top Categories", () => {
  test("should render correctly and have img, h2 element", () => {    
    render(<Category category={categories[0]} />)
    // screen.debug();

    const img = screen.getByRole("img");
    const h2 = screen.getByRole("heading")

    expect(img).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
  }),
  test("should have correct data", () => {
    render(<Category category={categories[0]} />)
    
    expect(screen.getByText(categories[0].text)).toBeDefined();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", categories[0]?.text);
    expect(img).toHaveAttribute("src", categories[0]?.style?.backgroundImage);
    // category?.style?.backgroundImage

  })
});
