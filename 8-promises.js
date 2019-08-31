const doWorkPromise=new Promise((resolve, reject)=>{
    
    const a=0

    setTimeout(()=>{
        if(a===0){
            resolve([7, 4, 1])
        }else{
            reject('Things went wrong.')
        }
    }, 2000)
})

//Il metodo 'then' si attiva solo se si ha un esito positivo della promessa (se viene restituito un resolve)
doWorkPromise.then((result)=>{
    console.log('Success!', result)
//il metodo 'catch' si attiva solo se si ha un esito negativo della promessa (se viene restituito  un reject)
}).catch((error)=>{
    console.log('Error!', error)
})

//
//                           fulfilled (resolve)
//                          /
// Promise --- pending --->
//                          \
//                           rejected (reject)
//



// /************EQUIVALENTE DI QUANTO SOPRA MA CON LE CALLBACK************/
// const doWorkCallback=(callback)=>{

//     const a=0

//     setTimeout(()=>{
//         if(a===0){
//             callback(undefined, [1, 4, 7])
//         }else{
//             callback('This is my error!', undefined)
//         }        
//     }, 2000)
// }

// doWorkCallback((error, result)=>{
//     if(error){
//         return console.log(error)
//     }

//     console.log(result)
// })