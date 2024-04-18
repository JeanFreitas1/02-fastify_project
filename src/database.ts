// eslint-disable-next-line import/no-named-default
import { default as knexSetup, Knex } from "knex"
import { env } from "./env"

export const configDatabase: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "db/migrations",
  },
}

export const knex = knexSetup(configDatabase)
