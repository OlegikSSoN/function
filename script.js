//1
function getNumber(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  if (a == b) {
    return 0;
  }
}
//2
function factorialNumber(a) {
  if (a < 0) {
    return -1;
  }
  if (a == 0 || a == 1) {
    return 1;
  } else {
    return a * factorialNumber(a - 1);
  }
}
//3
function transformNumber(a, b, c) {
  return a + b + c;
}
//4
function areaRectangle(a, b) {
  let param = 1;
  if (b == null) {
    param = Math.pow(a, 2);
  } else {
    param = a * b;
  }
  return param;
}
//5
function perfectNumber(a) {
  let number = 0;
  for (let i = 1; i <= a / 2; i++) {
    if (a % i === 0) {
      number += i;
    }
  }
  if (number === a && number !== 0) {
    return "It is perfect number";
  } else {
    return "Is not perfect number";
  }
}
//6
function perfectNumber(a, b) {
  let result = [];
  for (let i = a; i < b; i++) {
    sum = 0;
    for (let n = 1; n <= i / 2; n++) {
      if (i % n === 0) {
        sum += n;
      }
    }
    if (i === sum) {
      result.push(i);
    }
  }
  return result;
}
