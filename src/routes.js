const {Router} = require('express');
const dummy = require('./services/dummy')
const {handleError} = require('./helpers/error')
const routes = Router();

routes.put('/dummy', dummy.save);
routes.patch('/dummy/:id', dummy.update);
routes.delete('/dummy', dummy.delete);
routes.get('/dummy', dummy.list);
routes.get('/dummy/:id', dummy.view);

routes.use((err, req, res, next) => {
    handleError(err, res);
  });

module.exports = routes;