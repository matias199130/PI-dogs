const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRoute = require("./dogs");
const dogRoute = require("./dog");
const tempramentsRoute = require("./temperament");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogsRoute);
router.use("/dog", dogRoute);
router.use("/temperament", tempramentsRoute);

module.exports = router;
