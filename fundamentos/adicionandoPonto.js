// map retorna na arraw um resultado.

const notas = [10,5,8,8]
                                                    //a ordem altera. ele passa e adiciona. 
const atualizaNotas = notas.map( nota => nota == 10 ?  nota : ++nota)

console.log(atualizaNotas)
