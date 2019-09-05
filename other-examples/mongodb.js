//CRUD operations: Create, Read, Update, Delete

// const mongodb=require('mongodb')
// //MongoClient da l'accesso alle funzioni necessarie per connettersi al db e effettuare le operazioni CRUD.
// const MongoClient=mongodb.MongoClient
// //ObjectID permette di lavorare con l'ID di un oggetto.
// const ObjectID=mongodb.ObjectID

//Versione alternativa dei tre comandi precedenti, utilizzando la destrutturazione dell'oggetto 'mongodb'.
const { MongoClient, ObjectID } = require('mongodb')

//Definizione dell'URL di connessione al database.
const connectionURL = 'mongodb://127.0.0.1:27017'
//Definizione del nome del database (una volta definito, MongoDB lo creerà automaticamente se non già presente).
const databaseName = 'task-manager'

// //Creazione di una variabile che chiama la funzione ObjectID (proprietà di mongodb) per creare un nuovo ID.
// const id=new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

//Funzione per connettersi al db: il primo argomento è l'indirizzo di connessione al db, il secondo è necessario per parsare correttamente l'url, il terzo è una funzione di callback che verrà chiamata una volta che siamo effettivamente connessi al db. Quest'ultima restituisce un errore (error) se non è stato possibile effettuare la connessione al db o un client (client) nel caso la connessione abbia funzionato. 
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    //Creazione di un riferimento al db che si intende manipolare
    const db = client.db(databaseName)

    ///************DELETE************/
    // //deleteMany ha come argomento un oggetto che contiene i criteri di ricerca.
    // db.collection('users').deleteMany({
    //     age: 35
    // }).then((result)=>{
    //     console.log(result.deletedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // //CHALLENGE TIME
    // db.collection('tasks').deleteOne({
    //     description: 'Deploy weather app'
    // }).then((result)=>{
    //     console.log(result.deletedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    ///************UPDATE************/
    // //Il primo argomento di updateOne è un oggetto che contiene i criteri di ricerca, il secondo argomento è un oggetto che contiene i campi da modificare.
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5d67f1884a0c337cc1cad6d3")
    // },
    // {
    //     $inc:{
    //         age: -1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // //CHALLENGE TIME
    // db.collection('tasks').updateMany({
    //     completed: false
    // },
    // {
    //     $set:{
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    ///************READ************/
    // //Identificazione della collezione che si intende manipolare e lettura di un documento da tale collezione. Il primo argomento di findOne permette di specificare il criterio di ricerca (in questo caso la ricerca verrà effettuata sul campo _id del documento nella collezione user) mentre il secondo è una funzione di callback che restituisce un errore (error) nel caso non sia stato possibile reperire il documento, oppure restituisce il dato cercato (user).
    // db.collection('users').findOne({_id: new ObjectID("5d680de5188dde0a8cb76cbf")}, (error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch.')
    //     }

    //     console.log(user)
    // })

    //find restituisce un cursore sul quale si potrà poi operare andando ad utilizzare diversi metodi.
    // db.collection('users').find({age: 35}).toArray((error, users)=>{
    //     if(error){
    //         return console.log('Unable to fetch.')
    //     }

    //     console.log(users)
    // })

    // db.collection('users').find({age: 35}).count((error, count)=>{
    //     if(error){
    //         return console.log('Unable to fetch.')
    //     }

    //     console.log(count)
    // })

    // //CHALLENGE TIME
    // db.collection('tasks').findOne({_id: new ObjectID("5d67f81ff2718d7e6940e934")}, (error, task)=>{
    //     if(error){
    //         return console.log('Unable to fetch.')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(tasks)
    // })


    // /************CREATE************/
    // //Identificazione della collezione che si intende manipolare e inserimento di un documento in tale collezione.
    // db.collection('users').insertOne({
    //     name: 'Marc',
    //     age: 32
    // //Funzione di callback utile per verificare se l'opzione di inserimento è andata a buon fine: restituisce error se l'inserimento ha incontrato errori, altrimenti stampa un array (ops) di tutti gli elementi inseriti.
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert user.')
    //     }

    //     console.log(result.ops)
    // })

    // //Funzionamento analogo alla precedente, solo che al posto che inserire un solo documento ne inserisce diversi.
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Trevor',
    //         age: 27
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert users.')
    //     }

    //     console.log(result.ops)
    // })

    // //CHALLENGE TIME
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Fix bicycle',
    //         completed: false
    //     },
    //     {
    //         description: 'Prepare dinner',
    //         completed: false
    //     },
    //     {
    //         description: 'Deploy weather app',
    //         completed: true
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert tasks.')
    //     }

    //     console.log(result.ops)
    // })
})