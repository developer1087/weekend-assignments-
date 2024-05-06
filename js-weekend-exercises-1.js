// 1 

function yesNo(boolVal) {
  return boolVal? "yes": "No";;
}

console.log(yesNo(true)); ;

// 2.1 Sum of the lowest numbers

function sumOfTwoLow(arr) {
  // sort the array
  const newArr = arr.sort((a, b) => a-b);
  let sum = newArr[0] + newArr[1];
  return sum
}

console.log(sumOfTwoLow([19, 5, 42, 2, 77])
);  


// 2.2 One and Zero - Binary

function binaryArrToIntVal(arr) {
  // 1. reverse arr
  const reversedArr = arr.reverse();
  // 2. set accumulator
  let acc = 0;
  // 3. loop over arr
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (reversedArr[i] === 1) {
        acc++
      }
    } else {
      if (reversedArr[i] === 1) {
        acc += 2 ** i;
      }
    }
  }
  return acc;
}

console.log(binaryArrToIntVal([0, 1, 1, 0])); 

// 2.3 Find the next perfect square

function findNextSquare(curNum) {
  const squt = Math.sqrt(curNum);
  const nextPerfect = (squt + 1) * (squt + 1)
  if (nextPerfect % 1 === 0) {
    return nextPerfect;
  } else {
    return -1;
  }
}

console.log(findNextSquare(25));

// 2.4 Unique

function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1] && arr[i] !== arr[i+2]) {
      return arr[i+2];
    } else if (arr[i] !== arr[i+1] && arr[i] === arr[i+2]) {
      return arr[i+1];
    } else if (arr[i] !== arr[i+1] && arr[i+1] === arr[i+2]) {
      return arr[i];
    }
  }
}

console.log(findUnique([0,1,1,1,1]));

// 2.5 Summation

function sumTill(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTill(8));

// 2.6 Years and Centuries 

function theCentury(year) {
  return Math.floor(year / 100) +1
}

console.log(theCentury(1777));

// 2.7 Basic Math

function basicOp(op, val1, val2) {
  const res = eval(val1+op+val2)
  return res
}

console.log(basicOp('/', 1, 2));


//  3.1

function nb_year(p0, percent, aug, p) {
  // const dif = p - p0;
  // const addition = p0 * percent * 0.01 + aug;
  // const years = dif / addition - p0 / addition;
  // return years;
  let pCurr = p0;
  let counter = 0;
  while (pCurr < p) {
    pCurr += pCurr * percent * 0.01 + aug;
    counter++;
  }
  return counter;
}

console.log(nb_year(1500, 5, 100, 5000));

// 3.2 People on the bus

function lastOnBus(arr) {
  let counter = 0;
  for (stop of arr) {
    counter += stop[0];
    counter -= stop[1];
  }
  return counter;
}

console.log(lastOnBus([[2, 0], [1, 1], [2, 1]]));

// 4.1 Fibonacci

function fibonacciMaker(n) {
  const arr = [0, 1];
  let counter = 2
  while (counter < n) {
    arr.push(arr[arr.length-1] + arr[arr.length-2]);
    counter++;
  }
  return arr[arr.length-1];
}

console.log(fibonacciMaker(5));

// 4.2 Tribonacci

function tribonacciMaker(n) {
  const arr = [0, 0, 1];
  let counter = 3
  while (counter < n) {
    arr.push(arr[arr.length-1] + arr[arr.length-2] + arr[arr.length-3]);
    counter++;
  }
  return arr;
}

console.log(tribonacciMaker(9));

// 5.1 Trimming string

function trimStr(str) {
  const newStr = str.slice(1, str.length-1)
  return newStr;
}

console.log(trimStr("string"));

// 5.2 String repeat

function repeat_str(n, str) {
  let repeated = '';
  while (n > 0) {
    repeated += str;
    n--;
  }
  return repeated;
}

console.log(repeat_str(5, "Hello"));

// 5.3 To Camel Case

function toCamelCase(str) {
  let newStr = str.split('-')
  newStr = newStr.map((word, index) => index === 0? word: word.charAt(0).toUpperCase() + word.slice(1))
return newStr.join('')
}

console.log(toCamelCase("the-stealth-warrior")); 

// 5.4 To weird case

function toWeirdCase(str) {
  let wordsArr = str.split(' ');
  let strArr = [];
  // wordsArr = wordsArr.map((word, index) => index % 2 === 0? word.charAt(index).toUpperCase(): word.charAt(index).toLowerCase())
  for (word of wordsArr) {
    word = word + ' ';
    for (let i = 0; i < word.length; i++) {
      if (i === 0 || i % 2 === 0) {
        strArr.push(word.charAt(i).toUpperCase())
      } else if (word[i] === ' ') {
        strArr.push(' ')
      }
      else {
        strArr.push(word.charAt(i))
      }
    }
  }
  return strArr.join('')
}

console.log(toWeirdCase("Weird string case"));

// 5.5 Abbreviate two words

function abbrev(name) {
  let nameArr = name.split(' ');
  nameArr = nameArr.map((word) => word.charAt(0))
  return nameArr.join('.');
}

console.log(abbrev("Avi Israeli"));

// 5.6 Mask

function maskify(str) {
  let strArr = str.split('');
  let maskedArr = strArr.map((char, index) => index < strArr.length-4? char = '#' : char)
  return maskedArr.join('');
}

console.log(maskify("12345678"));


// 5.7 Shortest word

function shorWordLen(str) {
  let strArr = str.split(' ');
  let shortWord = strArr[0];
  for (word of strArr) {
    if (word.length < shortWord.length) {
      shortWord = word;
    }
  } 
  return shortWord.length;
}


console.log(shorWordLen("avi israeli and anna mordof")); 

// 5.8 Shortest word v2

function longWordLen(str) {
  let strArr = str.split(' ');
  let longWord = strArr[0];
  for (word of strArr) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  } 
  return longWord.length;
}


console.log(longWordLen("avi israeli and anna mordof")); 
