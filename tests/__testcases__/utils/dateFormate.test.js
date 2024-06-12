/**
 * The testsuite for dateFormat function
 */

import { describe, expect, test } from "vitest";
import getReadableDate from "../../../src/utils/dateFormate";
// test the function with different International standard time created in mongodb
describe('Testing dateFormate Components getReadableDate function', () => {
    // test case 1 - proper case
    test("sending '2024-04-26T10:07:11.772Z' to function returns 'April 26, 2024'", () => {
        expect(getReadableDate('2024-04-26T10:07:11.772Z')).equal('April 26, 2024');
    });
    // test case 2 - proper case
    test("sending '2024-08-20T10:07:11.772Z' to function returns 'August 20, 2024'", () => {
        expect(getReadableDate('2024-08-20T10:07:11.772Z')).equal('August 20, 2024');
    });
    // test case 3 - proper case
    test("sending '2024-08-20' to function returns 'August 20, 2024'", () => {
        expect(getReadableDate('2024-08-20')).equal('August 20, 2024');
    });
    // test case 4 - edge case
    test("sending '24afjasof' to function returns 'Invalid Date'", () => {
        expect(getReadableDate('24afjasof')).equal('Invalid Date');
    });
    // test case 5 - proper case
    test("sending '1996-12-20' to function returns 'December 20, 1996'", () => {
        expect(getReadableDate('1996-12-20')).equal('December 20, 1996');
    })
})