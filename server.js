'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Aplicación de Ejemplo 2');
});

app.listen(PORT, HOST);
console.log(`Aplicacion 2 Corriendo en http://${HOST}:${PORT}`);