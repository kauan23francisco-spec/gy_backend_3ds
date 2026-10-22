import express from 'express'
import path from 'path'

const dirBase = import.meta.dirname
const app = express()
const porta = 3000

// Define a pasta pública para o Express encontrar TODOS os seus arquivos .css
app.use(express.static(path.join(dirBase, 'src/publico')))

// 1. Rota: Página Inicial (Home)
app.get('/', (req, res) => {
    res.sendFile('src/paginas/index.html', { root: dirBase })
})

// 2. Rota: Buscar
app.get('/buscar', (req, res) => {
    res.sendFile('src/paginas/buscar.html', { root: dirBase })
})

// 3. Rota: Músicas Curtidas
app.get('/curtidas', (req, res) => {
    res.sendFile('src/paginas/curtidas.html', { root: dirBase })
})

// 4. Rota: Login
app.get('/login', (req, res) => {
    res.sendFile('src/paginas/login.html', { root: dirBase })
})

// Inicialização e liberação da porta do computador
app.listen(porta, () => {
    console.log(`Servidor está vivo em http://localhost:${porta}`)
})
