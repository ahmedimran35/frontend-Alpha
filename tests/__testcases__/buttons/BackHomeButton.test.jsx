import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BackHomeButton from "../../../src/components/buttons/BackHomeButton/BackHomeButton";
import { MemoryRouter } from "react-router-dom";

describe("BackHomeButton Test", () => {
  test("should have the Text Inside", () => {
    render(<BackHomeButton />);
    expect(screen.getByText("Back Home")).toBeDefined();
  }),
    test("should find Button Element In the document", () => {
      render(<BackHomeButton />);
      const element = screen.getByRole("button");
      // assertions
      expect(element).toBeInTheDocument();
    }),
    test("should navigate to currect location", async() => {
      render(
        <MemoryRouter initialEntries={["/*"]}>
          <BackHomeButton />
        </MemoryRouter>
      );
      // screen.debug();
      const btn = screen.getByRole("button", {
        name: /back home/i,
      });
      // simulate click event
      await fireEvent.click(btn);
      // assertion
      expect(window.location.pathname).toBe('/');
    });
});
