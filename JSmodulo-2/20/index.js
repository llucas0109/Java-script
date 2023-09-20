function clickou(){
    var img=document.getElementById('img')
    var ini=window.document.getElementById('inicio')
    var fim=window.document.getElementById('ifinal')
    var passos=window.document.getElementById('ipasos')
    var n1=Number(ini.value) //O ini Precisa ser em id e precisa de Number(ini.value); object HTMLInputElement Acho q indica que queremos mostrar um objeto
    var n2=Number(fim.value)
    var n3=Number(passos.value) 
    var conc = ''
    if(n3<=0){
        window.alert('Passo invalido considerando passo 1.')
        n3=1
    }
    if(n1 <=0 || n2 <=0 || n3 <=0 ){
        img.innerHTML=(`NAO É POSSIVEL CONTAR!`)
    }else{
        for(/*Para criar uma variavel*/;n1<=n2;n1+=n3){
            if(n1==1){
                conc+=(` ${n1}`)  
            }else{
            conc+=(`. ${n1}`)
            }
    }
    img.inner
}
}


