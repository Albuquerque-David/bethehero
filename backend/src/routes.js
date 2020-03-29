const express = require('express');

const OngController = require('./database/controllers/OngController')
const IncidentController = require('./database/controllers/IncidentController')
const ProfileController = require('./database/controllers/ProfileController')
const SessionController = require('./database/controllers/SessionController')

const routes = express.Router();

routes.post('/sessions',SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile',ProfileController.index);

module.exports = routes;