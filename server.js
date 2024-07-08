const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
    const prompt = req.body.prompt;

    try {
        const response = await axios.post('http://localhost:11434/api/generate', {
            model: 'llama3',
            prompt: prompt
        }, {
            responseType: 'stream'
        });

        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        response.data.on('data', (chunk) => {
            const data = JSON.parse(chunk.toString('utf8'));
            res.write(`${data.response}`);
            if (data.done) {
                // res.write('data: [DONE]\n\n');
                res.end();
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao se comunicar com a API do Ollama.' });
    }
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
