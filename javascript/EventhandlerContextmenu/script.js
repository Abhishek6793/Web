let divelem=document.getElementById("divid");
let ulelem=document.getElementById("listid");

divelem.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    console.log(e);
    
    ulelem.style.top=`${e.clientY}px`; //top se kitna neeche
    ulelem.style.left=`${e.clientX}px`; //left se kitna right
    ulelem.style.display="block";  //display the ul
    
});