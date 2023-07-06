// POST postFav: "/fav"
// DELETE deleteFav: "/fav/:id"
let myFavorites = [];

const STATUS_OK = 200;
//TODO: TESTING <-> fix status 404 to -> 500
const STATUS_ERROR = 500;

const postFav = function (req, res) {
  const { id, status, name, species, origin, image, gender } = req.body;

  //* Datos persistentes
  if (id === "RELOAD") return res.status(STATUS_OK).json(myFavorites);

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
    origin,
    image,
    gender,
  };
  myFavorites.push(character);
  res.status(STATUS_OK).json(myFavorites);
};

const deleteFav = function (req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(STATUS_ERROR).json({ message: "id null" });
  }
  const newFavorites = myFavorites.filter((ch) => ch.id !== Number(id));
  myFavorites = newFavorites;
  res.status(STATUS_OK).json(myFavorites);
};

module.exports = {
  deleteFav,
  postFav,
};
