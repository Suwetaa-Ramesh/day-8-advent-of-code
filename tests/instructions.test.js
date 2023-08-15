const assert = require("assert");

const { parseInput } = require("../src/instructions.js");

describe("parseInput", () => {
  it("should parse input and return a 2D array", () => {
    const input = "30373\n25512\n65332\n33549\n35390";
    const expectedOutput = [
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
      [3, 3, 5, 4, 9],
      [3, 5, 3, 9, 0],
    ];
    assert.deepStrictEqual(parseInput(input), expectedOutput);
  });
});
