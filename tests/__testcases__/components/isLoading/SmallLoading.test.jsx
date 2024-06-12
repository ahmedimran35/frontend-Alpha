/**
 * Test Suite for Small Loading
 */

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import SmallLoading from "../../../../src/components/isLoading/SmallLoading";

describe('Test Loading', () => {
    test("should render properly", () => {
        render(<SmallLoading />)
        // screen.debug()
        const element = screen.getByRole("loading");
        // assertions
        expect(element).toBeInTheDocument();
    })
})