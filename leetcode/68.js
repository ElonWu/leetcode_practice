/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = [];
  let line = [],
    lineWidth = 0;

  for (let i = 0; i < words.length; i++) {
    const nextWidth = lineWidth + words[i].length + (lineWidth === 0 ? 0 : 1); // 自动累加 words 之间的空格

    // 恰好满足
    if (nextWidth === maxWidth) {
      line.push(words[i]);
      res.push(line.join(' '));

      // 重置
      line = [];
      lineWidth = 0;
      continue;
    }

    // 超过
    if (nextWidth > maxWidth) {
      insertLine(line, res, lineWidth, maxWidth);

      // 重置
      line = [];
      lineWidth = 0;
      i--; // 当前单词不能加入
      continue;
    }

    // 添加
    line.push(words[i]);
    lineWidth = nextWidth;
  }

  // 最后一行左对齐
  if (lineWidth > 0) {
    // 先将全部单词左对齐， 然后在尾部追加空格
    insertLine([line.join(' ')], res, lineWidth, maxWidth);
  }

  return res;
};

const insertLine = (line, res, lineWidth, maxWidth) => {
  const spaceCount = maxWidth - lineWidth + line.length - 1;

  if (line.length === 1) {
    // 单词数量为 1，左对齐
    res.push(line[0] + genSpace(spaceCount));
  } else {
    res.push(lineWithCertainSpace(line, spaceCount));
  }
};

// 在单词之间中插入指定数量的空格
const lineWithCertainSpace = (line, spaceCount) => {
  let lineStr = '',
    // 剩余空格和插入次数
    spacesToInsert = spaceCount,
    breakPointCount = line.length - 1;

  for (let i = 0; i < line.length; i++) {
    // 追加字符
    lineStr += line[i];

    if (breakPointCount === 0) break;

    // 追加空格
    const count = Math.ceil(spacesToInsert / breakPointCount);
    lineStr += genSpace(count);

    // 更新剩余空格和插入次数
    spacesToInsert -= count;
    breakPointCount--;
  }

  return lineStr;
};

const genSpace = (count) => new Array(count).fill(' ').join('');

// const words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
//   maxWidth = 16;

// const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
//   maxWidth = 16;

const words = [
    'Science',
    'is',
    'what',
    'we',
    'understand',
    'well',
    'enough',
    'to',
    'explain',
    'to',
    'a',
    'computer.',
    'Art',
    'is',
    'everything',
    'else',
    'we',
    'do',
  ],
  maxWidth = 20;

console.log(fullJustify(words, maxWidth));
