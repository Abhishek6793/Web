let pressing=document.getElementById("keyboard");

let keycode=document.getElementById("ans");
let key=document.getElementById("ans1");


pressing.addEventListener("keyup",(e)=>{
    keycode.innerText=e.keyCode;
    key.innerText=e.key;
    console.log(e);
});