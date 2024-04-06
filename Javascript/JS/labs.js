// swapping of numbers
// let a = 2;
// let b = 3;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);

//swapping of numbers with using thrid variable
// let a = 2;
// let b = 3;
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);

//length of Number
// let n = 1234;
// let count = 0;
// while (n > 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// console.log(count);

//reverse of number
// let num = 12345;
// let sum = 0;
// while (num > 0) {
//   digit = Math.floor(num % 10);
//   sum = sum * 10 + digit;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

//Amstrong number
// let num = 153;
// let sum = num;
// let num1 = 0;
// while (num > 0) {
//   digit = Math.floor(num % 10);
//   num1 += digit * digit * digit;
//   num = Math.floor(num / 10);
// }
// if (sum == num1) {
//   console.log("amstrong");
// } else {
//   console.log("not amstrong");
// }

//sum of number in digit
// let num = 12345;
// let sum = 0;
// while (num > 0) {
//   sum += Math.floor(num % 10);
//   num = Math.floor(num / 10);
// }
// console.log(sum);

//leap year or not
// let year = 2004;
// if (year % 4 == 0 && year % 10 !== 0) {
//   console.log("leap year");
// } else {
//   console.log("not leap year");
// }

// prime number or not ;
// let num = 5;
// let isprime = true;
// if (num == 1) {
//   console.log("neither prime nor composite number");
// } else if (num >= 2) {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       isprime = false;
//     }
//   }
//   if (isprime) {
//     console.log("prime");
//   } else {
//     console.log("not prime");
//   }
// } else {
//   console.log("enter the number");
// }

//primes in range
// function isprimes(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;
//   if (num % 2 === 0 || num % 3 === 0) return false;

//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function findPrimesRange(start, end) {
//   let primes = [];
//   for (let i = start; i <= end; i++) {
//     if (isprimes(i)) {
//       primes.push(i);
//     }
//   }
//   return primes;
// }
// let x = findPrimesRange(2, 50);
// console.log(x);

//factibonnaci series;
// function fibono(num) {
//   const series = [0, 1];
//   for (let i = 2; i <num; i++) {
//     nextNumber = series[i - 1] + series[i - 2];
//     series.push(nextNumber);
//   }
//   return series;
// }
// console.log(fibono(8));

//factorial of number
// function factorial(num) {
//   let sum = 1;
//   for (let i = num; i >= 1; i--) {
//     sum *= i;
//   }
//   return sum;
// }
// console.log(factorial(5));

//pattern programs
// let str = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// for (let i = 0; i < 5; i++) {
//   for (let j = i; j < 5; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// for (let i = 1; i < 4; i++) {
//   for (let j = i; j <= 4; j++) {
//     str += " ";
//   }
//   for (let j = 1; j < i; j++) {
//     str += "*";
//   }
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += " ";
//   }
//   for (let j = i; j < 4; j++) {
//     str += "*";
//   }
//   for (let j = i; j <= 4; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

//factorial recirson
// function recirson(num) {
//   if (num == 0 || num == 1) {
//     return 1;
//   }
//   return num * recirson(num - 1);
// }
// console.log(recirson(5));

//Title Case
// let word = "my name is naveen";
// function title(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(title(word));

//bubble sort ;
// let swapped;
// function bubblesort(arr) {
//   do {
//     swapped = false;
//     for (let i = 0; i <= arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// }
// let arr = [1, 2, 3, 4, 6, 7, 8, 5];
// console.log(bubblesort(arr));

// function selection(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }
//   return arr;
// }
// console.log(selection(arr));

// var a = 1;
// var b = 0;
// while (a <= 3) {
//   a++;
//   b += a * 2;
//   print(b);
// }
// console.log(b);

// const res = ["1", "1a", "0", -1, true, false].map(Number).filter(Boolean);
// console.log(res);

//company:-1
//swapping of the number without using thrid variable
// let a = 2;
// let b = 4;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

//length of the number
// let n = 153;
// let n2 = n;
// let count = 0;
// while (n > 0) {
//   digit = Math.floor(n % 10);
//   count += digit;
//   n = Math.floor(n / 10);
// }
// console.log(count);
// if (n2 == count) {
//   console.log("amstrong number");
// } else {
//   console.log("not amstrong number");
// }

//prime numbers or not

// function isPrime(num, isprime) {
//   if (num == 1) {
//     console.log("Neither Prime Number");
//   } else if (num >= 2) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         isprime = false;
//       }
//     }
//     if (isprime) {
//       console.log("prime number");
//     } else {
//       console.log("not prime number");
//     }
//   } else {
//     console.log("it is not a number");
//   }
// }
// isPrime(6, true);

//factibonnaci

// function fibono(n) {
//   const series = [0, 1];
//   for (let i = 2; i < n; i++) {
//     nextNumber = series[i - 1] + series[i - 2];
//     series.push(nextNumber);
//   }
//   return series;
// }
// console.log(fibono(10));

// let str = "";
// for (let i = 0; i < 4; i++) {
//   for (let j = i; j <= 4; j++) {
//     str += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     str += "*";
//   }
//   for (let k = 0; k <= i; k++) {
//     str += "*";
//   }
//   str += "\n";
// }
// for (let i = 0; i <= 4; i++) {
//   for (let j = 0; j <= i; j++) {
//     str += " ";
//   }
//   for (let j = i; j < 4; j++) {
//     str += "*";
//   }
//   for (let j = i; j <= 4; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

//star pattern
arr = [1, 2, 4, 5, 3];
// function insertsort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// function insertSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }
// console.log(insertSort(arr));

function Arr(a) {
  let arr = [];
  let count = 0;
  for (let i = 0; i <= a.length - 1; i++) {
    for (let j = 0; j <= a.length - 1; j++) {
      if (a[i] === a[j]) {
        count++;
      }
    }
    arr.push(count);
    count = 0;
  }
  return arr;
}
console.log(Arr([-3, 0, 1, -3, 1, 1, -3, 10, 0]));
