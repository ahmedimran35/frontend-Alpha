import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import DonateText from "../../../../../../src/pages/HomePage/BannerSection/bannerComponents/DonateText";

describe("Donate Text", () => {
  test("should render properly", () => {
    render(
      <BrowserRouter>
        <DonateText />
      </BrowserRouter>
    );
    // screen.debug();

    expect(screen.getByText("To use free forever")).toBeDefined();
  }),
  test("should have link with proper attribute", () => {
    render(
        <BrowserRouter>
          <DonateText />
        </BrowserRouter>
      );

      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/donate");
  })
});
