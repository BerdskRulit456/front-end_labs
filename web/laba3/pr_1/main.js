let admin, name;
name = 'John';
admin = name;
alert(admin)

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
console.log(+a + +b); 

let step;
for (step = 1; step<=10; step++){
    if (step % 2 == 0){
        console.log("Число", step)
    }
}

let i = 0;
while(i < 3){
    i++;
    alert( `number ${i}!` );    
}

let number = prompt("Введите число больше 100");
while(number < 100){
    if(number == null){
        break;
    }
    else{
        number = prompt("Введите число больше 100");
    }
}
if(number >= 100){
    alert("Победа");
}

let n = prompt();
let count = 0;

for (let p = 1; p <= n; p++){
    for(let k = 1; k <= n; k++){
        if (p % k == 0){
            count++;
        }
    }
    if(count == 2){
        console.log(p);
    }
    count = 0;
}