const { Router } = require("express");

const { Temperament } = require("../db");
const { API_KEY } = process.env;
const { default: axios } = require("axios");
const router = Router();

// GET /temperament:
// Obtener todos los temperamentos posibles
// En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get("/", async (req, res) => {
  const tempInfo = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );

  const tempBd = tempInfo.data.map((el) => el.temperament).toString().trim().split(/\s*,\s*/);
  //  busca 0 o más espacios seguidos de un punto y coma seguido por 0
  // o más espacios y, cuando los halla, elimina los espacios de la cadena.
  // listaNombres es el array devuelto como resultado de la llamada a split.

  const filterBd = tempBd.filter((el) => el);
  //almaceno valor unico
  const allFilter = [...new Set(filterBd)];
  //ejecuta la function
  allFilter.forEach((el) =>
    Temperament.findOrCreate({
      where: { name: el },
    })
  );
  let allTemperaments = await Temperament.findAll();
  allTemperaments = allTemperaments.map((el) => el.name);
  res.json(allTemperaments);
});

module.exports = router;
