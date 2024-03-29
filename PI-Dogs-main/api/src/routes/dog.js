const { Router } = require("express");
const { Dogs, Temperament } = require("../db");

const router = Router();

// POST /dog:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
// Crea una raza de perro en la base de datos.

router.post("/", async (req, res) => {
  const { name, height, weight, life_span, temperament, image } = req.body;
  //creacion en post
  const createDog = await Dogs.create({
    name: name,
    height: height,
    weight: weight,
    life_span: life_span,
    image: image,
  });
  //recorrido a temperament
  for (const el of temperament) {
    const searchTemp = await Temperament.findAll({
      where: {
        name: el,
      },
    });
    createDog.addTemperament(searchTemp);
  }
  res.status(200).send("perro fue creado con exito");
});

module.exports = router;
