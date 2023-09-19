let admin, name;
name = 'John';
admin = name;
alert(admin)

var a = prompt("Первое число?", 1);
var b = prompt("Второе число?", 2);
console.log(+a + +b); 

var step;
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

var number = prompt("Введите число больше 100");
document.addEventListener('keydown', function(e){}) 
    for (+number; +number < 100;){
        if(e.key === 'Escape'){
            break;
        }
        else{
            var number = prompt("Введите число больше 100");
        }
    }
alert("победа");

var n = prompt();
var count = 0;

for (var p = 1; p <= n; p++){
    for(var k = 1; k <= n; k++){
        if (p % k == 0){
            count++;
        }
    }
    if(count == 2){
        console.log(p);
    }
    count = 0;
}