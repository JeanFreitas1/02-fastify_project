// eslint-disable-next-line import/no-named-default
import { default as knexSetup } from "knex"

export const configDatabase = {
  client: "sqlite3",
  connection: {
    filename: "./tmp/database.db",
  },
  useNullAsDefault: true,
}

export const knex = knexSetup(configDatabase)
