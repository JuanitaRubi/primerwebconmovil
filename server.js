const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
