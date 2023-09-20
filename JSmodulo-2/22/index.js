function contar(){
    let ini=document.getElementById('txti') //Coloca o nome do que faz e um abreviaçao txti
    let fim=document.getElementById('txtf')
    let passo=document.getElementById('txtp')
    let res=document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){//length é o comprimento . ou se ja quantos caracteres e value e de valor acho.
        res.innerHTML="Impossivel contar"
        window.alert('Falta dados')
    }else{
        res.innerHTML=(`Contando... <br>`)
        let i = Number(ini.value) //Converte e manda para i como um numero
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('passo Invalido Considerando passo 1')
            p=1
        }
        //Contagem Crescente
        if(i<f){
        for(let c=i;c<=f;c+=p){
            res.innerHTML +=(`${c} \u{1F449}`) //Formataçao para emoji \u{}
        } //Contagem Decrescente
         }else{
            for(c=i;c >=f;c-=p){
                res.innerHTML+=(` ${c} \u{1F449}`)
            }   
         }
         res.innerHTML+=(`\u{1f3c1}`)
    
    }
}