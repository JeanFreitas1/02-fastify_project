// eslint-disable-next-line import/no-named-default
import { default as knexSetup } from "knex"

export const knex = knexSetup({
  client: "sqlite3",
  connection: {
    filename: "./tmp/database.db",
  },
})
