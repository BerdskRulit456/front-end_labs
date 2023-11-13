const createBtn = document.getElementById("submit")
const list = document.getElementById("list")
const input1 = document.getElementById("title")
const done = document.getElementById("done-link")
const notes = []
// const date = document.getElementById("date")
let counterToggle = 0



createBtn.onclick = function(){
    if(input1.value != 0){
        const newNote = {title: input1.value, complited: false, date: date.value, counter: false}
        notes.push(newNote)
        render()
        title.value = null
    }
    else{ return }
}

done.onclick = function(){
    // if (notes[index].complited){counterToggle++}
    // else if(notes[index].complited === false || type === "remove") { counterToggle--}
    console.log(counterToggle)
}

list.onclick = function(event){
    if(event.target.dataset.index ){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if(type === "toggle"){
            notes[index].complited = !notes[index].complited
        }
        
        if(type === "remove"){
            notes.splice(index,1)
        }
    }
    render()
}



function render(){
    list.innerHTML = ''
    if(notes.length === 0){ list.innerHTML = `<p>Нет элементов</p>`; counterToggle = 0}
    for (let i = 0; i <= notes.length-1; i++){
        list.insertAdjacentHTML('beforeend', getNotesTemplate(notes[i], i))
    }
}
render()


function getNotesTemplate(notes, index){
    for (let i = 0; i <= notes.length; i++){
        if(notes[index].complited){counterToggle++}
    }
    return `<li>
    <span class = "${notes.complited ? 'active' : ''}">${notes.title} ${notes.date}</span>
        <span><button id = "btn-sub" class="btn-${notes.complited ? 'warning' : 'sub'}" data-index = ${index} data-type = "toggle">&#10003;</button></span>
        <span><button id = "btn-res" class="btn-res" data-index = ${index} data-type = "remove">&#10006;</button></span>
    </li>`
}






















