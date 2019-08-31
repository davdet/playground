//OBJECT PROPERTY SHORTHAND

const name='Andrew'
const userAge=27

const user={
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

//OBJECT DESTRUCTURING

const product={
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

//Stand-alone destructuring
const{label:productLabel, stock, rating=5}=product
console.log(productLabel)
console.log(stock)
console.log(rating)

//In-line destructuring
//{label, stock=0}={} serve per definire un valore di default al parametro che viene passato alla funzione in quanto, essendo questo parametro un oggetto destrutturato, se non viene passato la funzione non può sapere a quale oggetto queste proprietà si riferiscono, generando quindi un errore JS.
const transaction=(type, {label, stock=0}={})=>{
    console.log(type)
    console.log(label)
    console.log(stock)
}

transaction('order', product)