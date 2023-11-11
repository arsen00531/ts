import pg from 'pg'

const pool = new pg.Pool({
    connectionString: process.env.DB_URL,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_DATABASE
})

export {pool}