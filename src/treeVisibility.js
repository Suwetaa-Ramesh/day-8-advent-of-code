function isTreeVisible(grid, row, col) {
  const height = grid[row][col];

  for (let c = col - 1; c >= 0; c--) {
    if (grid[row][c] >= height) {
      return false;
    }
  }

  for (let c = col + 1; c < grid[row].length; c++) {
    if (grid[row][c] >= height) {
      return false;
    }
  }

  for (let r = row - 1; r >= 0; r--) {
    if (grid[r][col] >= height) {
      return false;
    }
  }

  for (let r = row + 1; r < grid.length; r++) {
    if (grid[r][col] >= height) {
      return false;
    }
  }

  return true;
}

function countVisibleTrees(grid) {
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (isTreeVisible(grid, r, c)) {
        count++;
      }
    }
  }
  return count;
}

module.exports = { isTreeVisible, countVisibleTrees };
