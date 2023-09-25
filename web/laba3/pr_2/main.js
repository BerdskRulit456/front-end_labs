// console.log("Задача 1.1");
// var a = [1, 2, 3];
// for(let i = a.length; i>=0; i--){
//     console.log(a[i]);
// }

// console.log("Задача 1.2");
// const arr = [1, 1, 1, 3, 3, 3, 4, 5, 6, 4];
// let arr_1 = new Set(arr);
// console.log(arr_1);

// console.log("Задача 1.3");
// const i = prompt("Введите число");
// const k = prompt("Введите искомое число");
// let count = 0;
// const a = Array.from(String(i), Number);
// for(let j = 0; j <= a.length; j++){
//     if(a[j] == k){
//         count++;
//     }
// }
// console.log(count);

// console.log("Задача 1.4");
// var a = prompt("Введите число");
// var b;
// var c = a;

// var arr2 =[];
// var count = 0;

// var count2 = 1;

// var count3 = 1;

// var MaxCount = 1;

// var IndexCount = null;

// var MaxKolvo = 0;

// var chislo = 0;

// var ChisloIndex = 0;

// var countDEB = 0;

// var len_max = 1;
// var len_current = 1;
// var start_current = 1;
// var start_max = null;

// while(c > 1){
//     c/=10;
//     count++;
// }
// var arr =[];

// var arr2 =[];

// var arr3 =[];

// while(a > 0){
//     arr.push(a % 2)
//     a = Math.floor(a / 2);
// }
// arr.reverse();
// alert(arr);

// for (var i = 0; i <= arr.length; i++){
//     if(arr[i] == arr[i+1]){
//         IndexCount = arr[i];
//         count2++;
//         if (count2 > MaxCount){
//             MaxCount = count2;
//         }
//     }
//     else{
//         arr2.push(MaxCount);
//         MaxCount = 1;
//         IndexCount = arr[i];
//         arr3.push(IndexCount);
//         IndexCount = null;
//         count2 = 1;
//     }
// }

// function findmax(arr2){
//     let max = arr2[0];
//     for (let num of arr2){
//         if (max < num){
//             max = num;
//         }
//     }
//     return max;
// }

// chislo = findmax(arr2);

// for(var h = 0; h <= arr2.length ; h++){
//             if(arr2[h] == chislo){
//                 ChisloIndex++;
//             }
//         }

// for(var q = 0; q <= arr2.length ; q++){
//     if(arr2[q] == arr2[q+1]){
//         countDEB++;
//         }
//     }

// if(countDEB == arr2.length){
//     ChisloIndex = 0;
//     alert(chislo);
//     alert(arr3[0]);
//     }

// else if(chislo > 1){
//     alert(chislo);
//     alert(arr3[ChisloIndex]);
// }

// else{
//     alert("Нет максимального элемента");
// }

// console.log("Задача 2.1");
// let s = prompt();
// function check (s) {
//     for (let l of s)
//         if (s.indexOf(l) === s.lastIndexOf(l)){
//         return l;
//         }
//     return null
// }
//     alert(check(s))

// console.log("Задача 2.2");
// let arr = 'abcdefghijklmnopqrstuvwxyz0123456789';
// let list = [...arr];
// let i = prompt();
// let arr1 = [];
// // arr1.length = i;
// for (let a = 0; a <= i-1; a++){
//     arr1[a] = list[Math.floor(Math.random() * list.length)];
// }
// alert(arr1.join(''));




// console.log("Задача 2.3");
// let i = "позволяеткопироватьтекстиз";
// let sp = [...i];
// let spb = new Set(sp);
// sp = [...spb];
// alert(sp.join(''));


