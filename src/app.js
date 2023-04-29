const express = require('express');

const strings = require('./lib/strings');
const numbers = require('./lib/numbers');

const app = express();

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
  const str = req.params.string;
  const length = parseInt(req.query.length);
  const result = isNaN(length)
    ? strings.firstCharacters(str, 1)
    : strings.firstCharacters(str, length);

  res.json({ result });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: numbers.add(a, b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.json({ result: numbers.subtract(b, a) });
  }
});

module.exports = app;
