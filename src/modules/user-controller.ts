import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { fileURLToPath } from 'url';
import path, {dirname} from 'path'
import {pool} from './db.js'

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

export class userController {
    async getUsers(req: Request, res: Response) {
        const q: QueryResult = await pool.query('SELECT * FROM users')
    
        console.log(q.rows)
        res.render(path.join(__dirname, '../', 'index.ejs'), {lox: 'lox1'})
    }
}