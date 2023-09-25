// alert("Задача 1.1");
// const arr = [];
// arr.length = prompt("Введите длину массива");
// for (let i = 0; i <= arr.length-1; i++){
//     arr[i] = Math.floor(Math.random() * 100);
// }
// alert(arr);
// arr.sort((a,b) => a-b);
// alert(arr[arr.length-1] - arr[0]);

// alert("Задача 1.2");
// const arr = [1, 4, 34, 1, 20, 6, 6, 12, 8, 6];
// let arr1 = new Set(arr);
// arr1 = [...arr1]
// alert(arr1);

// alert("Задача 1.3");
// const arr = 
//     [
//     {id: 1, idDone: true}, 
//     {id: 2, idDone: false},
//     {id: 3, idDone: true}
//     ]
// for(let i = 0; i<=arr.length-1;i++){
//     if(arr[i].idDone === true){
//         console.log(arr[i]);
//     }
// }

// alert("Задача 2.1");
// const arr = [];
// let k = prompt("Введите чило для поиска");
// arr.length = prompt("Введите длину массива");
// for (let i = 0; i <= arr.length-1; i++){
//     arr[i] = Math.floor(Math.random() * 10);
// }
// alert(arr);
// alert(arr.filter(item => item > k));

// alert("Задача 2.2");
// const arr = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];
// var arr2 = [].concat(arr);
// alert(arr2);

// alert("Задача 3.1");
// const arr = [];
// console.log(arr);
// let count = 0;
// for (let i = 0; i <= arr.length-1; i++){
//     for (let j = i+1; j <= arr.length-1;j++){
//         if (arr[i] + arr[j] === 0){
//             count++;
//             arr.splice(j, 1);
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
// alert(count + " пары чисел, дающих 0");

// alert("Задача 3.2");
// const arr = [];
// console.log(arr);
// let count = 0;
// for (let i = 0; i <= arr.length-1; i++){
//         for (let j = i+1; j <= arr.length-1;j++){
//             for (let k = j+1; k <= arr.length-1; k++){
//                 if (arr[i] + arr[j] + arr[k] === 0){
//                     count++;
//                     arr.splice(k, 1);
//                     arr.splice(j, 1);
//                     arr.splice(i, 1);
//                 }
//             }
//         }
// }
// alert(count + " пары чисел, дающих 0");