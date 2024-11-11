function getTotalIsles(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  function dfs(r, c) {
      // Check for out of bounds or if the cell is water
      if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 'L') {
          return;
      }
      // Mark the cell as visited by setting it to 'V'
      grid[r][c] = 'V';
      // Visit all four directions
      dfs(r + 1, c); // down
      dfs(r - 1, c); // up
      dfs(r, c + 1); // right
      dfs(r, c - 1); // left
  }

  // Traverse each cell in the grid
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L') {
              // Found an unvisited island
              islandCount++;
              dfs(r, c); // Mark the entire island as visited
          }
      }
  }

  return islandCount;
}

module.exports = getTotalIsles;



