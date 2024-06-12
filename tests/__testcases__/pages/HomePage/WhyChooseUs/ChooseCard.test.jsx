/**
 * Test suite for Choose Card Component
 */

import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import ChooseCard from "../../../../../src/pages/HomePage/WhyChooseUs/WCUComponets/ChooseCard";
import { BsFillBoxSeamFill } from "react-icons/bs";

describe('Choose Card', () => {
    test("should render properly", () => {
        render(<ChooseCard Icon={BsFillBoxSeamFill} title={"Hello"} description={"World"}/>)
        // screen.debug();
    })
})