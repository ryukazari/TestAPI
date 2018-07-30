const express = require('express');
const app = express();

/*Settings - Configuraciones
    inicializar variablepara el puerto
    proces.env.port => puerto recibido
 */
app.set('port', process.env.PORT || 3000)


app.use(express.json());

//Routes - rutas
app.use(require('./routes/employees'));


app.listen(app.get('port'), function () {
    console.log('servidor en el puerto ',app.get('port'))
});