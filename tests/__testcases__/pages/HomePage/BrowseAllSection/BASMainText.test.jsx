import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest'
import BASMainText from '../../../../../src/pages/HomePage/BrowseAllSection/BASComponents/BASMainText'

describe('BASMainText', () => {
    test("should render properly", () => {
        render(<BASMainText/>)
        // screen.debug();

        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();
    })
})