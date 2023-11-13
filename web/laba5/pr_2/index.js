const chalk = require("chalk")
// Задача 1
// const arr = [1, 6, -2, 22, 13];
// const min = (values) => values.reduce((x, y) => Math.min(x, y));
// console.log(chalk.blue(min(arr))); 
// const max = (values) => values.reduce((x, y) => Math.max(x, y));
// console.log(chalk.blue(max(arr))); 

//Задача 2 
// const str = prompt()
// console.log(chalk.blue(str))
// const reverse = str.split('').reverse().join('')
// console.log(chalk.blue(reverse))


//Задача 3
// const arr = [3, 5, 8, 13, 21, 42];
// const chet = arr.filter(number => {return number % 2 === 0})
// console.log(chet)
// chet.forEach((item) => {console.log(chalk.blue(Math.sqrt(item)))})

// Задача 4
// var annagram = ["Ьлун", "нуль"];
// var lower = annagram.map(e => e.toLowerCase());
// const check = lower[0].split('').reverse().join('')
// if (lower[1] === check){console.log(chalk.blue(`Слова ${lower[0]} и ${lower[1]} являются анаграммами `))}
// else{console.log(chalk.blue(`Слова ${lower[0]} и ${lower[1]} не являются анаграммами `))}

// Задача 5
// var str = "Не гни папин ген"
// str = str.toLowerCase();
// checkstr = str.replace(/\s/g, "")
// console.log(checkstr)
// var check = str.split('').reverse().join('')
// check = check.replace(/\s/g, "")
// console.log(check)
// if (checkstr === check){
//     console.log(chalk.blue(`Строка ${str} является палиндромом`))
// }
// else{
//     console.log(chalk.blue(`Строка ${str} не является палиндромом`))
// }

// Задача 6
// const elementary = [0, 1]
// function fibonacci(){
//     const newItem = elementary[elementary.length-1] + elementary[elementary.length-2] 
//     elementary.push(newItem)
// }
// let timer = setInterval(() => {fibonacci(elementary); console.log(elementary)}, 1000);

// Задача 8
// const arr1 = [3, 5, 8, 13, 21, 42]
// const arr2 = [1, 6, -1, 22, 13, 21]
// let counter = 0

// for(let i = 0; i < arr1.length; i++){
//     for(let k = 0; k < arr2.length; k++){
//         if(arr1[i] === arr2[k]){
//             counter++
//             // console.log(arr1[i], arr2[k])
//         }
//     }
// }
// console.log(chalk.blue(counter))

// Задача 9
// const plus = document.getElementById('plus')
// const minus = document.getElementById('minus')
// const enter = document.getElementById('enter')
// let number = 0
// plus.onclick = function(){
//     number++
//     enter.innerHTML = number 
// }

// minus.onclick = function(){
//     number--
//     enter.innerHTML = number 
// }

// function render(number){
//     return `<button id = "minus">-</button><h2>${number}</h2><button id = "plus">+</button>`
// }

// Задача 10
// let i;
// for(let i = 1; i <= 3; i++) { 
    // setTimeout(() => console.log(chalk.blue(i)), 1000); 
// } 