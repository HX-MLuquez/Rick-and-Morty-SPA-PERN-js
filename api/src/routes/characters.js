const { Router } = require("express");
const router = Router();
const {
  getCharacterId,
  login,
  getAllCharacters,
} = require("../controllers/characters");

router.get("/character/:id", getCharacterId);
router.get("/login", login);
router.get("/allcharacters", getAllCharacters);

module.exports = router;

/*
GET getCharById: "/character/:id"
GET login: "/login"
GET getAllCharacters: "/allcharacters"
*/
