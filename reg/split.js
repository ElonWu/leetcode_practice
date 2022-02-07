
const splitReward = (reward) => {
  return reward.split(/(?<=\d+), /ig).map((item) => {
    const [name, cnt] = item.split("*");

    const itemName = name.replace(/\[.*?\]/ig, '').trim();
    const itemCnt = parseInt(cnt);

    return {
      itemName,
      itemCnt,
    }
  });
};


const str = `判金[ 奖励类型:真通宝, 道具id:10006 ] * 2000, 服部半藏[ 奖励类型:武将, 道具id:10012 ] * 1`



console.log(splitReward(str))


// const reg = /\[.*?\]/ig;

// console.log(reg.exec(str));
// console.log(str.replace(reg, ''));