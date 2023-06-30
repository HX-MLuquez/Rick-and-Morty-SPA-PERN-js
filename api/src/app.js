const express = require("express");
const app = express();
const logger = require("morgan");

const routes = require("./routes/index.js")

//TODO: CORS
//TODO: para un dominio específico o para todos
//* Seteamos headers para la respuesta que le enviamos al cliente
app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000"); //Autorizo recibir solicitudes de este dominio
  res.header("Access-Control-Allow-Origin", "*"); //Autorizo recibir solicitudes de cualquier dominio
  res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //Autorizo recibir solicitudes con dichos hedears
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});

//* Middelwares
//! si no usamos express.json() la info por body llega solo así {}
app.use(express.json()); //TODO: <- body info
app.use(express.urlencoded({ extended: false })); //TODO: <- body info X INPUTS de FORMULARIOS
//* extended: false <-> datos que vienen de un form simple

app.use(logger("dev"));


//* ROUTES

app.use("/rickandmorty", routes)


module.exports = app 


/*
GET getCharById: "/character/:id"
GET login: "/login"
POST postFav: "/fav"
DELETE deleteFav: "/fav/:id"
*/
