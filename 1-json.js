const fs = require('fs')

//Carica 1-json.json e ne fa il parsing
const dataBuffer = fs.readFileSync('1-json.json')
const dataString = dataBuffer.toString()
const parsedData = JSON.parse(dataString)

//Cambia valore alle proprietà dei dati parsati
parsedData.name = 'Piorch'
parsedData.age = 35

//Converte i dati parsati in stringa e li salva in 1-json.json
const toString = JSON.stringify(parsedData)
fs.writeFileSync('1-json.json', toString)