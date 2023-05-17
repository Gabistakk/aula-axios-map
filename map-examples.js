const frutas = ['banana', 'maça', 'laranja']

// com for
console.log("LOOP USANDO FOR: ")
for(let index = 0; index < frutas.length; index++){
    console.log(index, frutas[index])
}

console.log('-----------------------------')

console.log('LOOP USANDO MAP:')
frutas.map(function callback(fruta, index){
    console.log(index, fruta)
})
