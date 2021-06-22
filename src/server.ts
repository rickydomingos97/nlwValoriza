import express, { response } from "express";
// @types/express
const app = express();

/**
 * GET => buscar uma informacao
 * POST => inserir (Criar) uma informacao dentro da nossa api
 * PUT => Alterar uma informacao
 * DELETE => Remover um dado
 * PATCH => Alterar uma informacao especifica
 */


app.get("/test", (request, response) => {
  return response.send("Ola NLW");
})

app.post("/test-post", (request, response) => {
  return response.send("Ola NLW metodo POST");
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running now NLW"));