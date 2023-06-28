const http = require("http");
const characters = require("./utils/data.js");
const { getCharacterId } = require("./controllers/characters.js");

const PORT = 5040;
http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // acceso a todo
    // /rickandmorty/character/:id
    const url = req.url.split("/");
    const part1 = url[1];
    const part2 = url[2];
    const id = url[3];

    if (part1 === "rickandmorty" && part2 === "characters") {
      return res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(characters));
    }
    if (part1 === "rickandmorty" && part2 === "character") {
      return getCharacterId(req, res, id);
    }
    if (req.url === "/") {
      return res
        .writeHead(200, { "Content-type": "text/plain" })
        .end("Server RICK");
    }
  })

  .listen(PORT, () => {
    console.log(`in port: http://localhost:${PORT}`);
  });
