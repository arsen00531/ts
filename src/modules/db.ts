import pg from 'pg'
const pool = new pg.Pool({
    user: 'postgres',
    password: '123451Ra',
    host: 'localhost',
    port: 5432,
    database: 'chat'
})

export {pool}