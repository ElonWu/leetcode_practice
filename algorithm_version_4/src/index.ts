import { Shell, Insertion, Selection, Bubble, mergeSort } from './chap2/sort';

const arr: number[] = [10, 5, 6, 8, 3, 9, 0, 2, 7, 1, 4];

console.log(new Selection(arr).sort());
console.log('-------------------------');
console.log(new Insertion(arr).sort());
console.log('-------------------------');
console.log(new Shell(arr).sort());
console.log('-------------------------');
console.log(new Bubble(arr).sort());
console.log('-------------------------');

console.time('Merge');
console.log(mergeSort(arr));
console.timeEnd('Merge');
console.log('-------------------------');
// console.log(arr);
