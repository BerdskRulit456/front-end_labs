// Задача 1.1
// function counter(n){
//     let timeId = setInterval(() => console.log(n--), 1000)
//     setTimeout(() => { clearInterval(timeId)}, 6000)
// }

// let n = prompt()
// counter(n)

// Задача 1.2
// let pause_clc = document.getElementById("pause")
// let start_clc = document.getElementById("start")
// let stop_clc = document.getElementById("stop-btn")

// let n = prompt();
// var isPaused = false;
// let timeId = setInterval(function(){if(!isPaused){console.log(n--)}}, 1000);

// function createCounter(){
//     pause_clc.onclick =  function pause(){isPaused = true; alert("Таймер на паузе")}
//     start_clc.onclick = function start(){isPaused = false}
//     stop_clc.onclick = function stop(){clearInterval(timeId); alert("Таймер остановлен")}

// }
// createCounter()

// Задача 2.2
// async function getFirstRepoName(username) {
//     const url = `https://api.github.com/users/${username}` 
//     const userData = await fetch(url)
//     const data = await userData.json()
//     const reposUrl = await fetch(data.repos_url)
//     const repoData = await reposUrl.json()
//     console.log(repoData[0].name)
// }

// username = prompt()
// getFirstRepoName(username)

// Задача 3.1-2
// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }

// async function loadJson(url) {
//     const urlUser = await fetch(url)
//     if(urlUser.status == 200){
//         return urlUser.json()
//     }
//     else{
//         throw new HttpError(urlUser);
//     }
    
// }

// async function getGithubUser() {
//     let name = prompt("Введите логин?", "iliakan");
//     try{
//         const data = await loadJson(`https://api.github.com/users/${name}`)
//         alert(`Полное имя: ${data.name}.`)
//     }
//     catch (err){
//         if (err instanceof HttpError && err.response.status == 404) {
//             alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//             return demoGithubUser();
//         } 
//         else {
//             throw err;
//         }
//     }
// }

// getGithubUser();