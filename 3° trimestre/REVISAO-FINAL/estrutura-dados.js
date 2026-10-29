// array (separado por virgula)
const carros = ['camaro', 'mustang', 'audio']
                //  0         1          2 
console.log(carros[33])// undefined
for(carro of carros){
    console.log('carro: '+ carro)
}