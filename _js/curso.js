/* Sobre javascript */

/* Codigo pra exemplo 

    <div class="transportes">
         <div class="carros">
            <div id="modelos">
                <p>Versa</p>
                <p>sentra</p>
                <p>corsa</p>
            </div>
        </div>
    </div>
*/



/* getElementById = Pega o elemento de uma id especifica, retorna um array*/

document.getElementById("teste")

/* getElementsByClassName = Pega elementos de todas as classe com o nome citado, retorna um array*/

document.getElementsByClassName("row")

/* getElementsByTagName = Pega todos os elementos da tag name citada, retorna um array*/

document.getElementsByTagName("body")

/* querySelector= Pode substituir os gets acima, mas nesse caso só retorna o primeiro elemento chamado */

document.querySelector("#carros") /*para ids*/
document.querySelector(".row") /*para classes */
document.querySelector("body") /* para tag */

/* querySelectorAll= Chama todos os elementos a class, id ou tag, nesse caso ele usa um array */

document.querySelectorAll("body")

/* createElement= Cria uma nova tag, classe ou id */

document.createElement("div") /*cria uma div */

/* appendChild= coloca um elemento dentro de outro */

var p = document.createElement("p"); /* cria um elemento p e atribui a uma variavel p*/
p.innerHTML = "versa"; /*atribui valor a variavel p*/

document.querySelector(".carros").appendChild(p); /* chama a classe teste e coloca o elemento p dentro da classe teste */

/* removeChild= remove um elemento dentro de outro */

document.querySelector(".carros").removeChild(p); /* removeu o elemento p da classe teste */

/* parentNode= serve para encontra o elemento pai de um elemento */

document.querySelector(".modelos").parentNode; /* nessa caso ele ira retornar a classe carros, q é o pai de modelos*/
document.querySelector(".modelos").parentNode.parentNode; /*retorna transportes */


/*  --------------TIPOS DE VARIAVEIS -------------*/

var teste = "teste" /* maneira como é criado uma variavel */
let teste = teste /* let serve para criar variaveis locais */
const teste = true /* cria uma variavel que nao pode ser alterada */

/*  --------------TIPOS DE DADOS -------------*/

var string = "letras"; /* Tudo que está entre aspas */
var numero = 5;/* numeros */
var boolean = true; /* recebe valor verdadeiro ou falso */
var nulo = null; /* recebe valor vazio */
var indefinido = undefined /* valor nao definido ou nao existe*/

/* Pode ser usado o //typeof// para descobrir o tipo do dado */

typeof "teste"; /* retorna string */

/*  --------------   OBJETOS  -------------*/

var carro = {
    placa = "ABC-1234",
    marca = "Hyundai",
    modelo = "tucson",

    opcionais = {
        cambio = 'automatico',
        combustivel = 'flex',
    }

}

/*  --------------   ARRAYS  -------------*/

var carro = [
    placa = "ABC-1234",
    marca = "Hyundai",
    modelo = "tucson",

    opcionais = [
        cambio = 'automatico',
        combustivel = 'flex',
    ]
]

var carro = [1, 2 ,[3,4]];
console.log(carro[2][0]); /* retornara o valor 3, que corresponde ao valor na posição 0, da array dentro da array*/

carro.push(5); /*console.log(carro); Array(4) [ 1, 2, (2) […], 5 ]*/

carro[2].push(6)

console.log(carro);
​/* resultado de por um push do numero 6, dentro da array na posição 2)
0: 1
​
1: 2
​
2: Array(3) [ 3, 4, 6 ]
​
3: 5
*/
​
carro[2].pop(6); /*utiliza-se para tirar o push colocado anteriormente*/

carro.pop(); /*vazio ele removeria o item 5 que foi colocado no final*/
carro.shift(); /*remove o primeiro item da array */
carro.unshift(); /* coloca um elemento na primeira posição do array*/

/*  --------------   CONDICIONAIS  -------------*/

/*Pode ser usado === para comparar se os parametros possuem o mesmo tipo de dado, e pode ser 
usado !== para saber se eles são diferentes */

/* pode se usar o maior que >= ou menor que <=*/

/* && corresponde ao "and" e o || ao "or"*/

if (carro.placa == "ABC-1234") {
    let certo = true;
    console.log(certo)
} else if (carro.placa != "ABC-1245") {
    let certo = true;
    console.log(certo)
} else {
    let certo = false;
    console.log(certo)
}

switch (carro.placa) {
    case "ABC-1234":
        console.log("Ta certo");
    case "outro":
        console.log("Ta errado")

    default:
        console.log("nao existe")

}

return a === b ? true : false; // se a = b, retorna true, senao retorna false
/*  --------------   LAÇOS DE REPETIÇÃO  -------------*/

/*  <div class="js">react</div> 
  <div class="js">angular</div>
  <div class="js">nodejs</div>
  <div class="js">laravel</div> codigo para teste */

var js = document.getElementsByClassName("js");
var teste = document.getElementById("TESTE");
for (let i = 0; i < 4; i++) {
    let texto = js[i].innerHTML;
    js[i].innerHTML = "Curso de " + texto;

    let test =  
    teste.innerHTML = texto;
}

for (let i = 0; i < 10; i += 2) { /*for (let i = 10; i > 0; i -= 2) para fazer ao contrario*/
    let texto = js[i].innerHTML;
    js[i].innerHTML = "Curso de " + texto;

    let test =  
    teste.innerHTML = texto;
}

while (i < 5) {

}

do{

}while (i <5 )
/*  --------------   EVENTOS  -------------*/

/* ONLOAD - carrega o evento assim que a pagina estiver completamente carregada */

window.onload = function(){ 
    alert("funcionou"); 
    console.log("click");
};

/* ON click - carrega o evento assim que um botão for clicado */

var botao = document.getElementById("btn");
var title = document.getElementById("TESTE");

botao.addEventListener("click", function() {
    console.log("click");
    alert("funcionou"); 
})
/* ON hover - carrega o evento assim que um botão for clicado */

var link = document.getElementById("link");

link.addEventListener("mouseover", function(){ 
    link.classList.add("link");
})

link.addEventListener("mouseleave", function(){ 
    link.classList.remove("link")
})

var card = document.getElementById("pfund");
var card2 = document.getElementById("divi");

card.addEventListener("mouseover", function(){
    divi.classList.add("pFundo");
})
card.addEventListener("mouseleave", function(){
    divi.classList.remove("pFundo");
})

/* seria necessario um for em casa de ser um classe */

/* Change- muda elementos */

card.addEventListener("change", function(){
    divi.classList.add("pFundo");
})

/* Blur- carrega a função do evento quando sai de alguma caixa de texto */

botao.addEventListener("blur", function(){
     console.log("click");
    alert("funcionou");
})

/* Keyup- carrega a função do evento após a tecla terminar de ser clicada */

var text = document.getElementById("search");
var result = document.getElementById("TESTE")

text.addEventListener("keyup", function(){
    result.innerHTML = this.value;

})

/* Keypress- carrega a função do evento logo que a tecla é pressionada */

var text = document.getElementById("search");
var result = document.getElementById("TESTE")

text.addEventListener("keypress", function(evento){
    result.innerHTML = this.value;
    console.log(evento.keyCode); /* retorna o valor do codigo da tecla pressionada */
})

/* Submit- carrega a função do evento logo que a tecla é pressionada */


/* Math */ 

var randomNumberBetween0and19 = Math.floor(Math.random() * 20); // math.floor retorna o numero inteiro
// Math.random retorna o valor 

function randomWholeNum() {

  return Math.random();
}


function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin; 
    console.log(ourRandomRange(5, 9));

    /* aqui o q acontece é que 
    apos encontrar o valor random, ele soma o minimo, Caso o valor aleatorio seja 0 é somado a 5, entra 
    no limite estipulado.  */

}
  
/* parseInt(str) = transforma uma string em inteiro
var a = parseInt("007");













/*                                              EXEMPLOS                                        */ 

/* Buscar na array com for loop
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {

    for (i = 0; i < contacts.length; i++) {

        if (name === contacts[i].firstName) {

            return contacts[i][prop];
        } 
    }
    return "Não encontrado";
}
*/