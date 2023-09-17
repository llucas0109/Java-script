function verificar(){
    var data = new Date() //Nao esqueça de abrir e fechar parenteses
    var ano= data.getFullYear()//pega full os 4 digitos do ano
    var fano =document.getElementById('txtando')
    var res= document.getElementById('res')
    if(fano.value.length==0 || fano.value>=ano){ //Perceba que colocamos fano com .value!!! isso é importante
        window.alert('verifique os dados e tente novamente')
    }else{
        var fsex=document.getElementsByName('radsex')
        var idade=ano - Number(fano.value) //Esta com value
        //Nao esqueça o    '='
        var Genero= ''
        /*Selecionamoso documente e criamos um img a posiçao dele se vai ficar no body ou dentro de uma div vai ser feita pelo 'appendchild'.*/
        var img=document.createElement('img') //Cria elemeto html
        //Se ele cria ele tambem passa ser ocaminho de aceso.
        /*Set atribuite da um atribudo dos tipo id class e de src e determina caminhos como link de uma imagem usando '',''
        primeiro odetermina qual yipo de  Atributo depois a confoguraçao desse atributo separando por virgula. O set atribuit tambem cria tags como visto acima*/
        img.setAttribute('id', 'foto') 
        if(fsex[0].checked){ //Preste atemçao tudo tem que estra convertido para poder ser modificado no js
            Genero='Homen'
            if(idade>0 && idade<=10){
                //Criança
                img.setAttribute('src', 'Imagem/Criançamas.jpg')
            }else if(idade<21){
                //Joven
                img.setAttribute('src','Imagem/jovemmas.jpg')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','Imagem/adultomas.jpg')
            }else{
                //Idoso
                img.setAttribute('src','einsten') }
            }else if(fsex[1].checked){
            Genero='Mulher'
            if(idade>0 && idade<=10){
                //Criança
                img.setAttribute('src','Imagem/criançafem.jpg')
            }else if(idade<21){
                //Joven
                img.setAttribute('src','Imagem/jovemfem.jpg')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','Imagem/adultofem.jpg')
            }else{
                //Idoso
                img.setAttribute('src','velha.jpg')
            }
         }
        //Nao esqueça o igual apos inner
        res.style.textAlign="center" //aspas duplas dai aspas simpes
        res.innerHTML=(`Detectamos alguem ${Genero} de ${idade} anos`)
        res.appendChild(img) //Adiciona Efetivamente um filho img a baixo de res na escala html Posiciona o que foi criado no js.
        img.style.width="200px"
        img.style.height="200px"
        img.style.display="block"
        img.style.margin="auto"
    }
}