// eslint-disable-next-line import/no-named-default
import { default as knexSetup, Knex } from "knex"
import { env } from "./env"

export const configDatabase: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === "sqlite"
      ? { filename: env.DATABASE_URL }
      : env.DATABASE_URL,

  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "db/migrations",
  },
}

export const knex = knexSetup(configDatabase)
