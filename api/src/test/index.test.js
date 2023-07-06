const session = require("supertest");
const app = require("../app");

const agent = session(app);
var props;
var favorites;
var character1;
var character2;

beforeEach(() => {
  console.log("::::::::::::::::::::INICIALIZANDO BEFOREACH <-> TEST::::::::::::::::::::")
  props = ["id", "name", "species", "gender", "status", "origin", "image"];
  favorites = [];
  character1 = {
    id: 1,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    origin: "unknown",
    image: "https://example.com/image1.jpg",
    gender: "Male",
  };
  character2 = {
    id: 2,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    origin: "Earth (C-137)",
    image: "https://example.com/image2.jpg",
    gender: "Male",
  };
});


/*
Pasos previos realizados
* 01. Cree carpeta test y archivo index.test.js
* 02. Instalar npm i --save-dev jest supertest
* 03. Configurar package.json ->  "test": "jest --detectOpenHandles",
* 04. Correcciones de respuestas según lo esperado en README TESTING (ejemplo: status(500) para los errores)
* 05. Implementar beforeEach para que corra antes de cada test

Recordar que estaremos comparando este favorites con el myFavorites de nuestro servidor
*/