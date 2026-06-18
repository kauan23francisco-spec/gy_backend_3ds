
 function somar(n1,n2){
    return `A soma de ${n1} e ${n2} é igual = ${n1+n2}`
}

 function subtrair(n1,n2){
    return `A subtração de ${n1} e ${n2} é igual = ${n1-n2}`
}

function dividir(n1,n2){
    return `A divisão de ${n1} e ${n2} é igual = ${n1/n2}`
}

function multiplicar(n1,n2){
    return `A multiplicção de ${n1} e ${n2} é igual = ${n1*n2}`
}

module.exports = { somar, subtrair, dividir, multiplicar }
