// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function (arr) {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    let num = String(i).split("");
    let sum = 0;
    for (let i of num) {
      sum += Math.pow(+i, num.length);
    }
    if (sum === i) {
      list.push(sum);
    }
  }
  return list;
};
// console.log(findArmstrongNumbers([]));
