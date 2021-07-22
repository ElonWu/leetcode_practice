// var numIslands = function(grid) {
//     let row = grid.length, col = (grid[0] && grid[0].length) || 0, num = 0, accupied = [];

//     for(let i=0; i< row; i++) {
//         for(let j=0; j< col; j++) {
//             if(grid[i][j] === "1" && !accupied.includes(`${i}-${j}`)) {
//                 // 当前元素处于一个新的岛上
//                 num += 1;

//                 // 以此为起始边界
//                 let edges = [ [i,j] ];
    
//                 while(edges.length > 0) {
//                     let nextEdges = [];
                    
//                     // 探索并更新当前岛屿的覆盖范围
//                     for(let edge of edges) {
//                         // 边界周边有效区域
//                         const validSibs = [];
//                         if( edge[0] + 1 < row ) validSibs.push([edge[0] + 1, edge[1]]);
//                         if( edge[0] - 1 >= 0 ) validSibs.push([edge[0] - 1, edge[1]]);
//                         if( edge[1] + 1 < col ) validSibs.push([edge[0], edge[1] + 1]);
//                         if( edge[1] - 1 >= 0 ) validSibs.push([edge[0], edge[1] - 1]);

//                         // 该区域为未被占据的空地
//                         validSibs.map(curr => {
//                             let value = grid[curr[0]][curr[1]], index = `${curr[0]}-${curr[1]}`;
//                             if(value === "1" && !accupied.includes(index)) {
//                                 accupied.push(index);
//                                 nextEdges.push(curr);
//                             };
//                         });
//                     }

//                     // 更新最新边界
//                     edges = nextEdges;
//                 }
//             };
//         }
//     }

//     return num;
// };


var numIslands = function(grid) {
    let row = grid.length, col = (grid[0] && grid[0].length) || 0, graph = {};

    for(let i=0; i< row; i++) {
        for(let j=0; j< col; j++) {
            if(grid[i][j] === "1") {
                let bottom = grid[i+1] && grid[i+1][j];
                let right = grid[i] && grid[i][j+1];

                if(bottom === "1") {
                    graph[`${i}-${j}`] = [...(graph[`${i}-${j}`] || []), `${i+1}-${j}`];
                    graph[`${i+1}-${j}`] = [...(graph[`${i+1}-${j}`] || []), `${i}-${j}`];
                } 
                if(right === "1") {
                    graph[`${i}-${j}`] = [...(graph[`${i}-${j}`] || []), `${i}-${j+1}`];
                    graph[`${i}-${j+1}`] = [...(graph[`${i}-${j+1}`] || []), `${i}-${j}`];
                }
            }
        }
    }


    console.log(graph);

    for(let [key, value] of Object.entries(graph)) {
        let list = [...value, key];

        let currList = value.slice();

        console.log({currList})

        while(currList.length > 0) {
            let newList = [];

            for(let i=0; i < currList.length; i++) {
                if(!list.includes(currList[i])) {
                    list.push(currList[i]);
                    newList = newList.concat( graph[currList[i]] || []);

                    graph[currList[i]] = null;
                }
            }

            currList = newList;
        }
    }

    console.log(graph);
}


const source1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
];

const source2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];

const source3 = [
    ["1","1","1"],
    ["0","1","0"],
    ["1","1","1"]
];

const source4 = [
    ["1","0","1","1","1"],
    ["1","0","1","0","1"],
    ["1","1","1","0","1"]
];

console.log(
    numIslands(source3),
    // numIslands(source2),
    // numIslands(source3),
    // numIslands(source4),
)