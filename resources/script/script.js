// // if e else, else if, switch
// // looping
// // array(FUNÇÕES NATIVAS)
// // (OBJETO)
// // FUNÇÕES
// // VAR, LET E CONST
// // DICAS: +=
// // CONCATENÇÃO
// // DEFER 

// newFunction()
// function newFunction() {
//     let nome = "Gabrielle"
//     let idade = 17
//     let maiorDeIdade = true
//     let saldo = 10000

//     if (true) {
//         console.log("Sou maior de idade")
//         //acontece algo
//     }
//     else {
//         console.log("Sou menor de idade")
//         // acontece algo
//     }

//     if (saldo < 1000) {
//         console.log(" Fique em casa ")
//     }
//     else if (saldo >= 1000 && >= 5000) {
//         console.log("Sair pra festa ")
//     }
//     else {
//         console.log("Guardar dinheiro")
//     }
//     let userage = Number(prompt("Digite a sua idade:"))
// }

// let nome ="Edisander"
// let idade = 19
// let maiorDeIdade = true
// let saldo = 10000

// if (true) {
//     console.log("Sou maior de idade")
//     //acontece algo
// }
// else{
//     console.log ("Sou menor de idade")
//     // acontece algo
// }

// if(saldo < 1000) {
//     console.log (" Fique em casa ");
// }
// else if(saldo >= 1000 && <=5000 ){
//     console.log ("Sair pra festa ")
// }
// else{
//     console.log ("Guardar dinheiro")
// }

// let idade = prompt ("Digite sua idade")

// if (idade <= 12) {
//     alert ("Voce e uma criança")
// }
// else if (idade <=17){
//     alert ("Voce e um adolecente")
// }
// else if (idade < 60) {
//     alert ("Voce e um adulto")
// }
// else{
//     alert ("Voce e um idoso")
// }

// if (true) {
//     console.log("Sou maior de idade")
//     //acontece algo
// }
// else{
//     console.log ("Sou menor de idade")
//     // acontece algo
// }

// if(saldo < 1000) {
//     console.log (" Fique em casa ");
// }
// else if(saldo >= 1000 && <=5000 ){
//     console.log ("Sair pra festa ")
// }
// else{
//     console.log ("Guardar dinheiro")
// }

// let idade = prompt ("Digite sua idade")

// if (idade <= 12) {
//     alert ("Voce e uma criança")
// }
// else if (idade <=17){
//     alert ("Voce e um adolecente")
// }
// else if (idade < 60) {
//     alert ("Voce e um adulto")
// }
// else{
//     alert ("Voce e um idoso")
// }


// let userAge = Number(prompt("Digite a sua idade: "));

// if (userAge <= 0) {
//     alert("Número inválido");
// }
// else if (userAge > 0 && userAge < 12) {
//     alert("Você é uma criança");
// }
// else if (userAge >= 12 && userAge < 18) {
//     alert("Você é um adolescente");
// }
// else if (userAge >= 18 && userAge < 60) {
//     alert("Você é um adulto");
// }
// else if (userAge >= 60) {
//     alert("Você é um idoso");
// }
// // Recebe os dados do usuário
// let peso = parseFloat(prompt("Digite seu peso em kg:"));
// let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));

// // Calcula o IMC
// // Fórmula: IMC = peso / (altura x altura)
// let imc = peso / (altura * altura);

// // Classificação
// let classificacao = "";

// if (imc < 18.5) {
//     classificacao = "Abaixo do peso";
// } else if (imc < 24.9) 
    
// {
//     classificacao = "Peso normal";
// } else if (imc < 29.9) 
// {
//     classificacao = "Sobrepeso";
// } else if (imc < 34.9) 
// {
//     classificacao = "Obesidade Grau 1";
// } else if (imc < 39.9) {
//     classificacao = "Obesidade Grau 2";
// } else {
//     classificacao = "Obesidade Grau 3";
// }

// // Mostra o resultado com 2 casas depois do ponto
// alert(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
// console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
 
// let opcao = Number (prompt ("Digite uma opção de 1 a : "));
// switch (opcao) {
//  case 1:
//   console.log( "Domingo");
//   break;

// case 2:
//   console.log ("Segunda");
//   break;

// case 3:
//   console.log ("Terça");
//   break;
// case 4:
//   console.log ("Quarta");
//   break;

// case 5:
//   console.log ("Quinta");
//   break;

// case 6:
//   console.log ("Sexta");
//   break;

// case 7:
//   console.log ("Sábado");
//   break;


//  default:
//   console.log("Opção Inválida")
//   break;
// }
// let peso = parseFloat(prompt("Digite seu peso em kg:"));
// let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.70):"));

// Fórmula
let imc = peso / (altura * altura);


switch (true) {
    case (imc < 18.5):
        classificacao = "Abaixo do peso";
        break;
    case (imc < 24.9):
        classificacao = "Peso normal";
        break;
    case (imc < 29.9):
        classificacao = "Sobrepeso";
        break;
    case (imc < 34.9):
        classificacao = "Obesidade Grau 1";
        break;
    case (imc < 39.9):
        classificacao = "Obesidade Grau 2";
        break;
    default:
        classificacao = "Obesidade Grau 3";
        break;
}

alert(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);