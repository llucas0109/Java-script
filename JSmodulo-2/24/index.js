/*Cada array ou cada variavel composta e uma variavel que tem arios elementos cada elemento e composto por seu valor e por umachave de identificaçao */
//num.length
let num=[7,4,7,3]
console.log(num)
num.sort() //Coloca em ordem de menor em 0 para maior
num.push(1) //Adiciona no final da variavel composta.
console.log(num)
console.log(`Nosso valor é ${num.length}`)
console.log(`primeiro valor é ${num[1]}`)

for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}
var busca=num.indexOf(4) //Procura se tem o valor pedido dentro do vetor e retorna a posiçao
//Menos um -1 em java script significa que ele pesquisou e nao encontrou
console.log(busca)


