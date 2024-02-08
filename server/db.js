import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: "./.env"});

const { DATABASE_URL } = process.env;
const { Pool } = pg;

const pool = new Pool({
    connectionString: DATABASE_URL
});

export default pool;
