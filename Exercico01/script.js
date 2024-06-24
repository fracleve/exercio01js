/*

Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números; 

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~. */




let firstNumber = prompt('Digite o primeiro numero')
let secondNumber = prompt('Digite o segundo numero')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
let restDiv = firstNumber % secondNumber


alert('soma:' + sum)
alert('Subtração:' + sub)
alert('Multiplicação:' + multi)
alert('Divisão:' + div)
alert('Resto da divisão:' + restDiv)


let oddeven = restDiv/2;
    
    if(restDiv%2 == 0){
        alert("par");
    }else {
        alert("impar");
    }

alert("concluido")  

