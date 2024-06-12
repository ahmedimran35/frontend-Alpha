import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import SignInButton from "../../../src/components/buttons/SignInButton/SignInButton";

describe("Sign In Button", () => {
  test("should render properly", async () => {
    render(
      <BrowserRouter>
        <SignInButton />
      </BrowserRouter>
    );
    // mock auth
    // const mockUseAuth = vi.fn();

    // mockUseAuth.mockReturnValue({
    //   googleSignIn: vi.fn(),
    // });
    // await act(async () => {
    //   await render(
    //     <AuthProviders>
    //       <BrowserRouter>
    //         <SignInButton />
    //       </BrowserRouter>
    //     </AuthProviders>
    //   );
    // });
    // screen.debug();
    const button = screen.getByText(/Sign In/i);
    expect(button).toBeInTheDocument();
  });
});
