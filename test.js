// 面试官 2025/3/7 17:19:26
// 计算几行几列？
const data = [
    { id: 0, x: 0, y: 0, height: 40, width: 100 },
    { id: 1, x: 120, y: 0, height: 40, width: 100 },
    { id: 2, x: 0, y: 60, height: 40, width: 220 },
    { id: 3, x: 0, y: 120, height: 40, width: 60 },
    { id: 4, x: 80, y: 120, height: 40, width: 60 },
    { id: 5, x: 160, y: 120, height: 40, width: 60 },
    { id: 6, x: 0, y: 180, height: 40, width: 220 },
    { id: 7, x: 240, y: 0, height: 100, width: 80 },
    { id: 8, x: 240, y: 120, height: 70, width: 80 },
    { id: 9, x: 240, y: 200, height: 20, width: 80 },
]
type Child = Omit<Parent, freind>
type propType = {

}
function fn: returnType(props: propType){

}
const callback = () => {

}
const getFirstElement: <T>(arr: T[]) => T= (arr) => arr[0];

Vendor.js

function calcGap(data) {
    let row = 1, col = 1;
    // let dpRow = [], dpCol = []
    // dpRow[0] = 0, dpCol[0] = 0
    //状态转移？
    for (let i = 0; i < data.length; i++) {
        hasGap()
    }

    const hasGap = (node1, node2) => {
        const { x1, y1, h1, w1 } = node1
        const { x2, y2, h2, w2 } = node2
        if (x1 + w1 < x2) {
            row = row + 1
        } else {
            //TODO?如果node2的范围落在Node1里
            row = row - 1
        }
        if (y1 + h1 < y2) {
            col = col + 1
        } else {
            if (y2 + h2 < y1 + h1) {
                row = row - 1
            }
        }
    }
    return { row, col }
}