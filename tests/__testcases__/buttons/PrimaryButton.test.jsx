import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import PrimaryButton from "../../../src/components/buttons/PrimaryButton/PrimaryButton";
import { BrowserRouter } from "react-router-dom";

describe("Primary Button", () => {
  test("Should Render Correctly and have a button", () => {
    render(
      <BrowserRouter>
        <PrimaryButton text={"Create"} />
      </BrowserRouter>
    );
    // screen.debug();

    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();

  }),
    test("Should render text Correctly", () => {
      render(
        <BrowserRouter>
          <PrimaryButton text={"Create"} />
        </BrowserRouter>
      );
      const element = screen.getByText("Create");
      expect(element).toBeInTheDocument();
    });
});
