import fastify from "fastify"
import crypto from "node:crypto"
import { knex } from "./database"

const app = fastify()

app.get("/", async (req, res) => {
  // const data = await knex("sqlite_schema").select("*")

  // const transaction = await knex("transactions")
  //   .insert({
  //     id: crypto.randomUUID(),
  //     title: "Transação Teste",
  //     amount: 1000,
  //   })
  //   .returning("*")

  const transactions = await knex("transactions")
    .where("amount", ">", 900)
    .select("*")

  return res.send(transactions)
})

app.listen({ port: 3000 }, () => {
  console.log(`Server running!`)
})
