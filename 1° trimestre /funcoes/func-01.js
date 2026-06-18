// funçoes podem ou não receber parâmetros 
// são blocos reaproveitáveis 

function dizOla() {
    console.log("ola")
}
function dizOlapesoa(nome) {
    if(typeof nome !== "string"){
        console.error("por favor digite um valor e dexto!")
    } else {
    console.log( nome + ", diz olá!")
    }
}
dizOla()
dizOlapesoa("marcos")
dizOlapesoa("ana")
dizOlapesoa(123456)
