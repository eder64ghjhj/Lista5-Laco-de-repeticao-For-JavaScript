const btnEx01 = document.querySelector("#ex01")
const btnEx02 = document.querySelector("#ex02")
const btnEx03 = document.querySelector("#ex03")
const btnEx04 = document.querySelector("#ex04")
const btnEx05 = document.querySelector("#ex05")
const btnEx06 = document.querySelector("#ex06")
const btnEx07 = document.querySelector("#ex07")
const btnEx08 = document.querySelector("#ex08")
const btnEx09 = document.querySelector("#ex09")
const btnEx10 = document.querySelector("#ex10")
const btnEx11 = document.querySelector("#ex11")
const btnEx12 = document.querySelector("#ex12")
const btnEx13 = document.querySelector("#ex13")
const btnEx14 = document.querySelector("#ex14")
const btnEx15 = document.querySelector("#ex15")

function ex01() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }

}
btnEx01.addEventListener('click', ex01)

function ex02() {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) console.log(i);
    }

}
btnEx02.addEventListener('click', ex02)

function ex03() {
    let num = Number(prompt("Digite um número:"));

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }

}
btnEx03.addEventListener('click', ex03)

function ex04() {
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        soma += i;
    }

    console.log("Soma:", soma);

}
btnEx04.addEventListener('click', ex04)

function ex05() {
    let soma = 0;

    for (let i = 2; i <= 200; i += 2) {
        soma += i;
    }

    console.log("Soma dos pares:", soma);

}
btnEx05.addEventListener('click', ex05)

function ex06() {
    let maior = -Infinity;
    let menor = Infinity;

    for (let i = 1; i <= 10; i++) {
        let n = Number(prompt("Digite um número:"));
        if (n > maior) maior = n;
        if (n < menor) menor = n;
    }
    console.log("Maior:", maior);
    console.log("Menor:", menor);

}
btnEx06.addEventListener('click', ex06)

function ex07() {
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        soma += Number(prompt("Digite um número:"));
    }

    console.log("Média:", soma / 5);

}
btnEx07.addEventListener('click', ex07)

function ex08() {
    let a = 0, b = 1;

    for (let i = 1; i <= 10; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }

}
btnEx08.addEventListener('click', ex08)

function ex09() {
    let N = Number(prompt("Digite N:"));

    for (let i = 1; i <= N; i++) {
        console.log(i);
    }

}
btnEx09.addEventListener('click', ex09)

function ex10() {
    for (let i = 101; i < 200; i += 2) {
        console.log(i);
    }

}
btnEx10.addEventListener('click', ex10)

function ex11() {
    let cont = 0;

    for (let i = 1; i <= 10; i++) {
        let idade = Number(prompt("Digite uma idade:"));
        if (idade >= 18) cont++;
    }

    console.log("Maiores de idade:", cont);

}
btnEx11.addEventListener('click', ex11)

function ex12() {
    let n = Number(prompt("Digite um número:"));
    let fat = 1;

    for (let i = 1; i <= n; i++) {
        fat *= i;
    }

    console.log("Fatorial:", fat);

}
btnEx12.addEventListener('click', ex12)

function ex13() {
    let N = Number(prompt("Digite um número:"));
    let soma = 0;

    for (let i = 3; i <= N; i += 3) {
        soma += i;
    }

    console.log("Soma dos múltiplos de 3:", soma);

}
btnEx13.addEventListener('click', ex13)

function ex14() {
    let nomes = [];

    for (let i = 1; i <= 5; i++) {
        nomes.push(prompt("Digite um nome:"));
    }

    console.log(nomes.reverse());

}
btnEx14.addEventListener('click', ex14)

function ex15() {
    let base = Number(prompt("Digite a base do triângulo:"));

    for (let i = 1; i <= base; i++) {
        console.log("*".repeat(i));
    }

}
btnEx15.addEventListener('click', ex15)