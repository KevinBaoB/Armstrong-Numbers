// How can you make this more scalable and reusable later?

// exports.findArmstrongNumbers =

function findArmstrongNumbers() {
  let list = [];
  for (let i = 0; i < 999; i++) {
    num = String(i).split("");
    let sum = 0;
    for (let i in num) {
      sum += Math.pow(+num[i], num.length);
    }
    if (sum === i) {
      list.push(sum);
    }
  }
  return list;
}
console.log(findArmstrongNumbers());
