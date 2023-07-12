/*
document.write("Olá Mundo!");
console.log("Outro olá mundo!"); //mensagem de log direto no seu browser 
*/
//Declarando variaveis
let mensagem = "Minha mensagem";
let mensagem2 = 'Outra mensagem';
let meuPeso = 83.5;
let minhaAltura = 1.75;
let minhaIdade = 40;
let ehDoador = false;
let teste = null;

//Criando constantes e atribuindo valor
const pi = 3.145;
const taxa = 0.5;

teste = "Algum conteudo";

//escrevendo o conteudo das variaveis e constantes

document.write(mensagem);
document.write(mensagem2);
document.write(meuPeso);
document.write(minhaAltura);
document.write(minhaIdade);
document.write(ehDoador);
document.write(teste);
document.write(pi);
document.write(taxa);

//Formatando as saidas dessas variaveis

document.write(`A mensagem é:${mensagem}\n`);
document.write(`A segunda mensagem é: ${mensagem2}\n`);
document.write(`Meu peso é: ${meuPeso}\n`);
document.write(`Minha altura é: ${minhaAltura}\n`);
document.write(`Minha idade é: ${minhaIdade}\n`);
document.write(`Ele é doador de sangue? ${ehDoador}\n`);
document.write(`O meu teste é: ${teste}\n`);
