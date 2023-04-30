const express = require('express');

const strings = require('./lib/strings');
const numbers = require('./lib/numbers');
const booleans = require('./lib/booleans');

const app = express();
app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: strings.sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: strings.uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: strings.lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const length = +req.query.length;
  const result = Number.isNaN(length)
    ? strings.firstCharacters(string, 1)
    : strings.firstCharacters(string, length);

  res.json({ result });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = +req.params.a;
  const b = +req.params.b;
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: numbers.add(a, b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = +req.params.a;
  const b = +req.params.b;
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: numbers.subtract(b, a) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.multiply(a, b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  if (a === 0 && b !== 0) {
    res.status(200).json({ result: 0 });
  }
  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: numbers.divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  if (a === 0 && b !== 0) {
    res.status(200).json({ result: 0 });
  }
  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(+a) || Number.isNaN(+b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: numbers.remainder(a, b) });
});

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: booleans.negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: booleans.truthiness(value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = +req.params.number;
  if (Number.isNaN(number)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: booleans.isOdd(number) });
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const { string } = req.params;
  const { char } = req.params;
  if (+char.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: booleans.startsWith(char, string) });
});

module.exports = app;
