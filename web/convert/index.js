// console.log( d.toString(2) );
let input = document.getElementById('input')
let combobox = document.getElementById('combobox')
let output = document.getElementById('output')
let output_text = document.getElementById('output-text')

combobox.onclick = function(){
    output_text.textContent = `В ${combobox.value}-чной системе:`
}


input.addEventListener('keyup', function(){
    var input_value = Number(input.value)
    switch(combobox.value){
        case "2":
            output.value = input_value.toString(2);
            break;
        case "4":
            output.value = input_value.toString(4);
            break;
        case "8":
            output.value = input_value.toString(8);
            break;
        case "16":
            output.value = input_value.toString(16);
            break;
    }
})

output.addEventListener('keyup', function(){
    var output_value = Number(output.value)
    switch(combobox.value){
        case "2":
            input.value = parseInt(output_value, 2)
            break;
        case "4":
            input.value = parseInt(output_value, 4)
            break;
        case "8":
            input.value = parseInt(output_value, 8)
            break;
        case "16":
            input.value = parseInt(output_value, 16)
            break;
    }
})