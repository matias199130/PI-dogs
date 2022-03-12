const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRoute = require('./dogs');
const dogRoute = require('./dog');
const tempramentsRoute = require('./Temperaments');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogsRoute);
router.use('/dog', dogRoute)
router.use('/temperaments', tempramentsRoute);

module.exports = router;
