import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import H2Title from '../../../../src/components/Titles/H2Title';

describe("H2Title", () => {
    test("Should Render Correctly", () => {
        render(<H2Title baseText={"Hello"} coloredText={"World"}/>);

        // screen.debug();
        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();
    }),
    test("Should render the text correctly", () => {
        render(<H2Title baseText={"Hello"} coloredText={"World"}/>);
        
        expect(screen.getByText("Hello")).toBeDefined();
        expect(screen.getByText("World")).toBeDefined();
        
    })
})