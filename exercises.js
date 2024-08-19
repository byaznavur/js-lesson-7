// String1

// let n = 83471;

// let str = n.toString();

// // console.log(str.length);

// let sum = 0;

// for (let el of str) {
//   // console.log(+el);
//   sum += +el;
// }

// console.log(sum);

// String2

// let char = "d";

// let charPos = char.codePointAt();

// // console.log(charPos);

// console.log(String.fromCharCode(charPos - 1));
// console.log(String.fromCharCode(charPos + 1));

// String3

// function getUpperCases() {
//   let str = "";
//   for (let i = 65; i <= 90; i++) {
//     str += String.fromCharCode(i);
//   }
//   return str;
// }

// let upperCases = getUpperCases();

// console.log(upperCases);

// function getLowerCases() {
//   let str = "";
//   for (let i = 97; i <= 122; i++) {
//     str += String.fromCharCode(i);
//   }
//   return str;
// }

// let lowerCases = getLowerCases();

// console.log(lowerCases);

// String5

// let str = "abcd";

// let newStr = str.replaceAll("", " ").trim();

// console.log(newStr);

// String6

// let S1 = "Hello world";
// let S2 = "*";
// let C = "l";

// let res = S1.replaceAll(C, C + S2);

// console.log(res);

// String7

// let S1 = "O'zbekiston buyuk davlat ! Uning yoshlari ham buyukdir !";
// let S2 = "buyuk";

// let pos = S1.lastIndexOf(S2);

// let part1 = S1.slice(0, pos);
// let part2 = S1.slice(pos + S2.length);

// let res = part1 + part2;

// console.log(res);

// String9

// let str = "O'zbekiston buyuk davlat! Uning yoshlari ham buyukdir!";

// const getNumberOfWords = (str) => {
//   let arr = str.split(" ");
//   return arr.length;
// };

// let res = getNumberOfWords(str);
// console.log(res);

// String10

// let str = "O'ZBEKISTON BUYUK DAVLAT! UNING YOSHLARI HAM BUYUKDIR!";

// let arr = str.split(" ");

// let count = 0;

// for (let el of arr) {
//   if (el.includes("A")) {
//     count++;
//   }
// }

// console.log(count);

// String11

// const getMinOfString = (str) => {
//   let arr = str.split(" ");
//   let min = arr[0];
//   for (let el of arr) {
//     if (el.length < min.length) {
//       min = el;
//     }
//   }
//   return min;
// };

// let res = getMinOfString(
//   "O'ZBEKISTON BUYUK DAVLAT! UNING YOSHLARI HAM BUYUKDIR!"
// );

// console.log(res);

// let str = "D:/Qudrat_c++/books/My_book.exe";

// let arr = str.split("/");

// console.log(arr[1]);
