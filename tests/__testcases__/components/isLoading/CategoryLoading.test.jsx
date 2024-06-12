/**
 * A test suite for category loading
 */
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import CategoryLoading from '../../../../src/components/isLoading/CategoryLoading';

describe('Category Loading Componet', () => {
    test("should render all category loading correctly", () => {
        render(<CategoryLoading category={"All"} />);
        // screen.debug();
        const element = screen.getByRole("loading");
        // assertions
        expect(element).toBeInTheDocument();
    })
    test("should render icon category loading correctly", () => {
        render(<CategoryLoading category={"icon"} />);
        // screen.debug();
        const element = screen.getByRole("loading");
        // assertions
        expect(element).toBeInTheDocument();
    })
})