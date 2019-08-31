//E' possibile un valore di default per un parametro della funzione
const greeter=(name='John Doe', age)=>{
    console.log('Hello ' + name)
}

greeter('Trevor')

greeter()