import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import SubText from "../../../../../../src/pages/HomePage/BannerSection/bannerComponents/SubText";

describe('Sub Text', () => {
    test("should render properly and have a heading", () => {
        render(<SubText/>);
        // screen.debug();

        const text = screen.getByText("Create Better Videos 10X Faster & Easier");
        expect(text).toBeInTheDocument();
    })
})