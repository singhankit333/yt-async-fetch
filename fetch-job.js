import search from "youtube-search";
import sql from "@leafac/sqlite";

const TOPIC = process.env.TOPIC || "cricket";
const API_KEYS = process.env.TOKEN.split(',').map(key => key.trim()) || ["null"];

const opts = {
    maxResults: 10,
    key: API_KEYS[0],
    order: "date",
    type: "video"
};

const fetchJob = (db) => {
    setInterval(async () => {
        await search(TOPIC, opts, (e, r) => {
            if (e) console.error(e);
            else {
                const newDate = new Date();
                const dateStr = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
                db.run(sql`INSERT INTO "jobs"("timestamp") VALUES (${dateStr});`);
                const { id } = db.get(sql`SELECT LAST_INSERT_ROWID() AS id`);
                r.forEach(_r => { db.run(sql`INSERT into "videos"("job_id","data") values (${id},${JSON.stringify(_r)});`); });
            }
        });
    }, 5000);
}

export default fetchJob;