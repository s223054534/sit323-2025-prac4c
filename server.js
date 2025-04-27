const express = require('express');
const app = express();
const port = 3000;

// Exponentiation
app.get('/exponentiation', (req, res) => {
    const base = parseFloat(req.query.base);
    const exponent = parseFloat(req.query.exponent);
    if (isNaN(base) || isNaN(exponent)) {
        return res.status(400).send('Invalid input');
    }
    const result = Math.pow(base, exponent);
    res.send({ result });
});

// Square Root
app.get('/square-root', (req, res) => {
    const number = parseFloat(req.query.number);
    if (isNaN(number) || number < 0) {
        return res.status(400).send('Invalid input or negative number');
    }
    const result = Math.sqrt(number);
    res.send({ result });
});

// Modulo
app.get('/modulo', (req, res) => {
    const dividend = parseFloat(req.query.dividend);
    const divisor = parseFloat(req.query.divisor);
    if (isNaN(dividend) || isNaN(divisor) || divisor === 0) {
        return res.status(400).send('Invalid input or division by zero');
    }
    const result = dividend % divisor;
    res.send({ result });
});

// Default route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the Calculator API');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
