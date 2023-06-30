// POST postFav: "/fav"
// DELETE deleteFav: "/fav/:id"
let myFavorites = [];

const STATUS_OK = 200;
const STATUS_ERROR = 404;

const postFav = function (req, res) {
  const { id, status, name, species, origin, image, gender } = req.body;
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
