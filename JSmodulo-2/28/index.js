var lista=[] //indefinido

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function append(){
var num=document.getElementById('icontagem')
var valores=document.getElementById('list')
var n=Number(num.value)

if(isNumber(num.value) && !inLista(num.value,lista)){

}

if(n>100 || lista.indexOf(n)==n || num.value.length <= 0){
    window.alert('Numero invalido ou ja encontrado na lista')
}else{
lista.push(n)
var item=document.createElement('option') //Elemento e que faz parte de algo atributo e tipo o pai do elemento
item.text=`Valor ${n} adicionado.`
valores.appendChild(item)
}
}
function contador(){
    var text=document.getElementById('conteudo')
    var quant=lista.length
    var total = 0 //Sempre de valor a variaveis
    for(let c=0;c<quant;c++){
            var soma = lista[c] 
            total += soma
            /* Tentei converter um valor dentro da lista em number mas nao funcionou pq ja era numero acho.*/
        } 
    var media = total/quant
    function comparenumber(a, b) { //Funça que vai dentro de sort para ir do menor na posiçao 0 para o maior
        return a - b 
    }
    text.innerHTML=''
    text.innerHTML+=`<p>Ao Todo Temos ${quant} Numeros guardados</p>`
    lista.sort(comparenumber)
    /*Temos que criar uma funçao qu faz a comparaçao entre dois elementos para que retorne a mtriz de menor para maior*/
    text.innerHTML+=`<p>O maior valor é ${lista[(quant-1)]}</p>`//+=
    text.innerHTML+=`<p>O menor valor é ${lista[0]}</p>`
    text.innerHTML+=`<p>A soma dos valores é ${total}</p>` 
    text.innerHTML+=`<p>Media dos valores digitados é ${media}</p>`
}//Nan 'Not a number'