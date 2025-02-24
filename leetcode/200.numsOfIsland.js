var numIslands = function (grid) {
    let m = grid.length, n = grid[0].length
    let ans = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                ans++
                dfs(grid, i, j)
            }
        }
    }
    function dfs(grid, i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != '1') {
            return
        }
        grid[i][j] = '2'
        dfs(grid, i, j + 1)
        dfs(grid, i, j - 1)
        dfs(grid, i + 1, j)
        dfs(grid, i - 1, j)
    }
    return ans
};