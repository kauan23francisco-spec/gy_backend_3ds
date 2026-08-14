const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')
const porta = 8001

// Caminhos dos arquivos HTML
const home = path.join(__dirname, 'pages/index.html')
const compras = path.join(__dirname, 'pages/compras.html')
const erro404 = path.join(__dirname, 'pages/404.html')

const server = http.createServer((req, res) => {
  const urlTratada = new URL(req.url, `http://${req.headers.host}`)
  const caminhoPesquisado = urlTratada.pathname

  // Configura header padrão como HTML com UTF-8
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (caminhoPesquisado === '/') {
    res.statusCode = 200
    return res.end(fs.readFileSync(home, 'utf8'))
  } 
  
  if (caminhoPesquisado === '/compras') {
    res.statusCode = 200
    return res.end(fs.readFileSync(compras, 'utf8'))
  } 
    if (caminhoPesquisado === '/erro') {
    res.statusCode = 404
  return res.end(fs.readFileSync(erro404, 'utf8'))
  } 
  
  
})

server.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`)
})