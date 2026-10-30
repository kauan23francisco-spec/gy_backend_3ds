//funções são blocos de codigo reaproveitaveis 
//que representão ações (funcionalidade)


function dancaDebutante(pai, filha){
      console.log(`O pai ${pai} dançou com a filha ${filha}`)
      return `O pai ${pai} dançou com a filha ${filha}`// expõe para reúse 
}
dancaDebutante("mario", ' maria')