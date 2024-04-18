// eslint-disable-next-line import/no-named-default
import { default as knexSetup, Knex } from "knex"
import "dotenv/config"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL env not found!")
}

export const configDatabase: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "db/migrations",
  },
}

export const knex = knexSetup(configDatabase)
