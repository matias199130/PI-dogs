require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { API_KEY } = process.env;
const { Dogs, Temperament } = require("../db");

const router = Router();

// mapeo desde la api
const getApi = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const apiInfo = await apiUrl.data.map((el) => {
    return {
      id: el.id,
      image: el.image.url,
      name: el.name,
      weight: el.weight.imperial,
      height: el.height.imperial,
      life_span: el.life_span,
      temperament: el.temperament,
    };
  });
  // console.log(apiInfo)
  return apiInfo;
};

// mapeo desde la bd
const getBd = async () => {
  //findAll a dogs guardarlo en una const y
  //guardar los atributos que se necesitan en dogs y que incluyan
  //el modelo temperamento renombrando "as" temperamento tambien
  //hay que cambiarlo en el archivo de db hacer un throw para evitar errores

  //   return await Dogs.findAll({
  //     include: {
  //       model: Temperament,
  //       attributes: ["name"],
  //       through: {
  //         attributes: [],
  //       },
  //     },
  //   });
  const getDogsTemp = await Dogs.findAll({
    attributes: [
      "id",
      "name",
      "height",
      "weight",
      "life_span",
      "image",
      "createdInBd",
    ],
    include: {
      model: Temperament,
      as: "temperament",
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  let mapBd = getDogsTemp.map((el) => el.dataValues);
  // console.log("mapBd", mapBd);
  mapBd = mapBd.map((el) => {
    let arrTemp = el.temperament.map((el) => el.name);
    // console.log("soy arrTemp", arrTemp);
    return {
      id: el.id,
      name: el.name,
      height: el.height,
      weight: el.weight,
      life_span: el.life_span,
      image: el.image,
      createdInBd: el.createdInBd,
      temperament: arrTemp.join(", "),
    };
  });
  return mapBd;
};

//concatenacion de datos entre la api y base de datos.
const getBreeds = async () => {
  const apiInfo = await getApi();
  const bdInfo = await getBd();
  const allInfo = apiInfo.concat(bdInfo);
  return allInfo;
};
// GET /dogs:
// Obtener un listado de las razas de perro
// Debe devolver solo los datos necesarios para la ruta principal
// GET /dogs?name="...":
// Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
// Si no existe ninguna raza de perro mostrar un mensaje adecuado
// lo que se hace en esta ruta es que si se pide un perro especifico la ruta lo trae,
// y si no se pide un perro la ruta se encarga de traer todos las razas con lo pedido en la ruta principal

router.get("/", async (req, res) => {
  const { name } = req.query;
  const allBreeds = await getBreeds();
  // console.log(allBreeds, name, "perritos")
  if (!name) {
    res.status(200).json(allBreeds);
  } else {
    const breedsFilter = allBreeds.filter((el) => {
      const names = el.name.toUpperCase();
      if (names.includes(name.toUpperCase())) return names;
    });
    breedsFilter.length
      ? res.status(200).json(breedsFilter)
      : res.send("La raza que intenta buscar no fue encontrada!");
  }
});

// GET /dogs/{idRaza}:
// Obtener el detalle de una raza de perro en particular
// Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
// Incluir los temperamentos asociados

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const breeds = await getBreeds();
  if (id) {
    const idFilter = await breeds.filter((el) => el.id == id);
    idFilter.length
      ? res.status(200).json(idFilter)
      : res
          .status(404)
          .send("El id de la raza que intenta buscar no se encuentra!");
  }
});

module.exports = router;
