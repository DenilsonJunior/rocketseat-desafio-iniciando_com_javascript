// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let number = Number(prompt('Digite um número'))

if( number % 2 ){
    alert('Seu número é ímpar')
} else {
    alert('Seu número é par')
}