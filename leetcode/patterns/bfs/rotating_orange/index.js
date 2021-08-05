if (!grid.length) {
  return -1;
}
let zeroF = true;
let rotF = false;
for (let i = 0; i < grid.length; ++i) {
  for (let j = 0; j < grid[0].length; ++j) {
    if (grid[i][j] === 1) {
      zeroF = false;
    }

    if (grid[i][j] === 2) {
      rotF = true;
    }
  }
}

if (zeroF && rotF) {
  return 0;
}
if (!rotF) {
  return -1;
}
let m = 0;
let arr = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]; // [[row,cell]]
for (let i = 0; i < grid.length; ++i) {
  for (let j = 0; j < grid[0].length; ++j) {
    if (grid[i][j] === 2) {
      let queue = [];
      let cur = 1;
      let next = 0;
      queue.push({ row: i, cell: j });

      while (queue.length) {
        let node = queue.shift();
        for (let k = 0; k < arr.length; ++k) {
          let x = node.row + arr[k][0];
          let y = node.cell + arr[k][1];
          if (
            x < grid.length &&
            x >= 0 &&
            y < grid[0].length &&
            y >= 0 &&
            grid[x][y] === 1
          ) {
            grid[x][y] = 2;
            queue.push({ row: x, cell: y });
            ++next;
          }
          --cur;
          if (!cur) {
            ++m;
            cur = next;
            next = 0;
          }
        }
      }
    }
  }
}

for (let i = 0; i < grid.length; ++i) {
  for (let j = 0; j < grid[0].length; ++j) {
    if (grid[i][j] === 1) {
      return -1;
    }
  }
}

return m - 1;
