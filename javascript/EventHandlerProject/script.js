let ligth=document.getElementById("lighttheme");
let body=document.getElementById("body");

let isdark=false;

function toggle()
{
    if(isdark==false)
    {
        body.style.backgroundColor="black";
        body.style.color="white";
        ligth.innerText="Light Theme";
    }
    else{
        body.style.backgroundColor="white";
        body.style.color="black";
        ligth.innerText="Dark Theme";
    }
    isdark=!isdark;
}