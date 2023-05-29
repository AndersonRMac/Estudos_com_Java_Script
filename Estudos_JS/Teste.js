//FORMATAÇÃO DE NUMEROS

var n1 = 1575.7

n1.toFixed(2) // => pega o numero e anda duas casas após o ponto

n1.toFixed(2).replace('.', ',') // .replace troca o ponto por vírgula

n1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) // formata o valor para real, dólar ou euro mudando de BRL, EUR, USD

console.log(n1);