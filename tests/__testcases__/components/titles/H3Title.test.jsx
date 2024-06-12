import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import H3Title from '../../../../src/components/Titles/H3Title';

describe('H3Title Component', () => {
    test("Should render Correctly", () => {
        render(<H3Title text="robiul" />);

        // screen.debug();
        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();
    }),
    test("Should render text correctly", () => {
        render(<H3Title text="robiul" />);
        expect(screen.getByText("robiul")).toBeDefined();
    })
})