function carregar(){
var msg= document.getElementById('msg') 
var img= document.getElementById('img')
//var data= new Date()
//var hora= data.getHours()
 var hora= 19
 //TODA ALTERAÇAO FEITA TEM ASPAS DAI VEM URL
msg.innerHTML=`Agora sao ${hora} Horas `
if(hora >= 0 && hora <=12){
    //Bom dia
    //TODA ALTERAÇAO FEITA TEM ASPAS DAI VEM URL
    img.style.backgroundImage= "url('pexels-valeriia-miller-2587054.jpg')"
    document.body.style.background="lightblue"
}else if(hora>=13 && hora <=18){
    //Boa tarde
    //TODA ALTERAÇAO FEITA TEM ASPAS DAI VEM URL
    img.style.backgroundImage = "url('pexels-dianne-226407.jpg')"
    document.body.style.background="lightgreen"
}else{
    //boa noite
    //TODA ALTERAÇAO FEITA TEM ASPAS DAI VEM URL
    img.style.backgroundImage = "url('pexels-mark-1080953.jpg')"
    document.body.style.background="lightgray"
}
}  