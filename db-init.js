import sql from "@leafac/sqlite"
const dbInit = db => {
    db.execute(
        sql`CREATE TABLE IF NOT EXISTS "jobs"(
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "timestamp" DATETIME
        );`
    );
    db.execute(
        sql`CREATE TABLE IF NOT EXISTS "videos"(
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "job_id" INTEGER,
            "data" TEXT,
            CONSTRAINT "fk_job" FOREIGN KEY ("job_id") REFERENCES jobs("id")
        );`
    );
}

export default dbInit;