const add=(a, b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
                return reject('Numbers must be non-negative.')
            }

            resolve(a+b)
        }, 2000)
    })
}

//Definizione di una funzione asincrona (keyword async): le funzioni asincrone restituiscono SEMPRE una promessa
const doWork=async()=>{
    //L'operatore await permette di scrivere codice più leggibile
    const sum=await add(1, 99)
    const sum2=await add(sum, 50)
    const sum3=await add(sum2, -3)
    return sum3
}

doWork().then((result)=>{
    console.log('Result:', result)
}).catch((e)=>{
    console.log('Error: ', e)
})