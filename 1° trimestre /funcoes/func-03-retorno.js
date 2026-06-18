// funções de reetorno exigem o termo ´return`
// permitem tomar disponível os dados processados
// reaproveitamento e ações sequenciais 
// podemons armazenar as funçoes de retorno 
//a variáveis, funçoes, arrays, etc.

function meuSalario(salario) {
   const contaLuz = 145.0
   const aluguel = 1350
   const restoSalario = salario - (contaLuz+aluguel)
   //console.log (restoSalario)  // não serve p/ usário
   return `o resto do teu salario é R$${restoSalario.toFixed(2).replace(".",",")}`
}
const resto = meuSalario(9999.0)
console. log (resto)