const { Router } = require("express");
const { Dogs } = require("../db");

const router = Router();

// POST /dog:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
// Crea una raza de perro en la base de datos.

router.post("/", async (req, res) => {
  const { name, height, weight, life_span, temperament, image } = req.body;

  const createDog = await Dogs.create({
    name: name,
    height: height,
    weight: weight,
    life_span: life_span,
    image: image,
    temperament: temperament,
  });
  if (createDog) {
    res.status(200).json(createDog);
  } else {
    res
      .status(500)
      .send("Lo que intentas ingresar no se pudo procesar, por favor vuelva a intentarlo");
  }
});

module.exports = router;
