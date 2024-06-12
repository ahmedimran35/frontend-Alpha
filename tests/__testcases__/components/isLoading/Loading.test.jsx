import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Loading from '../../../../src/components/isLoading/Loading'

describe('Loading Componet', () => {
    test("Should Render Correctly", () => {
        render(<Loading isLoading={true} />);
        // screen.debug();
        const element = screen.getByRole("loading");
        // assertions
        expect(element).toBeInTheDocument();
    }),
    test("Should not render when isLoading is false", () => {
        render(<Loading isLoading={false} />);
        // screen.debug();
        const element = screen.queryByRole("loading");
        // assertions
        expect(element).not.toBeInTheDocument();
    })
})