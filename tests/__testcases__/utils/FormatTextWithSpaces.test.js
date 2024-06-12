/**
 * A test suite for formate Text With Spaces function
 */
import { describe, expect, test } from "vitest";
import formatTextWithSpaces from "../../../src/utils/Functions/Common/formatTextWithSpaces";

describe('Testing format with spaces function', () => {
    // first test
    test("passing empty string returns empty string", () => {
        expect(formatTextWithSpaces("")).toEqual("");
    })
    // second test
    test("passing desgin templates returns design-templates", () => {
        expect(formatTextWithSpaces("design templates")).toEqual("design-templates")
    })
    // third test
    test("passing stock photos returns stock-photos", () => {
        expect(formatTextWithSpaces("stock photos")).toEqual("stock-photos")
    })
})