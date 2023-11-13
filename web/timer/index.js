let count = document.getElementById('count-sec')
let start = document.getElementById('start')
let output_text = document.getElementById('output-text')
let timeOver = document.getElementById('return')

start.onclick = function(){
    timeOver.innerHTML = ``
    var count_int = Number(count.value)
    var count_res = count_int
    output_text.textContent = `Осталось секунд: ${count_int}`
    let timer = setInterval(() => {count_int--; output_text.textContent = `Осталось секунд: ${count_int}`}, 1000);
    setTimeout(() => { clearInterval(timer);timeOver.innerHTML = `<p>ВРМЕНЯ ИСТЕКЛО</p>`;}, count_res*1000);
}
