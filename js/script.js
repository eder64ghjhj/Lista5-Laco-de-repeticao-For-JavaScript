
const botao01 = document.querySelector("#botao01")
const botao02 = document.querySelector("#botao02")
const botao03 = document.querySelector("#botao03")
const botao04 = document.querySelector("#botao04")
const botao05 = document.querySelector("#botao05")
const botao06 = document.querySelector("#botao06")
const botao07 = document.querySelector("#botao07")
const botao08 = document.querySelector("#botao08")
const botao09 = document.querySelector("#botao09")
const botao10 = document.querySelector("#botao10")
const botao11 = document.querySelector("#botao11")
const botao12 = document.querySelector("#botao12")
const botao13 = document.querySelector("#botao13")
const botao14 = document.querySelector("#botao14")
const botao15 = document.querySelector("#botao15")
const res = document.querySelector('.res')

function limparDiv() {
    res.innerHTML = ""
}

const exercicio01 = botao01.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que exiba os números de 1 a 20. */

    for (i = 1; i <= 20; i++) {
        res.innerHTML += i + "<br>"
    }
})

const exercicio02 = botao02.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que exiba apenas os números pares de 1 a 50. */

    for (i = 1; i <= 50; i++) {

        if (i % 2 == 0) {
            res.innerHTML += i + "<br>"
        }

    }

})

const exercicio03 = botao03.addEventListener('click', () => {

    limparDiv()

    /* Crie um programa que exiba a tabuada de um número fornecido pelo usuário (de 1 a 10). */

    let numero = parseInt(prompt("Digite um número: "))

    for (i = 1; i <= 10; i++) {

        res.innerHTML += `${numero} X ${i} = ${numero * i}` + "<br>"

    }

})

const exercicio04 = botao04.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que calcule a soma dos números de 1 a 100. */

    let soma = 0

    for (i = 1; i <= 100; i++) {

        soma += i

    }

    res.innerHTML = `A soma dos número 1 ao 100 é ${soma}`
})

const exercicio05 = botao05.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que calcule a soma dos números pares de 1 a 200. */

    for (i = 1; i <= 200; i++) {

        if (i % 2 == 0) {

            res.innerHTML += i + "<br>"

        }

    }

})

const exercicio06 = botao06.addEventListener('click', () => {

    limparDiv()

    let numeroMaior;
    let numeroMenor;

    for (let i = 1; i <= 10; i++) {

        let numero = parseInt(prompt(`Digite o ${i}° número :`));


        if (i === 1) {

            numeroMaior = numero;
            numeroMenor = numero;
        }

        else {

            if (numero > numeroMaior) {
                numeroMaior = numero;
            }

            if (numero < numeroMenor) {
                numeroMenor = numero;
            }
        }
    }

    res.innerHTML = `Número maior é ${numeroMaior} e número menor é ${numeroMenor}`;
})

const exercicio07 = botao07.addEventListener('click', () => {

    limparDiv()

    /*  Faça um programa que leia 5 números inteiros e calcule a média aritmética. */

    let soma = 0
    const valorMedia = 5

    for (let i = 1; i <= 5; i++) {

        let numero = parseInt(prompt(`Digite o ${i}° número: `))
        soma += numero

    }



    let media = soma / valorMedia

    res.innerHTML = `A média dos números digitados é ${media}`


})

const exercicio08 = botao08.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que mostre a sequência de Fibonacci até o décimo termo*/

    let penultimoNumero = 0
    let ultimoNumero = 1

    for (let i = 1; i <= 10; i++) {

        res.innerHTML += penultimoNumero + "<br>"

        let numeroAtual = penultimoNumero + ultimoNumero

        penultimoNumero = ultimoNumero
        ultimoNumero = numeroAtual
    }

})

const exercicio09 = botao09.addEventListener('click', () => {

    limparDiv()

    /*  Crie um programa que peça ao usuário um número inteiro N e mostre os números de 1 até N.*/

    let numero = parseInt(prompt("Digite um número: "))

    for (let i = 1; i <= numero; i++) {
        res.innerHTML += i + "<br>"
    }

})

const exercicio10 = botao10.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que mostre todos os números ímpares entre 100 e 200.*/

    for (let i = 100; i <= 200; i++) {

        if (i % 2 == 0) {

            res.innerHTML += i + "<br>"

        }

    }

})

const exercicio11 = botao11.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que leia 10 idades e calcule a quantidade de pessoas maiores de idade. */

    let contadoraMaior = 0

    for (let i = 1; i <= 10; i++) {

        let idade = parseInt(prompt(`Digite a ${i}° idade: `))

        if (idade >= 18) {
            contadoraMaior++
        }
    }

    res.innerHTML = `Das 10 idades digitadas, ${contadoraMaior} é maior de idade.`

})

const exercicio12 = botao12.addEventListener('click', () => {

    limparDiv()

    /* Crie um programa que leia um número inteiro e calcule o seu fatorial. */

    let numero = parseInt(prompt("Digite um número: "))
    let fatorial = 1

    for (let i = 1; i <= numero; i++) {

        fatorial = fatorial * i
    }

    res.innerHTML = `O fatorial do número ${numero} é ${fatorial}`

})

const exercicio13 = botao13.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que peça ao usuário um número e exiba a soma de todos os múltiplos de 3 até esse número. */

    let numero = parseInt(prompt("Digite um número: "))
    let soma = 0

    for (let i = 1; i <= numero; i++) {

        if (i % 3 == 0) {
            soma += i
        }
    }

    res.innerHTML = `A soma de todos múltiplos por 3 é ${soma}`

})

const exercicio14 = botao14.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que leia 5 nomes e os exiba em ordem invertida. */

    /* for (let i = 1; i <= 5; i++) {

    let nomeAcontrario = " "

        let nome = prompt(`Digite o ${i}° nome: `)

        for(let a = (nome.length - 1); a >= 0; a--){

            nomeAcontrario += nome[a]

        }
       res.innerHTML += `${nomeAcontrario}` + "<br>"
    }
 */

    let nomes = []
    const totalNomes = 5

    for (let i = 1; i <= 5; i++) {

        let nome = prompt(`Digite o ${i}° nome: `)

        nomes.push(nome)

    }

    for (let a = (totalNomes - 1); a >= 0; a--) {
        res.innerHTML += `${nomes[a]}` + "<br>"
    }

})

const exercicio15 = botao15.addEventListener('click', () => {

    limparDiv()

    /* Crie um programa que desenhe na tela um triângulo de asteriscos com base em um número informado pelo usuário. (Exemplo: se o usuário digitar 5 → deve imprimir) */

    let numero = parseInt(prompt("Digite um número: "))

    for (let i = 1; i <= numero; i++) {


        for(let contadora = 1; contadora <= i; contadora++){

            res.innerHTML += "*" 
        }
        res.innerHTML += "<br>"
    }
})





