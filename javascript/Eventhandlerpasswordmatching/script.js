let password=document.getElementById("password1");
let confirmPassword=document.getElementById("password2");
let form=document.getElementById("form");

confirmPassword.addEventListener("change",()=>{
    if(password.value!=confirmPassword.value)
    {
        alert("Password do not match");
        confirmPassword.value="";
    }
    else{
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            alert("Form Submitted Successfully");
        });
    }
 })
