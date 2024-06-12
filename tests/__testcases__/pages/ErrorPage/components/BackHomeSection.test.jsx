import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BackHomeSection from "../../../../../src/pages/ErrorPage/components/BackHomeSection";
import { BrowserRouter } from "react-router-dom";

describe("Back Home Section", () => {
  test("Should render correctly", () => {
    render(
      <BrowserRouter>
        <BackHomeSection />
      </BrowserRouter>
    );
    // screen.debug();

    const element = screen.getByRole("section");
    expect(element).toBeInTheDocument();
  }),
  test("Should navigate to homepage on click", () => {
    render(
        <BrowserRouter>
          <BackHomeSection />
        </BrowserRouter>
      );
    const homeLink = screen.getByRole('link');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  })
});
