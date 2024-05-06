// 6.1 Mumbling 

function repeat_str(n, str) {
  let repeated = '';
  while (n > 0) {
    repeated += str;
    n--;
  }
  return repeated;
}

function accum(str) {
  let resArr = str.split('');
  for (let i = 0; i < resArr.length; i++) {
    resArr[i] += repeat_str(i, resArr[i])
  }
  return resArr;
}

console.log(accum("abcd"));

// 6.2 Counting duplicates

function countDups(str) {
  let lowerStr = str.split('');
  let obj = {};
  lowerStr.forEach(el => {
   obj[el] = (obj[el] || 0) + 1;
  });
  let counter = 0;
  for (const el in obj) {
    if (obj[el] > 1) {
      counter ++;
    }
  }
  return counter;
}

console.log(countDups("aabbCde"));

// 6.3 Organize strings

function strOrg(s1, s2) {
  let unorg = s1.concat(s2);
  let sorted = unorg.split('').sort();
  let unique = [];
  sorted.map((char) => !unique.includes(char)? unique.push(char): null)
  return unique.join('');
}

const a = "xyaabbccvcdel";
const b = "xxxyyyyalih"

console.log(strOrg(a, b));

// 6.4 Isogram

function isogram(str) {
  let isIso = true;
  let strArr = str.split('');
  let emptyArr = [];
  for (const char of strArr) {
    if (!emptyArr.includes(char)) {
      emptyArr.push(char);
    } else {
      isIso = false;
      break;
    }
  }
  return isIso;
}

console.log(isogram("absdaf"));

// 7 Implement filter, forEach, map

// array.filter()

const array = [3, 2, 76, 34, 5, 13, 4];

// Given this array - filter only numbers > 10

const bigNums = array.filter((num) => num > 10)

console.log(bigNums);

// forEach()

const strArr = ['a', 'b', 'c'];

// Given this array of strings - copy array to a new array

let newArr = [];

strArr.forEach((el) => newArr.push(el));

console.log(newArr);

// 8 Find the perimeter of a Rectangle

const findPerimeter = (length, width) => length * 2 + width * 2;


console.log(findPerimeter(2, 9));