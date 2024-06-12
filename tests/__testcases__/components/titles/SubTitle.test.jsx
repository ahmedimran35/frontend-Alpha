/**
 * A test suide for sub title component 
 */

import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import SubTitle from "../../../../src/components/Titles/SubTitle"

describe('Test Sub Title', () => {
    test("renders properly", () => {
        render(<SubTitle baseText={"Hello"} coloredText={"World"} />);
        // console log rendered component
        screen.debug();

        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();
    })
})