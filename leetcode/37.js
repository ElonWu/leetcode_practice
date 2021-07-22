// 解数独
const solveSudoku = function(board) {
    let blanks = [];

    // 初始化空格记录
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(board[i][j] !== ".") continue;
             
            // 记录空格
            blanks.push({
                i, j, // 记录空格坐标
                options: [1, 2, 3, 4, 5, 6, 7, 8, 9],  // 默认可填选项
                exclusive: [] // 互斥的空格记录下标
            });

            let latest = blanks.length - 1;

            // 与已记录空格的互斥关系
            for(let k = 0; k < latest; k++) {
                if( isExclusive(blanks[k].i, blanks[k].j, i, j) ) {
                    blanks[k].exclusive.push(latest);
                    blanks[latest].exclusive.push(k);
                }
            }
        }
    }

    // 根据已填写数字， 更新每个空格的可填选项
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(board[i][j] === ".") continue;
            
            blanks.forEach(blank => {
                if(isExclusive(i, j, blank.i, blank.j)) {
                    blank.options = blank.options.filter(opt => opt !== parseInt(board[i][j]));
                }
            });
        }
    }

    // 最终填完的空格记录
    blanks = calcBlanks(blanks, 0);

    if(!blanks) return console.log("无解");

    // 根据空格记录更新 board
    for(let k = 0; k < blanks.length; k++) {
        const {i, j, value} = blanks[k];
        board[i][j] = value.toString();
    }
};

// 判断两个坐标是否互斥
function isExclusive(i, j, targetI, targetJ) {
    return (
        i === targetI || // 同一行
        j === targetJ || // 同一列
        ( Math.floor(i/3) === Math.floor(targetI/3) &&  Math.floor(j/3) === Math.floor(targetJ/3)  ) // 同一网格
    )
}

// 计算空格的填写
function calcBlanks(blanks, n){

    // console.log(n);

    // 仍然为空的记录
    const stillEmpty = blanks.filter(blank => !blank.value);

    // 已全部填写完成
    if( stillEmpty.length === 0 ) return blanks;

    // 待填写的网格，已没有可填选项时，表示此路不通；
    if( stillEmpty.find(blank => blank.options.length === 0) ) return null;

    // 保存备份
    let origin = JSON.parse(JSON.stringify(blanks));

    // 将全部唯一选项填写完成， 无返回表示剩余的空格无法自洽
    if(!fillOnlyOption(origin)) return null;

    // 填写最近的一个格子
    let index = blanks.findIndex(blank => !blank.value);

    for(let i=0; i < blanks[index].options.length; i++) {
        let blank = blanks[index];
        const val = blank.options[i];

        blank.value = val;
        
        blank.exclusive.forEach(exclusive => {
            if(!blanks[exclusive].value) {
                blanks[exclusive].options = blanks[exclusive].options.filter(opt => opt !== val);
            }
        });
        
        let result = calcBlanks(blanks, n+1);
        
        if(result) return result;
        // 重置 blanks
        blanks = origin;
    }

    return null;
}


function fillOnlyOption(blanks) {
    let onlyOption = [];

    while(true) {
        onlyOption = blanks.filter(blank => !blank.value && blank.options.length === 1);

        if(onlyOption.length === 0) return blanks;

        onlyOption.map(blank => {
            const val = blank.options[0];
    
            blank.value = val;
            
            blank.exclusive.forEach(index => {
                if(!blanks[index].value) {
                    blanks[index].options = blanks[index].options.filter(opt => opt!== val);
                    // 互斥的空格已无可填选项
                    if(blanks[index].options.length === 0) return null;
                }
            });
        });
    }
}


let source = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".",".",".","5",".",".","."],
    [".",".","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","."],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".","1","4",".",".",".",".","5"],
    [".",".",".",".","8",".",".","7","."]
];

solveSudoku(source);

console.log(source);