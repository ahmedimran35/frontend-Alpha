import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import NoDataFound from '../../../../src/components/NoDataFound/NoDataFound';

describe('No Data Found Component', () => {
    test("should render correctly", () => {
        render(<NoDataFound/>)

        // screen.debug();

        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();
    })
})