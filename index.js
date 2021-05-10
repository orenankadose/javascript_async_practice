//DOM
const $btn = document.getElementById("addBtn");
const $list = document.getElementById("list");

//メソッド
function addList(user,index,array){
    const list = document.createElement("li");
    list.innerText = user.name;
    $list.appendChild(list);
}

async function getUsers(){
    const res =  await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
}

async function listUser(){
    const users = await getUsers();
    users.forEach(addList);
}

// イベント
addEventListener("load",listUser);
$btn.addEventListener("click", listUser);