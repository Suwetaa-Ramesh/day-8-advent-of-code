const assert = require("assert");

const {
  isTreeVisible,
  countVisibleTrees,
} = require("../src/treeVisibility.js");

describe("isTreeVisible", () => {
  it("should return true for a visible tree", () => {
    const grid = [
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
      [3, 3, 5, 4, 9],
      [3, 5, 3, 9, 0],
    ];
    assert.strictEqual(isTreeVisible(grid, 0, 0), true);
  });
});

describe("countVisibleTrees", () => {
  it("should count visible trees correctly", () => {
    const grid = [
      [3, 0, 3, 7, 3],
      [2, 5, 5, 1, 2],
      [6, 5, 3, 3, 2],
      [3, 3, 5, 4, 9],
      [3, 5, 3, 9, 0],
    ];
    assert.strictEqual(countVisibleTrees(grid), 10);
  });
});
