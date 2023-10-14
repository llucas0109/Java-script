// Objeto Literal
//Para Chamar uma funcao colocamos o nome e os parenteses.
//Metodos sao funçoes dentro de objetos
//Quando queremos selecionar uma propriedade que esta dentro do objeto e estamos dentro do objeto devemos usar a palavra this Obrigatoriamente 
//A diferenca de uma funcao anonima e uma function definida pela palavra function seria que quando usamos a palavra function definimos o this para dentro dessa funcao podendo acessar somente ela se quisesemos acessar propriedades das funçoes acima devemos usar funcoes flexa
const menu = {
    selector: '.principal', //propriedade
    active() { //Isso é um metodo UMa funcao dentro de um objeto.
      const menuElement = document.querySelector(this.selector); //O this referencia ao OBJETO, O this seria a mesma coisa que escrever 'menu'.
      menuElement.classList.add('active'); //add é um metodo 
    },
  };
  
  menu.selector; // ".principal";
  menu.active(); 
  menu.hasOwnProperty('class'); // hasOwnProperty Verifica se existe uma propriedade chamada class dentro do menu se sim true se nao false no caso false
  
  ['10', '20', '30'].map(Number); // map(number)converte tudo para numero [10, 20, 30];
'JavaScript'.toUpperCase(); // JAVASCRIPT

const body = document.querySelector('body');
body.classList.add('js'); // adiciona Uma class Chamada JS ao Body. da para remover tbm e outras coisas
/*--------------------------------------------------------*/
const upperName = function (name) {
    return name.toUpperCase();
  };
  upperName('André'); // ANDRÉ
  
  const lowerName = (name) => {
    return name.toLowerCase();
  };
  lowerName('Rafael'); // rafael
  
  const countLetters = (word) => word.length;
  countLetters('Rafael'); // 6
  
/*--------------------------------------------------------*/
function handleMouseMove(event) {
    const clientX = event.clientX; //event.clientX verifica o movimento do mouse em x
    const clientY = event.clientY;
    console.log(clientX, clientY);
  }
  
  function handleMouseMove(event) {
    const { clientX, clientY } = event; //Desistrutura(extrai) as Propriedadas clientX, clientY do Objeto event, tornando os uma constante que agora podem ser imprimidas em console.log(clientX, clientY);
    console.log(clientX, clientY);
  }
  
  // Essa e uma forma mais simples de desestruturar o parâmetro do objeto event.
  function handleMouseMove({ clientX, clientY }) { //Desistruturando ({ clientX, clientY }) de event.
    console.log(clientX, clientY);
  }
  
  document.documentElement.addEventListener('mousemove', handleMouseMove);
  
/*--------------------------------------------------------*/
//Desistruturaçao
const frutas = ['Banana', 'Uva'];
const [fruta1, fruta2] = frutas;//Desistruturando o array frutas para fruta1 e fruta2.
// fruta1 = banana
// fruta2 = Uva
const useQuadrado = [
    4,
    function (lado) {
      return 4 * lado;
    },
  ];
  const [lados, area] = useQuadrado;
  /* 
    lados = 4
    area = function (lado) {
    return 4 * lado;
  }
  */
  
/*--------------------------------------------------------*/
//O primeiro parametro 'empresa' é definido normalmente ja clients Sera um array. sendo assim podendo definir varios clients.
function showList(empresa, ...clients) { //Funcao de parametros Infinitos
    clients.forEach((client) => {
      console.log(client, empresa);
    });
  }
  
  showList('Google', 'André', 'Pedro', 'João');
  
/*--------------------------------------------------------*/
// Arrays
const numeros = [1, 4, 9, 2, 3, 6, 20];
//Math.max() ACeiTA somente numeros como parametro para saber qual é maior e nao arrays para opoder saber o maior valor de um array devemos fazer umespalhamento usando os '...' e em seguida o array, isso espalhara o array em numeros numais como se tivesse pomdo um em um. 
Math.max(...numeros); // retorna 20

// Transformar ArrayLike and Array
const items = document.querySelectorAll('li');

[...items].map((item) => (item.innerText = 'Teste')); //Coloca os items dentro de um array '[...items]' map faz com que Cada valor dentro do array items PASSE a ser O parametro DA Funcao Flexa O Map Sera executado de acordo com o numero de itens dentro do array '[...items]', E Map Retorna a cada elemento do array o valor de retorno Da Funçao flexa, que nao sera Visivel porquese trata deum alteracao feita No InnerText Ou seja , A alteraçao sera feita no innertext da li.    

// Objetos
const carro = {
  cor: 'azul',
  portas: 4,
  ano: 2020,
};

const cloneCarro = { ...carro }; //Faz Uma copia do objeto carro.
const carroEsportivo = { turbo: true, ...carro }; //Adicionando turbo e clonando o objeto ...carro

/*--------------------------------------------------------*/
/* <!-- Só funciona em servidor, seja local ou online
Não irá funcionar se você abrir o html direto -->
<script type="module" src="./script.js"></script> */
// quadrado.js
export function areaQuadrado(l) {
    return l * l;
  }
  
  export function perimetroQuadrado(l) {
    return 4 * l;
  }
// numeroAleatorio.js
export default function numeroAleatorio() {
    return Math.random();
  }
// script.js
import { areaQuadrado, perimetroQuadrado } from './quadrado.js';

areaQuadrado(4);
perimetroQuadrado(5);
numeroAleatorio();
    
/*--------------------------------------------------------*/
//Dados E apis externas escrever /Requisicoes para o servidor /promesas
// fetch Esta rodando o codigo de maneira Asincrona idenpendente do codigo
fetch('https://ranekapi.origamid.dev/json/api/produto') 
  //devemos converter io valores 
  .then((response) => response.json()) // '.then' ao caregar faça algo.
  .then((json) => {
    console.log(json);
  });

/*--------------------------------------------------------*/
async function fetchProdutos(url) {
    const response = await fetch(url); //await espera a fetch promessa terminar
    const json = await response.json();
    return json;
  }
  
  fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
  
/*--------------------------------------------------------*/
const precos = [
    'Crédito',
    'R$ 200',
    'R$ 400',
    'Contas Pagar',
    'R$ 300',
    'R$ 400',
    'Meus dados',
  ];
  
  // Retorna uma array nova, que contem os items em
  // que o retorno da função for verdadeiro
  const precosFiltro = precos.filter((preco) => preco.includes('R$'));//filter retorna um array undefine ao colocar includes ele vai procurar por R$ se encontrar ele retorna true para filter que vai armazenar no seu array os  varios valores com R$. 
  
  // Retorna uma nova array, modificada com o
  // retorno de cada item da função
  const precoNumeros = precosFiltro.map((preco) =>
    Number(preco.replace('R$ ', '')), //Replace retira os 'R$'. Precisamos usaros '' como segundo parametro
  );
  
/*--------------------------------------------------------*/
//Expressao ESTAO LOGO DEPOIS DO = .
const grupoA = 100;
const grupoB = 300;
const vencedor = grupoA > grupoB ? 'Grupo A Venceu' : 'Grupo B Venceu';

const numeros = [2, 3, 4, 5, 6];
const total = numeros.filter((numero) => numero > 4);

const active = true;
const button = active && 'Botão está ativo';

/*--------------------------------------------------------*/
// JSX
<button onClick={(event) => event.target.classList.add('active')}>
  Button
</button>

/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/