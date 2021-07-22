class Sort {
  list: number[] = [];
  len: number = 0;

  constructor(list: number[]) {
    this.list = list.slice();
    this.len = list.length;
  }

  // 比较大小
  compare(i: number, j: number): boolean {
    return this.list[i] - this.list[j] > 0;
  }

  // 交换位置
  exchange(i: number, j: number): void {
    if (i === j) return;

    let temp = this.list[i];
    this.list[i] = this.list[j];
    this.list[j] = temp;
  }
}

/**
 *
 * @title 选择排序
 * @description 每次查找未排序的元素中最小的， 放到最左边；每次结束后，左侧都是最小的数；
 *
 **/
export class Selection extends Sort {
  constructor(list: number[]) {
    super(list);
  }

  sort(): number[] {
    console.time('Selection');

    for (let i: number = 0; i < this.len - 1; i++) {
      let min = i;

      for (let j: number = i + 1; j < this.len; j++) {
        if (this.compare(min, j)) min = j;
      }

      this.exchange(i, min);
    }

    console.timeEnd('Selection');
    return this.list;
  }
}

/**
 *
 * @title 插入排序
 * @description 每次将当前元素依次和左侧的远侧比较，交换位置并继续比较，直到大于左侧， 从而保证每次结束， 左侧都完成了局部排序；
 *
 **/
export class Insertion extends Sort {
  constructor(list: number[]) {
    super(list);
  }

  sort(): number[] {
    console.time('Insertion');

    for (let i: number = 1; i < this.len; i++) {
      for (let j: number = i; j > 0 && this.compare(j - 1, j); j--) {
        this.exchange(j, j - 1);
      }
    }

    console.timeEnd('Insertion');
    return this.list;
  }
}

/**
 *
 * @title 希尔排序
 * @description 选定指定间隔的一组进行插入排序，然后降低间隔再次插入排序，直到完成间隔为1插入排序
 * @example [9, 5, 4, 6, 2, 8, 7, 1] 设定初始间隔为2，先分别对 9,4,2,7 和 5,6,8,1 插入排序得到 [2, 1, 4, 5, 7, 6, 9, 8], 再对[2, 1, 4, 5, 7, 6, 9, 8]插入排序
 **/
export class Shell extends Sort {
  sort(): number[] {
    console.time('Shell');

    let h = 1;

    while (h < this.len / 3) h = h * 3 + 1;

    while (h >= 1) {
      for (let i = h; i < this.len; i++) {
        for (let j = i; j >= h && this.compare(j - h, j); j -= h) {
          this.exchange(j - h, j);
        }
      }

      h = Math.floor(h / 3);
    }

    console.timeEnd('Shell');
    return this.list;
  }
}

/**
 *
 * @title 冒泡排序
 * @description 不断重复比较相邻元素， 当前者大于后者， 交换他们的位置。 每次循环后，最大值到队尾，并且不再参与下一次循环
 *
 **/
export class Bubble extends Sort {
  sort(): number[] {
    console.time('Bubble');
    let i = this.len;

    while (i > 0) {
      // 直到已知的最大值的位置之前， 不断比较相邻元素
      for (let j = 0; j < i - 1; j++) {
        if (this.compare(j, j + 1)) this.exchange(j, j + 1);
      }
      // 最大值达到最右侧
      i--;
    }

    console.timeEnd('Bubble');
    return this.list;
  }
}

/**
 *
 * @title 归并排序
 * @description 将全部元素不断通过递归，拆分为两组，然后不断依次将两组中最小的元素放入新数组、并返回。 每两个数组完成合并，两组内全部元素达到局部排序
 *
 **/
export function mergeSort(list: number[]): number[] {
  if (list.length < 2) return list;

  let middle = Math.floor(list.length / 2),
    left = list.slice(0, middle),
    right = list.slice(middle),
    result = merge(mergeSort(left), mergeSort(right)); // 不断递归拆分， 完成局部的排序后归并为一个数组， 继续向上归并 直到全部完成排序；
  return result;
}

function merge(left: number[], right: number[]) {
  let result: number[] = [];

  while (left.length && right.length) {
    result.push((left[0] <= right[0] ? left : right).shift());
  }

  if (left.length) result = result.concat(left.slice());
  if (right.length) result = result.concat(right.slice());

  return result;
}
