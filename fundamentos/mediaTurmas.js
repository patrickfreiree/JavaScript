const sala1 = [8,6,5,2.8,8,9]
const sala2 = [10,6,8,4.8,7,9]
const sala3 = [7,5,9,8,5,7]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((antigo, atual) => 
    atual + antigo, 0)
    return somaDasNotas/notasDaSala.length
 }

 console.log (`Média da sala 1: ${mediaSala(sala1)}. \n Média da sala 2: ${mediaSala(sala2)}. \n Média da sala 3: ${mediaSala(sala3)}. `)
 
const notas = sala1+sala2+sala3

const media = notas.reduce((a , b) => a+b, 0) / notas.length
console.log(notas)
