// funções de retorno poden retornar objetos 
// chamamos isso de 'função construtor'
// isso permite criarmos várias instâncias
// do mesmo objeto de forma dinamica!

function fabricarCarros(marca,modelo,montadora, motor){
    return {
       marca: marca,
       modelo: modelo,
       montadora: montadora,
       motor: motor,
   }
}
const carro02 = {
    marca:'BMW',
    modelo:'X5',
    montadora:'BMW s.A',
    motor:'v8 6.0'
}

const camaro = fabricarCarros("camaro","camaro2000","camarov1396","v22")//tenho 2 problemas!!!
const bmw = fabricarCarros(carro02.marca,carro02.modelo,carro02.montadora,carro02.motor)
console.log(camaro)
console.log(bmw)