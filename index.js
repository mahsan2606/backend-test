const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
