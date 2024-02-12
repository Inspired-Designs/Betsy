import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config({ path: "../.env" });

const { DATABASE_URL, EXPRESS_PORT } = process.env;
const { Pool } = pg;
const app = express();

let db = new Pool({
  connectionString: DATABASE_URL,
});

db.connect();
app.use(express.json());
app.use(logger);
app.use(cors())

app.get("/items", async (req, res) => {
  try {
    let data = db.query("SELECT * FROM items;");
    res.status(200).json(data.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("could not retrieve item information");
  }
});

app.get("/reviews", async (req, res) => {
  try {
    let data = db.query("SELECT * FROM reviews;");
    res.status(200).json(data.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("could not retrieve review information");
  }
});

app.get("/reviews/:id", async (req, res) => {
  try {
    let id = req.params;
    let data = db.query("SELECT * FROM reviews WHERE review_id = $1", [id]);
    if (data.rows.length === 0) {
      res.status(404).send("Review not found");
    } else {
      res.status(200).json(data.rows[0]);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("could not retrieve review information");
  }
});

app.get("/sellers", async (req, res) => {
  try {
    let data = await db.query("SELECT * FROM sellers");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("could not retrieve seller information");
  }
});

app.get("/shipping", async (req, res) => {
  try {
    let data = await db.query("SELECT * FROM shipping");
    res.status(200).json(data.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("could not retrieve shipping information");
  }
});

app.get("/pictures", async (req, res) => {
  try {
    let data = db.query("SELECT * FROM pictures");
    console.log(data, "pictures data");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("could not retrieve images information");
  }
});

app.get("/pictures/:id", async (req, res) => {
  try {
    console.log(req.params.id, "req params pictures");
    let id = req.params.id;
    let data = db.query("SELECT FROM pictures WHERE picture_id = $1", [id]);
    console.log(data, "picture data");
    if (data.rows.length === 0) {
      res.status(404).send("Image not found");
    } else {
      res.status(200).json(data.rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

function logger(req, res, next) {
  console.log(`The request method was ${req.method}`);
  console.log(`The request URL was ${req.url}`);
  next();
}

const { EXPRESS_PORT } = process.env;
app.listen(EXPRESS_PORT, () => {
  console.log(`Server running on port ${EXPRESS_PORT}`);
});
