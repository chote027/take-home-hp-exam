import { findLongestCommonPrefix } from "./exam_3.js"

describe('Test findLongestCommonPrefix', () => {
    test('with no common prefix', async () => {
        expect(findLongestCommonPrefix([])).toBe("");
        expect(findLongestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });

    test('with 1 common prefix', async () => {
        expect(findLongestCommonPrefix(["car", "cat", "cow"])).toBe("c");
    });

    test('with 2 or more common prefix', async () => {
        expect(findLongestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
        expect(findLongestCommonPrefix(["monday", "money", "monster", "mono", "monotone"])).toBe("mon");
    });
});