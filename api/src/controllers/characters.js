const axios = require("axios");
// GET getCharById: "/character/:id"
// GET login: "/login"

// https://rickandmortyapi.com/api/character?page=1
// https://rickandmortyapi.com/api/character/${id}

const URL = " https://rickandmortyapi.com/api/character";
const STATUS_OK = 200;
const STATUS_ERROR = 404;

const EMAIL_USER = "eje@gmail.com";
const PASSWORD_USER = "@123QWEasd";

const login = function (req, res) {
  const { password, email } = req.query;
  if (!password || !email) {
    return res.status(STATUS_ERROR).end("password or email null");
  }
  if (password === PASSWORD_USER && email === EMAIL_USER) {
    res.status(STATUS_OK).json({ access: true });
  } else {
    res.status(STATUS_ERROR).json({ access: false });
  }
};

const getCharacterId = function (req, res) {
  console.log("in char route");
  const { id } = req.params;
  axios
    .get(`${URL}/${id}`)
    .then(({ data }) => data)
    .then((ch) => {
      const { id, name, gender, species, origin, image, status } = ch;
      const character = {
        id,
        name,
        gender,
        species,
        origin: origin?.name,
        image,
        status,
      };
      res.status(STATUS_OK).json(character);
    })
    .catch((error) => {
      res.status(STATUS_ERROR).end("character not found");
    });
};

const getAllCharacters = function (req, res) {
  axios.get(`${URL}?page=1`).then((result) => {
    const characters = result.data?.results;
    res.status(STATUS_OK).json(characters);
  });
};

module.exports = {
  getCharacterId,
  login,
  getAllCharacters,
};

/*
 https://rickandmortyapi.com/api/character/:id 
 de Rick & Morty. Utiliza promesas y no olvides que 
 el id que utilices debe ser el que recibes por parámetro.

[NOTA]: tendrás que importar axios.

Una vez que tienes la respuesta de tu petición crea 
un objeto en el que guardes las siguientes propiedades del personaje: 
id (lo recibes por parámetro), name, gender, species, origin, image y status.


 {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3'
    },
    image:
*/
