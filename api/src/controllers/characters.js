const axios = require("axios");
// GET getCharById: "/character/:id"
// GET login: "/login"

// https://rickandmortyapi.com/api/character?page=1
// https://rickandmortyapi.com/api/character/${id}

const URL = " https://rickandmortyapi.com/api/character";
const STATUS_OK = 200;
//TODO: TESTING <-> fix status 404 to -> 500
const STATUS_ERROR = 500;

const EMAIL_USER = "eje@gmail.com";
const PASSWORD_USER = "@123QWEasd";

const login = function (req, res) {
  const { password, email } = req.query;
  if (!password || !email) {
    //TODO: TESTING <-> fix error to -> .json({ access: false })
    return res.status(STATUS_ERROR).json({ access: false });
  }
  if (password === PASSWORD_USER && email === EMAIL_USER) {
    res.status(STATUS_OK).json({ access: true });
  } else {
    //TODO: TESTING <-> fix error to -> .json({ access: false })
    res.status(STATUS_OK).json({ access: false });
  }
};
/*
-> password -> token AXWE234 (vto 10 min)

Front <- token -> cockies 
*/

const getCharacterId = async function (req, res) {
  console.log("in char route");
  try {
    const { id } = req.params;
    const ch = await axios.get(`${URL}/${id}`);
    const { name, gender, species, origin, image, status } = ch.data;
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
  } catch (error) {
    //TODO: TESTING <-> fix error to -> .end(error.message)
    res.status(STATUS_ERROR).end(error.message);
  }
};

// const getAllCharacters = function (req, res) {
//   axios.get(`${URL}?page=1`).then((result) => {
//     const characters = result.data?.results;
//     res.status(STATUS_OK).json(characters);
//   });
// };
const getAllCharacters = async function (req, res) {
  try {
    const characters = await axios.get(`${URL}?page=1`);
    res.status(STATUS_OK).json(characters.data.results);
  } catch (error) {
    //TODO: TESTING <-> fix error to -> .end(error.message)
    res.status(STATUS_ERROR).end(error.message);
  }
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
