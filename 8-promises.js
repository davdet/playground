// const doWorkPromise=new Promise((resolve, reject)=>{
    
//     const a=0

//     setTimeout(()=>{
//         if(a===0){
//             resolve([7, 4, 1])
//         }else{
//             reject('Things went wrong.')
//         }
//     }, 2000)
// })

// //Il metodo 'then' si attiva solo se si ha un esito positivo della promessa (se viene restituito un resolve)
// doWorkPromise.then((result)=>{
//     console.log('Success!', result)
// //il metodo 'catch' si attiva solo se si ha un esito negativo della promessa (se viene restituito  un reject)
// }).catch((error)=>{
//     console.log('Error!', error)
// })

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


/************PROMISE CHAINING************/

const add=(a, b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        }, 2000)
    })
}

/************WITH PROMISE CHAINING************/
add(1, 1).then((sum)=>{
    console.log(sum)
    return add(sum, 4)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log(e)
})

/************WITHOUT PROMISE CHAINING************/
// add(1, 2).then((sum)=>{
//     console.log(sum)
    
//     add(sum, 5).then((sum2)=>{
//         console.log(sum2)
//     }).catch((e)=>{
//         console.log(e)
//     })
// }).catch((e)=>{
//     console.log(e)
// })