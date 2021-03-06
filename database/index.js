require("dotenv").config();
const { Pool, Client } = require("pg");
const connectionLocation = `postgres://${process.env.PGUSER}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}?sslmode=require?ssl=true`;
// const connectionLocation = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;
const db = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  host: process.env.PGHOST,
  sslmode: 'require',
  ssl: true
});

db.connect()
.then(() => {
  console.log(`we're now connected to the database ...`)
});

module.exports = db;