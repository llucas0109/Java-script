var idade = 68
console.log(`voce tem ${idade} anos de idade`)
if(idade<16){
console.log('Nao vota')//console.log joga no log console
}else if(idade<=18 || idade>65){ //Colocando else if juntos retira chaves do else
        console.log('Voto opcional')
    }else{
        console.log('Vota')
    }
    /*Se tivesse mais um comando aqui ele executaria tbm*/
