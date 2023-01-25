import Express from "express";
import { config } from "dotenv";
config();

import search from "youtube-search";

const PORT = process.env.PORT || 3001;
const TOPIC = process.env.TOPIC || "cricket";
const API_KEYS = process.env.TOKEN.split(',').map(key => key.trim()) || ["null"];

const app = Express();
app.set("view engine", "ejs");


const opts = {
    maxResults: 10,
    key: API_KEYS[0],
    order: "date",
    type: "video"
};

app.get("/", async (req, res) => {
    await search(TOPIC, opts, (err, results) => {
        if (err) {
            console.error(err);
            res.json({ msg: "error" });
        }
        else {
            res.render("home", { data: JSON.stringify(results) });
        }
    });
});


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});