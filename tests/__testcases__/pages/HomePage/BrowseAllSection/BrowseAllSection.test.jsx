/**
 * A Tescase to check browse all category component
 */
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import BrowseAllSection from "../../../../../src/pages/HomePage/BrowseAllSection/BrowseAllSection";

describe("BrowseAllSection", () => {
  test("should render properly with two headings", () => {
    render(
      <BrowserRouter>
        <BrowseAllSection />
      </BrowserRouter>
    );
    // screen.debug();
    // get all the heading
    const headings = screen.getAllByRole("heading");
    // check if therir are two headings
    expect(headings).toHaveLength(2);
  });
  test("should have a image", () => {
    render(
      <BrowserRouter>
        <BrowseAllSection />
      </BrowserRouter>
    );
    // screen.debug()
    // capture the image
    const image = screen.getByRole("img");
    // check if the image exits
    expect(image).toBeInTheDocument();
    // check if the image has correct alternative text
    expect(image).toHaveAttribute("alt", "Browser All Category");
  });
});
