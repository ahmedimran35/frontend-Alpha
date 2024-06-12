import { render, screen } from '@testing-library/react'
import ErrorDescription from '../../../../../src/pages/ErrorPage/components/ErrorDescription'
import { describe, expect, test } from 'vitest';

describe('Error Description', () => {
    test("Should Render correctly", () => {
        render(<ErrorDescription />);
        // screen.debug();

        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();        
    }),
    test("Should Render Text Correctly", () => {
        render(<ErrorDescription />);
        expect(screen.getByText("404")).toBeDefined();
    })
})