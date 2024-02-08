import express from 'express';
import pool from './db.js';

const app = express();

app.use(express.json())
app.use(logger)

app.get('/items', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM items;');
        res.status(200).json(data.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("could not retrieve item information");
    }
});

app.get('/reviews', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM reviews');
        res.status(200).json(data.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("could not retrieve review information");
    }
});

app.get('/reviews/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await pool.query('SELECT * FROM reviews WHERE review_id = $1',[id]);
        if (data.rows.length === 0) {
            res.status(404).send("Review not found");
        } else {
            res.status(200).json(data.rows[0])
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send("could not retrieve review information");
    }
});

app.get("/pictures", async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM pictures");
        res.status(200).json(data.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("could not retrieve images information");
    }
});

app.get("/pictures/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await pool.query("SELECT * FROM pictures WHERE picture_id = $1", [id]);
        if (data.rows.length === 0) {
            res.status(404).send("Image not found");
        } else {
            res.status(200).json(data.rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(`Could not retrieve specified picture`);
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
