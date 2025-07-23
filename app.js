const express = require('express');
const path = require('path'); // подключаем модуль path

const app = express();

app.use(express.json());
app.use(express.static('public')); // для обслуживания статических файлов из папки 'public'

// Обработка POST-запроса
app.post('/post', (req, res) => {
    const data = req.body;
    res.json({
        received_json: data,
        headers: req.headers,
        url: req.protocol + '://' + req.get('host') + req.originalUrl,
        args: req.query
    });
});

// Обработка GET-запроса для form.html
app.get('/form.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

// Обработка GET-запроса для index.html (если нужен)
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Или можно обслуживать все файлы из корня через статическую папку
// и обращаться к ним по URL, например: http://localhost:3000/form.html

// Обработка GET-запроса на /post
app.get('/post', (req, res) => {
    res.json({
        message: "Это ответ на GET-запрос",
        url: req.protocol + '://' + req.get('host') + req.originalUrl,
        headers: req.headers,
        args: req.query
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});