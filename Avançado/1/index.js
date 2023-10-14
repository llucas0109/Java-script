//*Nao use var use let ou const
if(true){
  //O let so Estara disponivel dentro das chaves, ja o var estara disponivel dentro como fora ou eja poderiamos chamar de qualquer lugar.
  var exposta = 'exposta'; //var por fora e dentro
  let naoExposta = 'naoExposta'; //Somente dentro das chave{}
}
//console.log(exposta, naoExposta);
/*-1--------------------------------------------------------------
  const variavel = 10 //const naose altera
  variavel = 20
  console.log(variavel)
  // Entao Usamos const Para Arrays E objetos.!                   */
/*-2--------------------------------------------------------------
//Podemos sim adicionar valores em arrays do tipo const sem problemas.
const arr = [1,2,3]
arr.push(4); //push adiciona o numero 4 no array 
console.log(arr);
arr.pop(); //pop remove o ultimo elemento do array
console.log(arr)                                                  */
/*-3--------------------------------------------------------------
//Toda vez que colocamos chaves{} como valor estamos declarando um objeto.
//Podemos ter objetos dentro de objeto Veja a Propriedade carros. 
let pessoa = {nome: 'jemys',
  idade: 12,
  pais: 'Marrocos',
  profissao: 'marceneiro',
  sexo: 'masculino',
  pets: ['cachorro','gatto','passaro','tartaruga'], //um array como propriedade de um objeto.
  carros: {
    camaro: {cor:'azul', roda:'cromada', multas:10},
    skyline:{cor:'amarelo', roda:'Bigsmolk', multas:33}
  },
  andar: function(km){
    console.log((pessoa.nome+' andou a '+km+' por hora'))
  }
} //isso é um objeto. Damos um nome e : o seu valor da propriedade, Separamos tudo por virgulas.
console.log(pessoa.pets[3]); 
pessoa.pets[0] = 'guaxinim'
console.log(pessoa.pets[0])
console.log(pessoa.carros.camaro.cor)
console.log(pessoa.carros.skyline.multas)
console.log(pessoa.andar(150))                                    */
/*-4--------------------------------------------------------------
const obj = {a:1,b:2};
 obj.c = 3; //Adicionamos um parametro 'c' e com o valor de 3 a obj
 console.log(obj);
 delete obj.a; //Deleta obj.a
 console.log(obj)                                                 */
/*-5--------------------------------------------------------------
  //Expressao de funcao Quando se atribui um valor de funcao a uma variavel
  const minhaF = function(){ //Podemos usar somente a key function 
    console.log('alguma coisa')
  }
  //Declaracao de funcao Funcao normal
  function minhaF() {
    console.log('alguma coisa')
  }                                                               */
/*-6--------------------------------------------------------------
  //this aponta PARA DENTRO DO OBJETO ENSERIDO.
  //Um this somente apontara para o objeto global no caso do node e do chorme para o window
  const thisGlobal = () =>{
    console.log(this);
  }
  thisGlobal()                                                    */
/*-7--------------------------------------------------------------
  const str= 'Life Style' //Sao dez casas decimais 
  for(let s of str){ // Repetira dez vezes.  'of'  relaciona a uma string o numero de  de  's' .
    console.log(s.toUpperCase())
  }                                                               */
/*-2--------------------------------------------------------------*/
  class CAR{
    constructor(nome,ano){
      this.nome=nome // o this permitiu criar outa variavel com mesmo nome do parametro...
      this.ano=ano
    }
  }
/*-2--------------------------------------------------------------*/
