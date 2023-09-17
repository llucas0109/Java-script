/*Condiçao Multipla
switch(expressão){
    case valor 1:
        break
    case valor 2:
        break
    case valor 3:
        break         
    default:{}
        Caso Tudo de errado ele executa o default. O break é obrigatorio em cada 'case'!

        A Ordem de execuçao é seguinte:
        ele testa a espressao dentro de switch E Determina qual case vai ser executado ate chegar no break, depois de ter executado o case correto ele sai do switch. 
}
*/
var agora = new Date()
var diase = agora.getDay() //Parenteses no final!!
/*
0 = Domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
console.log(diase)

switch(diase){
    case 0:
        console.log('Domingo')
    break
    case 1:
        console.log('segunda')
    break
    case 2:
        console.log('terça')
    break
    case 3:
        console.log('quarta')
    break
    case 4:
        console.log('quinta')
    break
    case 5:
        console.log('sexta')
    break
    case 6: //Plha os dois pontos no final de cada case
        console.log('sabado')
    break  //Break e obrigatorio
    default:
        console.log('[ERRO] Dia invalido')
        break //Aqui tambem pode ser retirado so mente se nao tem ais comandos embaixo
}
//switch Funciona comcaracteres e numeros, o ideial para testar dados Pontuais.