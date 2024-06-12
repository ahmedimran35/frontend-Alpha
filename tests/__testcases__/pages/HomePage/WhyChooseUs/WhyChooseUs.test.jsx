import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import WhyChooseUs from '../../../../../src/pages/HomePage/WhyChooseUs/WhyChooseUs';

describe("Why Choose Us", () => {
    test("should render properly", () => {
        render(<WhyChooseUs />);
        // screen.debug();

        const titles = screen.getAllByRole("heading");
        expect(titles).toHaveLength(6);
        const headingWithBenefit = screen.getByText(/Benefits/gi);
        expect(headingWithBenefit).toBeInTheDocument();
    })
})