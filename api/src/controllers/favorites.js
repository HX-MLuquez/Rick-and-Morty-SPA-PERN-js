// POST postFav: "/fav"
// DELETE deleteFav: "/fav/:id"
// let myFavorites = [];
const { User, Favorite } = require("../DB_connection");

const STATUS_OK = 200;
//TODO: TESTING <-> fix status 404 to -> 500
const STATUS_ERROR = 500;

const postFav = async function (req, res) {
  try {
    const { id, status, name, species, origin, image, gender } = req.body;

    //* Datos persistentes
    if (id === "RELOAD") {
      const favorites = await Favorite.findAll();
      return res.status(STATUS_OK).json(favorites);
    }

    if (!id || !name || !image) {
      return res
        .status(STATUS_ERROR)
        .json({ message: "error, not found create fav" });
    }
    const character = {
      id,
      status,
      name,
      species,
      origin: origin?.name,
      image,
      gender,
    };
    console.log(":::::", character);
    // myFavorites.push(character);
    const newChar = await Favorite.create(character);
//! RELACION
// await newChar.setTemperament(1)

    const favorites = await Favorite.findAll();
    res.status(STATUS_OK).json(favorites);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
};

const deleteFav = async function (req, res) {
  try {
    const { id } = req.params;
    const char = await Favorite.findByPk(id);
    if (char) {
      await Favorite.destroy({
        where: {
          id,
        },
      });
      const favorites = await Favorite.findAll();
      res.status(STATUS_OK).json(favorites);
    } else {
      res
        .status(STATUS_ERROR)
        .json({ message: "el character ya ha sido eliminado" });
    }
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
};

module.exports = {
  deleteFav,
  postFav,
};
