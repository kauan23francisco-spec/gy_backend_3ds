import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Configura o Express para ler a pasta de arquivos estáticos corretamente
app.use(express.static(path.join(__dirname, 'src', 'publico')));

// ROTAS DO SISTEMA
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'paginas', 'index.html'));
});

app.get('/buscar', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'paginas', 'buscar.html'));
});

app.get('/curtidas', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'paginas', 'curtidas.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'paginas', 'login.html'));
});

// Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em: http://localhost:${PORT}`);
});
