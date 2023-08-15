function parseInput(input) {
  return input
    .trim()
    .split("\n")
    .map((line) => line.split("").map(Number));
}

module.exports = {
  parseInput,
};
