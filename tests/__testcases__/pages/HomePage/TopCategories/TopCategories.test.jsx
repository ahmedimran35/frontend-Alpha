import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import TopCategories from "../../../../../src/pages/HomePage/TopCategories/TopCategories";
import { BrowserRouter } from "react-router-dom";
import categories from "../../../../../src/pages/HomePage/TopCategories/CategoryConstans";

describe("Top Categories", () => {
  test("should render component and all link should be generated as given categories", () => {
    render(
      <BrowserRouter>
        <TopCategories />
      </BrowserRouter>
    );
    // screen.debug();

    const links = screen.getAllByRole("link");

    // assertion on links
    expect(links).toHaveLength(4);
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", categories[index]?.link);
    });
  }),
    test("should render the titles and images correctly", () => {
      render(
        <BrowserRouter>
          <TopCategories />
        </BrowserRouter>
      );

      const headings = screen.getAllByRole("heading");

      expect(headings).toHaveLength(5);

      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(4);

      images.forEach((image, index) => {
        expect(image).toHaveAttribute(
          "src",
          categories[index]?.style?.backgroundImage
        );
        expect(image).toHaveAttribute("alt", categories[index]?.text);
      });
    });
});
