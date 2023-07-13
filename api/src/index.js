const app = require("./app"); // config de nuestro SERVER
const { conn } = require("./DB_connection"); // config de nuestra SYNC de ORM con la DB

const PORT = 5040;

app.listen(PORT, async () => {
  console.log(`Server raised in port: http://localhost:${PORT}`);
  await conn.sync({ force: true });
});
