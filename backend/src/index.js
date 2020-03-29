const express = require('express');
const routes = require('./routes');
const cors = require('cors');



const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);

//
// Rota / Recurso
//

//
// *Métodos HTTP: * //
//

// GET: Buscar Informação do back-end
// POST: Criar Informação do back-end
// PUT: Alterar Informação do back-end
// DELETE: Deletar Informação do back-end

//
// *Tipos de Parâmetros* //
//

// Query Params: Parâmetros nomeados enviados na rota após *?* (Filtros, paginação...)
// Route Params: Parâmetros utilizados para identificar recursos 
// Request Body: Corpo da requisição, utilizado para criar ou alterar recursos


//
// *SQL: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
// *NoSQL: MongoDB, CouchDB, etc
//

/**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where(1=1)
*/



