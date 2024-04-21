import fastify from "fastify"
import cookie from "@fastify/cookie"
// import crypto from "node:crypto"
import { transactionsRoutes } from "./routes/transactions"
import { env } from "./env"

const app = fastify()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: "transactions",
})

app.listen({ port: env.PORT }, () => {
  console.log(`Server running on port ${env.PORT}...`)
})
