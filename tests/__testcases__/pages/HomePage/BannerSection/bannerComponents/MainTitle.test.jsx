import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import MainTitle from "../../../../../../src/pages/HomePage/BannerSection/bannerComponents/MainTitle";

describe('Main Title', () => {
    test("should render properly", () => {
        render(<MainTitle />);

        // screen.debug();

        const h1 = screen.getByRole("heading");
        expect(h1).toBeInTheDocument();
    })
})