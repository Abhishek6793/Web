
let boxes=Array.from(document.getElementsByClassName("container"));
console.log(boxes);
for(let i=0;i<boxes.length;i++)
{
    if(i==0)
    {
        boxes[i].style.background="blue";
        continue;
    }
    if(i==8)
    {
        boxes[i].style.background="green";
        continue;
    }
    if(i==boxes.length-1)
    {
        boxes[i].style.background="palevioletred";
        continue;
    }
    if(i%2==1)
    {
        boxes[i].style.background="limegreen";

    }

    
}