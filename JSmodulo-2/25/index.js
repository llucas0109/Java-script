// % Vai dar o resto da divisao
function parimpar(n){
    if(n%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}
var c = 19
var res = parimpar(c)
console.log(res)
console.log('<-------------------------------------->')
//<-------------------------------------------------------->

function soma(n1=0,n2=0){//Quando definimos n1=0 e n2=0 definomos valores padrao caso naoseja colocado um na chamada. 
    return n1+n2 //return e para retornar .
}
console.log(soma(3,7))
console.log('<-------------------------------------->')
//<-------------------------------------------------------->

v=function(f){ //Uma funçao dentro de uma variavel
    return f*3
}
console.log(v(3)) //damo v() e dentrodos parentes o valor que vai ser aplicado a funçao
