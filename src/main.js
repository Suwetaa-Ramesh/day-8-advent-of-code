const fs = require("fs").promises;
const path = require("path");
const { parseInput } = require("./instructions");
const { countVisibleTrees } = require("./treeVisibility");

(async () => {
  try {
    const inputFilePath = path.join(__dirname, "input.txt");
    const input = await fs.readFile(inputFilePath, "utf-8");
    const grid = parseInput(input);
    const visibleTrees = countVisibleTrees(grid);
    console.log("Number of Visible Trees:", visibleTrees);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
