import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const pool = new pg.Pool({
    connectionString: process.env.DB_URL || process.env.LOCAL_DB_URL,
    ssl: process.env.DB_URL ? true : false
})

export {pool}