/**
 * LeetCode 200. 岛屿数量 (Number of Islands)
 * 
 * 题目描述：
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 
 * 解法：DFS深度优先搜索
 * 遍历网格，遇到陆地时进行DFS将整个岛屿标记为已访问，每次DFS代表发现一个新岛屿
 */
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
