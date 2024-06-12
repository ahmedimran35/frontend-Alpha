/**
 * Test case for Back Arrow Component
 * Test 1: Check if component is rendered properly
 * Test 2: Check if it has a button in rendered component
 * Test 3: Check if created snapshot matches the current snapshot
 */

import { 
    render, 
    screen 
} from "@testing-library/react"
import { describe, expect, test } from "vitest"
import BackArrowComponent from "../../../../src/components/BackArrowComponent/BackArrowComponent"

describe('Testing BackArrowComponent', () => {
    test("it renders properly", () => {
        // render the component
        render(<BackArrowComponent />);
        // screen.debug();
    });
    test("it has proper button", () => {
        // render the component
        render(<BackArrowComponent />);
        // select the button
        const btn = screen.getByRole("button");
        // assert that button exits
        expect(btn).toBeInTheDocument();
    });
    test("check if snapshot matches", () => {
        const { asFragment } = render(<BackArrowComponent/>);
        expect(asFragment()).toMatchSnapshot();
    })
})