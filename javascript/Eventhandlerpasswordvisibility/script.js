let password=document.getElementById("password1");
let toggleButton=document.getElementById("check");

// let checked=false;
// toggleButton.addEventListener("click",()=>{
//     if(checked==false)
//     {
//         password.type="text";
//         checked=true;
        
//     }
//     else{
//         password.type="password";
//         checked=false;

//     }
// })

toggleButton.addEventListener("change",()=>{
    if(toggleButton.checked==true)   //checked is a property of checkbox
    {  password.type="text";}
    else{
        password.type="password";
    }
})  
    