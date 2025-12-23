function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched")
        },1000);
    })
}

function fetchTransfromData(Data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${Data} and Transformed`);
        },1000);
    })
}

function displayData(TransformedData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${TransformedData} and Displayed`);
        },1000);    
    });
}

fetchData().then((data)=>{
    console.log(data);
    return fetchTransfromData(data);
}).then((transformeddata)=>{
    return displayData(transformeddata);
})
.then((finaldata)=>{
    console.log(finaldata);
}).catch((error)=>{
    console.error("Error:",error);
});

