import fastify from "fastify"
import { knex } from "./database"

const app = fastify()

app.get("/", async (req, res) => {
  const data = await knex("sqlite_schema").select("*")

  return res.send(data)
})

app.listen({ port: 3000 }, () => {
  console.log(`Server running!`)
})
