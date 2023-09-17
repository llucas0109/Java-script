var agora = new Date()
var hora = agora.getHours //pegamos a hora da parapegar mes ano dia segundo e por ai vai. e hora do deipositivo q esta rodando.
//Um bloco e todo abre fecha chaves 
if(hora<12){
    console.log(`Bom dia`)
}else if(hora<=18){
    console.log('Boa Tarde')
}else{
    console.log('Boa noite')
}