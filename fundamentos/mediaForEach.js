const notas = [10,5,7,9]

let somaNotas = 0

//csllbsck
notas.forEach( nota => {
    somaNotas += nota
})

// ou 
notas.forEach(function(nota){
    somaNotas += nota
})

let media = somaNotas / notas.length

console.log(media)
