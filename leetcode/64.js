var minPathSum = function (grid) {
	let row = grid.length,
		col = grid[0].length,
		cache = {},
		nodes = [
			{
				aixs: [0, 0],
				sum: grid[0][0],
				next: [ [1, 0], [0, 1] ],
			},
		];
    

    while(nodes.length) {
        let newNext = [];

        for(let {aixs, sum, next} of nodes) {
            
            for(let [x, y] of next) {
                if (x < row && y< col) {
                    
                }
            }
        }
    }

	console.log(nums);
};
// const source = [
// 	// [1, 1, 4, 5, 3],
// 	// [2, 5, 6, 3, 4],
// 	// [2, 5, 6, 3, 4],
// 	// [2, 5, 6, 3, 4],
// 	[1, 3, 5],
// 	[1, 5, 2],
// 	[4, 2, 1],
// 	[4, 2, 9],
// 	[4, 2, 8],
// ];

const source = [
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1],
];

console.log(minPathSum(source));
