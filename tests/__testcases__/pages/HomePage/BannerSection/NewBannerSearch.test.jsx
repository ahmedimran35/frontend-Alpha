import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test } from "vitest";
import NewBannerSearch from "../../../../../src/pages/HomePage/BannerSection/bannerComponents/NewBannerSearch";
import { BrowserRouter } from "react-router-dom";
import CategoryProvider from "../../../../../src/Providers/CategoryProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

describe("Test for new banner search", () => {
  beforeAll(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <CategoryProvider>
          <BrowserRouter>
            <NewBannerSearch />
          </BrowserRouter>
        </CategoryProvider>
      </QueryClientProvider>
    );
    // screen.debug();
  })
  test("should render properly", () => {    
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument()
  });
  
});
