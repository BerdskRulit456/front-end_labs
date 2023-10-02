// alert("Задача 1.1")
// function* randomizer(){
//     while(true){
//         i = Math.round(Math.random() * (+max - +min) + +min);
//         yield i
//     }
    
// }
// let min = prompt("Введите число с которого начинатся диапозон")
// let max = prompt("Введите число конца диапозона")
// const a = randomizer(min,max)
// let b = prompt("Сколько чисел вы хотите получить?")
// for (let i = 0; i < b; i++){
//     alert(a.next().value)
// }

// alert("Задача 1.2 (Числа Фибоначчи)")
// let arr = [0,1]
// let a = prompt("Введите число")
// for (let i = 2; i <= a; i++){
//     arr[i] = arr[i-1] + arr[i-2]
// }
// console.log(arr[a])

// alert("Задача 1.3")
// function* simple(count, n = 1000){
//     for (let p = 1; p <= n; p++){
//         for(let k = 1; k <= n; k++){
//             if (p % k == 0){
//                 count++;
//             }
//         }
//         if(count == 2){
//             yield p;
//         }
//         count = 0;
//     }
// }

// let count = 0;
// const a = simple()
// let b = prompt("Сколько чисел вы хотите получить?")
// for (let i = 0; i < b; i++){
//     alert(a.next().value)
// }

// alert("Задача 2.1")
// let str = "The neighbors cat even walks on the street in winter."
// let b =prompt("Введите искомый символ или слово")
// let count = 0
// i = str.split(' ')
// const map = new Map()
// let a = i.map(item => {
//     if (item == b){
//         count++
//     }
// })

// let c = [...str]
// a = c.map(item => {
//     if (item == b){
//         count++
//     }
// })
// alert(count)

// alert("Задача 2.2")
// function getPrime(kaka){

// let n = kaka;
// n = BigInt(n)
// var arr = [];
// var count = 0;

// for (var p = 1; p <= n*10n; p++){
// for(var k = 1; k <= n*10n; k++){
// if (p % k == 0){
// count++;
// }
// }
// if(count == 2){
// arr.push(p);
// }
// count = 0;
// }
// var chislo = arr[n]
// console.log(chislo)
// }
// var kaka = prompt()

// getPrime(kaka)
