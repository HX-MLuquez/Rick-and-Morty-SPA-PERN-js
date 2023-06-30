const {Router} = require("express");
const router = Router()
const characters = require("./characters.js")
const favorites = require("./favorites.js")

router.use("/", characters);
router.use("/favorite", favorites);

// router.get("/", (req,res)=> res.status(200).json({message:"APP RICK ANS MORTY SERVER"}));

module.exports = router