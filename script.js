// prompt --> textos
// +prompt --> numeros
// if --> "SE"


// O Porteiro Virtual
const idadeUsuario = +prompt("Qual é a sua idade?");

if (idadeUsuario >= 18);

if (idadeUsuario >= 18) {
    console.log("Acesso liberado! Divirta-se.");
}

if (idadeUsuario < 18) {
    console.log("Acesso negado. Você é menor de idade.");
}

// Sistema de Login Secreto
const senhaCorreta = "front123";
const senhaDigitada = prompt("Digite a senha de acesso:");

if (senhaDigitada === senhaCorreta) {
    console.log("Login efetuado com sucesso!");
}

if (senhaDigitada !== senhaCorreta) {
    console.log("Senha incorreta. Tente novamente.");
}

//A Loja com Desconto Surpresa
let valorCompra = +prompt("Digite o valor da compra:");

if (valorCompra > 100) {
    valorCompra = valorCompra - 10
}

console.log("O total a pagar é:" + valorCompra);

// Bônus de Pontuação por Compra
let quantidade = +prompt("Quantidade de produtos comprados:");
let valorGasto = +prompt("Valor gasto:");

let pontos = 10;

if (quantidade >= 5) {
    pontos = pontos + 50;
}

if (valorGasto >= 200) {
    pontos = pontos + 100;
}

console.log("Total de pontos:" + pontos);

// Bônus por Meta Batida
let salarioBase = +prompt("Salário base do vendedor:");
let totalVendas = +prompt("Total de vendas:");
let notaAvaliacao = +prompt("Nota de avaliação (de 0 a 10)");

let salarioFinal = salarioBase;

if (totalVendas > 5000 && notaAvaliacao >= 8);
let bonus = salarioBase * 0.15;
salarioFinal = salarioBase + bonus;

console.log("Salário final:" + salarioFinal);

//Taxa de Entrega Especial
let valorPedido = +prompt("Valor do pedido:");
let distanciaKm = +prompt("Distância em KM:");

let taxaEntrega = 10;

if (valorPedido < 30 || distanciaKm > 10){
    taxaEntrega = taxaEntrega + 5;
}

let valorTotal = valorPedido + taxaEntrega;

console.log("Valor total de pedido é:" + valorTotal);
