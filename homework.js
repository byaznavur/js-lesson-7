// DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR

// ?String1. Sonning necha xonali ekanini, raqamlari yig’indisini chiqaruvchi dastur tuzing.
// let num = 12;
// let str = num.toString();
// console.log(str.length);
// let sum = 0;
// for (let el of str) {
//   sum += +el;
// }

// console.log(sum);

// ?String2. UTF-16 jadvalida kiritilgan belgidan oldin va keyin turuvchi belgilarni chiqaruvchi programma tuzilsin.

// let syb = "d";

// let sybPos = syb.charCodeAt();
// let nextPos = String.fromCharCode(sybPos + 1);
// let oldPos = String.fromCharCode(sybPos - 1);
// console.log(nextPos);

// ?String3. UTF-16 jadvali orqali faqat katta va kichik harflardan iborat satr qaytaruvchi mos ravishda getUpperCases()  vs getLowerCases() nomli funksiyalar hosil qiling.
// function getUpperCases() {
//   let str = "";
//   for (let i = 65; i <= 90; i++) {
//     str += String.fromCharCode(i);
//   }
//   console.log(str);
// }
// getUpperCases();
// function getLowerCases() {
//   let str = "";
//   for (let i = 97; i <= 122; i++) {
//     str += String.fromCharCode(i);
//   }
//   console.log(str);
// }
// getLowerCases();

// String4. Satr berilgan. Shu satr belgilari orasiga bittadan probel qo'yilgan satr hosil qiluvchi va ekranga chiqaruvchi programma tuzilsin. Kiritilgan satrda probel yo'q deb qabul qilinsin.
// Input: let str = "abcd"
// Output: "a b c d"
// let str = "abcd";
// let newStr = str.replaceAll("", " ").trim();
// console.log(newStr);

// Eslatma: string => number

// +"12" => 12
// +"abc" => NaN
// +"1a2b" => NaN
// isNaN()

// String5. C belgisi va S1, S2 satrlari berilgan. S1 satriga shu satrda uchragan har bir C belgisidan keyin S2 satrini qo'shuvchi programma tuzilsin.
// Input: S1 = "Hello world"; S2 = "*", C = "l"
// Output: "Hel*l*o worl*d"
// let S1 = "Hello world";
// let S2 = "*";
// let C = "l";

// let res = S1.replaceAll(C, C + S2);
// console.log(res);
// String6. S1 va S2 satrlari berilgan. S1 satrida oxirgi uchragan S2 satrini o'chirib tashlovchi programma tuzilsin. Agar S1 satrida S2 satri uchramasa S1 satri o'zgarishsiz qoldirilsin.
// Input:
// Ouput: "O'zbekiston buyuk davlat ! Uning yoshlari ham dir !"
// let S1 = "O'zbekiston buyuk davlat! Uning yoshlari ham buyukdir !";
// let S2 = "buyuk";
// let pos = S1.lastIndexOf(S2);
// let part1 = S1.slice(0, pos);
// let part2 = S1.slice(pos + S2.length);

// console.log(part1, part2);

// String7. Probel bilan ajratilgan o'zbekcha so'zlardan iborat str nomli satr berilgan. Satrdagi so'zlar sonini qaytaruvchi getNumberOfWords(str) nomli funksiya tuzilsin.
// let str = "Men InshaAlloh dasturchi bo'laman!";
// let splitStr = str.split(" ").length;

// console.log(splitStr);
// String8. Probel bilan ajratilgan va faqat katta harflar bilan terilgan o'zbekcha so'zlardan iborat satr berilgan. Satrdagi kamida bitta 'A' harfi bor so'zlar sonini aniqlovchi programma tuzilsin.
// let str = "Men InshaAlloh dasturchi bo'laman!";
// let splitStr = str.split(" ");
// for (let el of splitStr) {
//   if (el.includes("A")) {
//     console.log(el);
//   }
// }

// String9. Probel bilan ajratilgan o'zbekcha so'zlardan iborat str nomli satr berilgan. Satrdagi eng qisqa so'zni qataruvchi getMinOfString(str) funksiya tuzilsin.
// let str = "Men InshaAlloh dasturchi bo'laman va!";
// let splitStr = str.split(" ");

// let min = splitStr[0];
// for (let el of splitStr) {
//   if (el.length < min.length) {
//     min = el;
//   }
// }

// console.log(min);

// String10. Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan birinchi papka nomini aniqlovchi programma tuzilsin.
// Input: D:/Abdulaziz/Books/Programmer.exe
// Output: Abdulaziz

// let str = "D:/Abdulaziz/Books/Programmer.exe";
// let splitStr = str.split("/");
// console.log(splitStr[2]);
// !UYGA VAZIFA

// String1. n butun soni berilgan (1 <= n <= 26). Lotin alfavitidagi dastlabki n ta katta harflarni chiqaruvchi programma tuzilsin.
// let n = 12;

// for (let i = 65; i <= 65 + n; i++) {
//   console.log(String.fromCharCode(i));
// }
// String2. Kiritilgan belgining nimaligini aniqlovchi programma tuzilsin. Agar kiritilgan belgi raqam bo'lsa - "digit", lotincha harf bo'lsa - "lotin" yozuvi chiqarilsin. Boshqa xolatlar uchun nol chiqarilsin.
// let n = 12;

// if (!isNaN(n)) {
//   console.log("Digit");
// } else if (n.toLowerCase() !== n.toUpperCase()) {
//   console.log("Lotin");
// }
// String3. Satr beilgan. Satrning birinchi va oxirgi belgisini UTF-16 jadvalidagi kodini chiqaruvchi programma tuzilsin.
// let str = "Azizbek";

// let part1 = str.split("")[0];
// let part2 = str.split("")[str.length - 1];
// console.log(part1, part2);
// String4. N natural soni va belgi berilgan. N ta kiritilgan belgidan iborat satr hosil qiling va ekranga chiqaring. Masalan: N = 5; Belgi = 'A'; Natija = AAAAA

// let N = 12;
// let str = "A";
// let newStr = str.repeat(N);

// console.log(newStr);
// String5. Kiritilgan satrni teskari tartibda chiqaruvchi programma tuzilsin.

// let str = "Azizbek";
// let spiltStr = str.split("");

// let res = spiltStr.reverse().join("");
// console.log(res);

// String6. Satr va N natural soni berilgan. Shu satr belgilari orasiga N tadan "*" belgisi qo’yib yangi satr qaytaruvchi getStringStars(N) nomli funksiya tuzilsin.
//

// let str = "Azizbek";
// let N = 2;
// let res = str.split("").join("*".repeat(N));
// console.log(res);

// String7. Satr berilgan. Satrdagi raqamlar sonini aniqlovchi programma tuzilsin. (for of va isNaN dan foydalaning !)

// let str = "Ajaljd2323";
// let count = 0;
// for (let el of str) {
//   if (!isNaN(el)) {
//     console.log(el);
//     count++;
//   }
// }

// console.log(count);

// String8. Satr berilgan. Satrdagi kichik lotin va kirill harflarining umumiy sonini aniqlovchi programma tuzilsin.
// let str = "Men Azizbek";
// let count = 0;

// for (let el of str) {
//   if ((el >= "a" && el <= "z") || (el >= "а" && el <= "я")) {
//     count++;
//   }
// }

// console.log("Total count of Latin and Cyrillic lowercase letters:", count);

// String9. Satr berilgan. Satrdagi xamma katta lotin harflari kichigiga almashtiruvchi programma tuzilsin.
// let str = "Azizbek".toLowerCase();
// console.log(str);
// String10. Satr berilgan. Satrdagi xamma katta harflarini kichigiga, kichiklarini kattasiga almashtiruvchi programma tuzilsin.
// let str = "Asasd KASDASD asdasd ";

// let newStr = "";

// for (let el of str) {
//   if (el === el.toLowerCase()) {
//     newStr += el.toUpperCase();
//   } else {
//     newStr += el.toLowerCase();
//   }
// }

// console.log(newStr);
// String11. Satr berilgan. Agar satrda butun son ifodalangan bo'lsa 1 chiqarilsin, agar haqiqiy son bo'lsa 2 chiqarilsin. Agar satrni songa aylantirish imkoni bo'lmasa 0 chiqarilsin. Haqiqiy sonning kasr qismi nuqta "." Bilan ajratilgan deb qabul qilinsin.
// let str = "12.1";

// if (Number.isInteger(+str)) {
//   console.log(1);
// } else if (!Number.isInteger(+str)) {
//   console.log(2);
// } else {
//   console.log(0);
// }
// String12. Berilgan n sonni teskarisiga almashtiruvchi getInverseNumber(n) nomli funksiya tuzing.
// let num = 112132;
// let str = num.toString();

// let res = str.split("").reverse().join("");
// console.log(res);
// String13. "son ± son±... ± son" ko'rinishidagi arifmetik ifodani bildiruvchi satr berilgan. "+" belgisi o'rnida yo "+" yoki "-" bo'ladi. (Masalan: 7 + 3 - 2) Ifodaning qiymatini aniqlovchi programma tuzilsin. (son o'rnida butun son kiritiladi)

// function evaluateExpression(expression) {
//   return eval(expression);
// }
// const expression = "7 + 3 - 2 + 2 - 12 + 12 - 23 + 12 - 43 ";
// const result = evaluateExpression(expression);

// console.log("Ifodaning natijasi: " + result);

// String14. N1, N2 natural sonlari va S1, S2 satr berilgan. S1 satrning dastlabki N1 ta belgisidan va S2 satrning oxirgi N2 ta belgisidan iborat yangi satr hosil qiling.
// let N1 = 2;
// let N2 = 3;
// let S1 = "Azizbek";
// let S2 = "Abduhakimov"
// let newS1 = S1.slice(0, N1) + S2.slice(N2);
// console.log(newS1)

// String15. C belgisi va S satri berilgan. S satrida uchragan har bir C belgisini 2 marta orttiruvchi programma tuzilsin.
// function doubleCharacter(S, C) {
//   return S.split(C).join(C + C);
// }
// const S = "Azizbek";
// const C = "z";
// const result = doubleCharacter(S, C);

// console.log("Natija: " + result);

// String16. C belgisi va S1, S2 satrlari berilgan. S1 satriga shu satrda uchragan har bir C belgisidan oldin S2 satrini qo'shuvchi programma tuzilsin.
// let C = "z";
// let S1 = "Azizbek";
// let S2 = "Abduhakimov";
// let newStr = S1.replace(C, C + S2);
// console.log(newStr);

// String17. S1 va S2 satrlari berilgan. S2 satrini S1 satrida takrorlanishlar sonini chiqaruvchi programma tuzilsin.
// let S1 = "Azizbek Abduhakimov Azizbek Bakhtiyarivich";
// let S2 = "Azizbek";

// let res = S1.split(" ");
// let count = 0;

// for (let el of res) {
//   if (el === S2) {
//     count++;
//   }
// }
// console.log(count);

// String18. S1 va S2 satrlari berilgan. S1 satrida birinchi uchragan S2 satrini o'chirib tashlovchi programma tuzilsin. Agar S1 satrida S2 satri uchramasa S1 satri o'zgarishsiz qoldirilsin.
// function removeFirstOccurrence(S1, S2) {
//   const index = S1.indexOf(S2);
//   if (index !== -1) {
//     const before = S1.slice(0, index);
//     const after = S1.slice(index + S2.length);
//     return before + after;
//   }
//   return S1;
// }
// let S1 = " Abduhakimov Azizbek Bakhtiyarivich Azizbek";
// let S2 = "Azizbek";
// let result = removeFirstOccurrence(S1, S2);

// console.log("Natija: " + result); // " Abduhakimov Azizbek Bakhtiyarivich"

// String19. S1 va S2 satrlari berilgan. S1 satrida uchragan barcha S2 satrlarini o'chirib tashlovchi programma tuzilsin. Agar S1 satrida S2 satri uchramasa S1 satri o'zgarishsiz qoldirilsin.
// function removeFirstOccurrence(S1, S2) {
//     const index = S1.indexOf(S2);
//     if (index !== -1) {
//       const before = S1.slice(0, index);
//       const after = S1.slice(index + S2.length);
//       return before + after;
//     }
//     return S1;
//   }
//   let S1 = " Abduhakimov Azizbek Bakhtiyarivich Azizbek";
//   let S2 = "Azizbek";
//   let result = removeFirstOccurrence(S1, S2);

//   console.log("Natija: " + result); // " Abduhakimov Azizbek Bakhtiyarivich"

// String20. S1, S2 va S3 satrlari berilgan. S1 satrida birinchi uchragan S2 satrini S3 satriga o'zgartiruvchi programma tuzilsin.
// let a = "uzum";
// let b = "z";
// let c = "b";

// let result = a.replace(b, c);

// console.log(result); // "uzumb"

// String21. S1, S2 va S3 satrlari berilgan. S1 satrida oxirgi uchragan S2 satrini S3 satriga o'zgartiruvchi programma tuzilsin.

// String22. Probel bilan ajratilgan va faqat katta harflar bilan terilgan o'zbekcha so'zlardan iborat satr berilgan. Satrdagi bir xil harflar bilan boshlanuvchi va tugovchi so'zlar sonini aniqlovchi programma tuzilsin.

// String23. Probel bilan ajratilgan va faqat katta harflar bilan terilgan o'zbekcha so'zlardan iborat satr berilgan. Satrdagi aniq 2 ta 'A' harfi bor so'zlar sonini aniqlovchi programma tuzilsin.

// String24. Probel bilan ajratilgan o'zbekcha so'zlardan iborat str nomli satr berilgan. Satrdagi eng uzun so'zni qaytaruvchi getMaxOfString(str) nomli funksiya tuzilsin.

// String25. Probel bilan ajratilgan o'zbekcha so'zlardan iborat satr berilgan. Shu satrdagi so'zlarni "." bilan ajratilgan xolda chiqaruvchi programma tuzilsin. Satr oxiriga "." qo'yish shart emas.

// String26. Probel bilan ajratilgan kichik harfli so'zlardan iborat satr berilgan. Satrdagi har bir so'zning birinchi harfini kattasi bilan almashtiruvchi programma tuzilsin.

// String27. Satr berilgan. Satrdagi tinish belgilari sonini chiqaruvchi programma tuzilsin.
// marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"]

// String28. Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan faylning nomini (kengaytmasiz) aniqlovchi programma tuzilsin.
// Input: D:/Qudrat_c++/books/My_book.exe
// Output: My_book

// String29. Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan faylning kengaytmasini aniqlovchi programma tuzilsin.
// Input: D:/Qudrat_c++/books/My_book.exe
// Output: exe

// String30. Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan oxirgi papka nomini aniqlovchi programma tuzilsin. Agar papka tub bo'lsa (корневой), "/" belgisi chiqarilsin.
// Input: D:/Qudrat_c++/books/My_book.exe
// Output: books
