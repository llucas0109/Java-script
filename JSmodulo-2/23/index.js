function tabuada(){
    var num=document.getElementById('txtn')
    var tab=document.getElementById('seltab')
    if(num.value.length<=0){ //mais de 0 caracteres digitado
        window.alert('por favor digite um numero')
    }else{
        var n=Number(num.value)
        let c=1
        tab.innerHTML="" //Limpa lista antes de calcular
        while(c!=11){
            let itens=document.createElement("option") //Cria um elemeto do tipo option e armazena em itens
            itens.value=`tab${c}` //Adiciona um value para cada option
            itens.text = `${n} x ${c} = ${n*c}` //Adiciona Na parte de texto do option esse calculo
            tab.appendChild(itens) //Adiciona O elemento itens como filho de tab.
            c++
        }
    }
}