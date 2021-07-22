var solveNQueens = function(n) {
    let final = [];


    let result = [];
    for(let i=0; i<n; i++) {
        result.push(
            [  [i, 0] ]
        )
    }

    // 逐层累加格子
    for(let i=0; i<n; i++) {
        let newResult = [];

        for(let j=0; j<result.length; j++) {
            const currLevelOptions = genOptions(result[j], n, i);
            if(currLevelOptions.length !== 0) {
                newResult.push(
                    currLevelOptions.map(opt => [...result[j], [opt, j]])
                )
            }
        }

        result = newResult;

        console.log(result)
    }

    // if(result.length > 0) {
    //     let targets = result[0].map(el => el.join(","));
        
    //     for(let i=0; i<n; i++) {
    //         let str = "";
    //         for(let i=0; i<n; i++) {
    //             str += targets.includes(`${i},${j}`) ? "Q" : "."
    //         }
    //         final.push(str);
    //     }
    // }

    // return final;
};


var genOptions = function(accupied, n, i) {
    console.log({accupied});
    let options = (new Array(n)).map((el,i) => i);

    for(let i=0; i< accupied.length; i++) {
        
    }
    return [];
}

console.log(solveNQueens(4))