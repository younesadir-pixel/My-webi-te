const db = require('./db');

async function migrate() {
    try {
        console.log("Starting database migration...");

        // 1. Add firstname column
        try {
            await db.query(`ALTER TABLE users ADD COLUMN firstname VARCHAR(255) NOT NULL AFTER id`);
            console.log("✅ Added column: firstname");
        } catch (error) {
            console.log("ℹ️ Column firstname might already exist or error:", error.message);
        }

        // 2. Add lastname column
        try {
            await db.query(`ALTER TABLE users ADD COLUMN lastname VARCHAR(255) NOT NULL AFTER firstname`);
            console.log("✅ Added column: lastname");
        } catch (error) {
            console.log("ℹ️ Column lastname might already exist or error:", error.message);
        }

        // 3. Drop name column (optional, but needed if it's NOT NULL and blocking inserts)
        try {
            await db.query(`ALTER TABLE users DROP COLUMN name`);
            console.log("✅ Dropped column: name");
        } catch (error) {
            console.log("ℹ️ Column name might already be gone or error:", error.message);
        }

        console.log("Migration completed.");
        process.exit(0);
    } catch (error) {
        console.error("Migration failed:", error);
        process.exit(1);
    }
}

migrate();
