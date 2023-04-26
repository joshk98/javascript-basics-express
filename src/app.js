const express = require('express');

const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const str = req.params.string;
  const length = parseInt(req.query.length);
  const result = isNaN(length) ? firstCharacters(str, 1) : firstCharacters(str, length);

  res.json({ result });
});

module.exports = app;
