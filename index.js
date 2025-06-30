const express = require('express');
const app = express();
const PORT = 5000;

// ✅ Correct require path
const categoriesList = require('./api/Categories');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Badal's API");
});

app.get('/categories', (req, res) => {
    res.json(categoriesList);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
