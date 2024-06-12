import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest'
import BASPhoto from '../../../../../src/pages/HomePage/BrowseAllSection/BASComponents/BASPhoto';

describe('BASMainText', () => {
    test("should render properly", () => {
        render(<BASPhoto />)
        // screen.debug();

        const element = screen.getByRole("img");
        expect(element).toBeInTheDocument();
        expect(element).toHaveAttribute("alt", "Browser All Category");
    })
})