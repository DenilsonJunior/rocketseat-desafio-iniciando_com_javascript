// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let dado = true;
let type = typeof dado

if( type == 'boolean' ){
    console.log('Seu dado é um boolean')
} else {
    console.log('Valor digitado não é um boolean')
}