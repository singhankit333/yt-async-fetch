import sql from "@leafac/sqlite";

const dbFetch = (page_id, db) => {
    const { tableSize } = db.get(sql`select max(id) as "tableSize" from "jobs"`);
    if (tableSize === null) return JSON.stringify({ message: "No records exist" });
    const job_id = tableSize - page_id;
    if (job_id <= 0) return JSON.stringify({ message: "Inavlid page number" });
    const rowDetails = db.get(sql`select * from "jobs" where "id"=${job_id};`);
    const videos = db.all(sql`select * from "videos" where "job_id"=${job_id};`);
    return JSON.stringify({ ...rowDetails, videos: videos });
}

export default dbFetch;