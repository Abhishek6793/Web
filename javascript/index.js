// setInterval(() => {
//     console.log("setTimeout-1")
// },1000);

// setInterval(()=>{
//     console.log("setTimeout-2")
// },100);
// console.log("Synchronous log");

// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },500);     
// });

let obj={name:'A'};
let copy;
copy=obj;
copy.name='B';
console.log(obj.name); 