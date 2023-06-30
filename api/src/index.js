const app = require("./app")

const PORT = 5040 

app.listen(PORT,()=>{
  console.log(`Server raised in port: http://localhost:${PORT}`);
})