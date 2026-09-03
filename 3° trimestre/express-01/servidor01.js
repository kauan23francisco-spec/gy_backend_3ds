import express from  'express'
 
const app = express()
const porta = 3000

app.get('/', (req, res )=> {
  res.send('olá, abacaxi!')
})


app.listen(porta,() => {console.log('servidor está vivo!')})