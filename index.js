import Express from "express";
import { Database } from "@leafac/sqlite";

import dbInit from "./db-init.js";
import fetchJob from "./fetch-job.js";
import dbFetch from "./db-fetch.js";

const PORT = process.env.PORT;

const database = new Database("db.sqlite");

dbInit(database);
fetchJob(database);

const app = Express();
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    res.render("home", { data: dbFetch(req.query.page_id || 0, database) });
});


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});